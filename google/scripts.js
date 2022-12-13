import { subprocess, fs } from "https://cdn.skypack.dev/@jspawn/jspawn@0.4.0";
import * as util from "https://cdn.skypack.dev/apps-util";

const imageSrc = ['./assets/jerry_lawson/main-sprite.png'];
const imageSrcDisplay = ['https://google.com/logos/2022/lawson/r11292/main-sprite.png'];
const imageProperties = [[0,0,164,320,31],[0,323,164,320,20],[0,646,164,320,20],[0,1017,0,320,180],[0,1418,1629,20,20],[0,306,1631,20,20],[0,329,1631,20,20],[0,352,1632,20,20],[0,375,1632,20,20],[0,398,1632,20,20],[0,421,1632,20,20],[0,444,1632,20,20],[0,306,628,16,16],[0,357,656,16,16],[0,1456,665,16,16],[0,536,1632,19,19],[0,138,1632,19,19],[0,160,1632,19,19],[0,1153,1634,19,19],[0,1175,1634,19,19],[0,1197,19,19,0],[0,1241,1634,19,19],[0,969,164,20,16],[0,992,164,20,16],[0,1440,456,20,16],[0,1454,0,17,16],[0,306,590,17,16],[0,306,609,17,16],[0,1326,1635,19,19],[0,1348,1635,19,19],[0,1370,1635,19,19],[0,1392,1635,19,19],[0,969,1636,19,19],[0,991,1636,19,19],[0,1441,1636,19,19],[0,911,1638,19,19],[0,1448,798,22,22],[0,1450,823,22,22],[0,1450,848,22,22],[0,561,685,16,16],[0,1456,684,16,16],[0,1456,703,16,16],[0,722,16,16,0],[0,490,1632,20,16],[0,513,1632,20,16],[0,1428,1211,21,21],[0,1428,1235,21,21],[0,1428,1259,21,21],[0,1428,1283,21,21],[0,969,738,16,16],[0,765,739,16,16],[0,1456,741,16,16],[0,765,758,16,16],[0,1071,774,16,16],[0,918,789,16,16],[0,1428,1061,22,22],[0,1428,1086,22,22],[0,1428,1111,22,22],[0,1428,1136,22,22],[0,1428,1161,22,22],[0,1428,1186,22,22],[0,865,518,78,93],[0,1447,98,8,8],[0,959,187,6,8],[0,172,519,66,31],[0,959,198,5,8],[0,946,521,66,31],[0,959,209,5,8],[0,1015,521,66,31],[0,959,220,5,8],[0,241,523,66,31],[0,311,226,5,8],[0,310,523,66,31],[0,959,231,5,8],[0,357,793,48,48],[0,867,942,48,48],[0,663,1402,48,48],[0,714,1402,48,48],[0,153,1405,48,48],[0,357,1405,48,48],[0,408,1405,48,48],[0,459,1405,48,48],[0,510,1405,48,48],[0,1020,1422,48,48],[0,1071,1422,48,48],[0,1122,1425,48,48],[0,306,1427,48,48],[0,1173,1430,48,0],[0,918,1434,48,48],[0,1103,477,96,48],[0,532,586,48,96],[0,561,1435,48,48],[0,204,1436,48,48],[0,1275,1436,48,48],[0,1326,1436,48,48],[0,1377,1436,48,48],[0,969,1437,48,48],[0,0,1440,48,48],[0,184,1628,16,16],[0,102,1440,48,48],[0,765,1442,48,48],[0,510,1558,48,48],[0,561,1588,48,48],[0,198,331,9,17],[0,198,351,9,17],[0,198,371,9,17],[0,747,187,209,130],[0,1301,501,83,62],[0,1387,501,83,62],[0,0,505,83,0],[0,693,518,83,62],[0,779,518,83,62],[0,969,183,238,161],[0,323,187,209,135],[0,998,497,87,21],[0,535,187,209,135],[0,1408,390,49,30],[0,631,523,49,30],[0,1210,528,49,30],[0,172,553,49,30],[0,946,555,49,30],[0,998,555,49,30],[0,631,556,49,30],[0,224,557,49,30],[0,276,557,49,30],[0,1210,561,49,30],[0,1262,566,49,30],[0,1314,566,49,30],[0,1447,23,22,22],[0,1447,48,22,22],[0,1447,73,22,22],[0,905,419,22,22],[0,583,22,22,0],[0,1440,308,11,12],[0,707,325,36,26],[0,707,354,36,26],[0,707,383,36,26],[0,1340,23,104,26],[0,1340,52,104,26],[0,1340,81,104,26],[0,1103,446,36,26],[0,634,642,36,26],[0,787,682,36,26],[0,1210,183,227,141],[0,1394,477,65,20],[0,1340,0,111,20],[0,0,198,209,130],[0,1439,110,30,30],[0,92,1616,20,20],[0,773,1618,20,20],[0,1015,1626,20,20],[0,1084,1626,20,20],[0,888,1628,20,20],[0,658,1629,20,20],[0,727,20,20,0],[0,1130,1629,20,20],[0,0,0,1014,161],[0,816,1034,48,48],[0,51,1083,48,48],[0,102,1083,48,48],[0,765,1085,48,48],[0,816,1085,48,48],[0,663,1147,48,48],[0,714,1147,48,48],[0,153,1150,48,48],[0,357,1150,48,48],[0,408,1150,48,48],[0,938,687,48,48],[0,1099,708,48,48],[0,1150,708,48,48],[0,1201,711,48,48],[0,1193,762,48,48],[0,1252,716,48,48],[0,1295,767,48,48],[0,1040,723,48,48],[0,255,773,48,48],[0,1346,773,48,48],[0,0,726,48,48],[0,663,790,48,48],[0,51,726,48,48],[0,714,790,48,48],[0,102,726,48,48],[0,153,793,48,48],[0,889,738,48,48],[0,561,823,48,48],[0,357,742,48,48],[0,828,48,48,0],[0,51,828,48,48],[0,663,739,48,48],[0,1348,824,48,48],[0,459,742,48,48],[0,102,828,48,48],[0,510,742,48,48],[0,765,830,48,48],[0,816,830,48,48],[0,1340,110,96,48],[0,1143,426,96,48],[0,1366,566,48,96],[0,1417,566,48,96],[0,306,713,48,48],[0,306,764,48,48],[0,1244,767,48,48],[0,612,739,48,48],[0,204,824,48,48],[0,255,824,48,48],[0,1303,716,48,48],[0,102,777,48,48],[0,765,779,48,48],[0,989,720,48,48],[0,940,771,48,48],[0,561,772,48,48],[0,940,771,48,48],[0,561,721,48,48],[0,204,773,48,48],[0,204,722,48,48],[0,1397,773,48,48],[0,991,774,48,48],[0,1397,773,48,48],[0,0,777,48,48],[0,1354,722,48,48],[0,816,779,48,48],[0,867,789,48,48],[0,255,722,48,48],[0,51,777,48,48],[0,1091,759,48,48],[0,1142,759,48,48],[0,1405,722,48,48],[0,612,790,48,48],[0,1297,824,48,48],[0,153,742,48,48],[0,714,739,48,48],[0,969,825,48,48],[0,1399,824,48,48],[0,787,728,48,48],[0,357,793,48,48],[0,459,793,48,48],[0,408,793,48,48],[0,408,793,48,48],[0,459,793,48,48],[0,510,793,48,48],[0,1042,810,48,48],[0,212,198,96,96],[0,212,297,96,96],[0,747,96,96,0],[0,311,325,96,96],[0,838,728,48,48],[0,357,793,48,48],[0,306,815,48,48],[0,1195,818,48,48],[0,1246,818,48,48],[0,918,822,48,48],[0,1093,810,48,48],[0,1144,813,48,48],[0,510,793,48,48],[0,1042,810,48,48],[0,867,840,48,48],[0,612,841,48,48],[0,663,841,48,48],[0,714,892,48,48],[0,153,895,48,48],[0,153,844,48,48],[0,408,48,48,0],[0,510,895,48,48],[0,1020,912,48,48],[0,1071,912,48,48],[0,306,866,48,48],[0,918,924,48,48],[0,561,925,48,48],[0,1173,869,48,48],[0,102,930,48,48],[0,1224,869,48,48],[0,765,932,48,48],[0,918,873,48,48],[0,816,932,48,48],[0,255,875,48,48],[0,765,983,48,48],[0,0,879,48,48],[0,357,997,48,48],[0,51,879,48,48],[0,408,997,48,48],[0,1326,875,48,0],[0,102,879,48,48],[0,459,997,48,48],[0,765,881,48,48],[0,510,997,48,48],[0,1020,1014,48,48],[0,1071,1014,48,48],[0,1242,426,96,48],[0,1341,426,96,48],[0,0,570,48,96],[0,51,570,48,96],[0,714,841,48,48],[0,714,841,48,48],[0,357,895,48,48],[0,1275,875,48,48],[0,816,983,48,48],[0,867,993,48,48],[0,357,844,48,48],[0,1326,926,48,48],[0,1377,926,48,150],[0,408,844,48,48],[0,1122,915,48,48],[0,1122,915,48,48],[0,306,917,48,48],[0,459,844,48,48],[0,1173,920,48,48],[0,1224,920,48,48],[0,510,844,48,48],[0,204,926,48,48],[0,255,926,48,48],[0,1071,861,48,48],[0,969,927,48,48],[0,0,930,48,48],[0,1020,861,48,48],[0,1275,926,48,48],[0,816,881,48,48],[0,867,891,48,48],[0,612,892,48,48],[0,663,892,48,48],[0,1122,864,48,48],[0,51,930,48,48],[0,612,994,48,48],[0,969,876,48,48],[0,1377,875,48,48],[0,153,997,48,48],[0,714,994,48,48],[0,867,942,48,48],[0,1224,971,48,48],[0,1224,971,48,48],[0,918,975,48,48],[0,867,942,48,48],[0,357,946,48,48],[0,357,946,48,48],[0,357,946,48,48],[0,357,946,48,48],[0,612,943,48,48],[0,612,943,48,48],[0,612,943,48,48],[0,946,48,48,0],[0,561,976,48,48],[0,1224,971,48,48],[0,408,946,48,48],[0,408,946,48,48],[0,408,946,48,48],[0,408,946,48,48],[0,663,943,48,48],[0,663,943,48,48],[0,663,943,48,48],[0,714,943,48,48],[0,714,943,48,48],[0,459,946,48,48],[0,510,946,48,48],[0,1020,963,48,48],[0,1071,963,48,48],[0,1122,966,48,48],[0,306,968,48,48],[0,1173,971,48,48],[0,306,968,48,48],[0,1173,971,48,48],[0,1173,971,48,48],[0,204,875,48,48],[0,204,977,48,48],[0,204,977,48,48],[0,1326,977,48,48],[0,1377,977,48,48],[0,969,978,48,48],[0,0,981,48,48],[0,255,977,48,48],[0,1275,977,48,48],[0,51,981,48,48],[0,102,981,48,48],[0,1122,1017,48,48],[0,306,1019,48,48],[0,1173,1022,48,48],[0,1224,1022,48,48],[0,918,1026,48,48],[0,561,1027,48,48],[0,561,1027,48,48],[0,255,1028,48,48],[0,255,1028,48,0],[0,1224,1073,48,48],[0,1173,1073,48,48],[0,0,1032,48,48],[0,0,1032,48,48],[0,255,1079,48,48],[0,1275,1079,48,48],[0,1326,1079,48,48],[0,1377,1079,48,48],[0,51,1032,48,48],[0,51,1032,48,48],[0,102,1032,48,48],[0,102,1032,48,48],[0,765,1034,48,48],[0,765,1034,48,48],[0,612,1045,48,48],[0,612,1045,48,48],[0,408,1048,48,48],[0,408,1048,48,48],[0,459,1048,48,48],[0,459,1048,48,48],[0,714,1045,48,48],[0,714,1045,48,48],[0,510,1048,48,48],[0,510,1048,48,48],[0,1020,1065,48,48],[0,1020,1065,48,48],[0,816,1187,48,48],[0,867,1197,48,48],[0,612,1198,48,48],[0,663,1198,48,48],[0,0,430,96,48],[0,99,430,96,48],[0,683,583,48,96],[0,379,586,48,96],[0,204,1028,48,48],[0,204,1028,48,48],[0,306,1070,48,48],[0,663,1045,48,48],[0,663,1045,48,48],[0,102,1185,48,48],[0,1275,1028,48,48],[0,1275,1028,48,48],[0,969,1080,48,48],[0,0,1083,48,48],[0,969,1080,48,48],[0,1275,1028,48,48],[0,1326,1028,48,48],[0,1326,1028,48,48],[0,1326,1028,48,48],[0,918,1077,48,48],[0,561,1078,48,48],[0,204,1079,48,48],[0,997,588,48,72],[0,997,588,48,72],[0,583,589,48,72],[0,204,590,48,72],[0,255,590,48,72],[0,1048,591,48,72],[0,1099,591,48,57],[0,1099,591,48,57],[0,591,48,57,0],[0,1252,599,48,57],[0,1303,599,48,57],[0,102,570,48,96],[0,102,570,48,96],[0,734,583,48,96],[0,785,583,48,96],[0,153,586,48,96],[0,328,557,48,96],[0,1377,1028,48,48],[0,1377,1028,48,48],[0,1071,1065,48,48],[0,1122,1068,48,48],[0,969,1029,48,48],[0,969,1029,48,48],[0,765,1187,48,48],[0,357,1048,48,48],[0,153,1048,48,48],[0,357,1048,48,48],[0,153,1048,48,0],[0,102,1134,48,48],[0,765,1136,48,48],[0,816,1136,48,48],[0,867,1146,48,48],[0,612,1147,48,48],[0,1071,1116,48,48],[0,1122,1119,48,48],[0,306,1121,48,48],[0,1173,1124,48,48],[0,1224,1124,48,48],[0,867,1095,48,48],[0,612,1096,48,48],[0,663,1096,48,48],[0,714,1096,48,48],[0,153,1099,48,48],[0,816,1034,48,48],[0,816,1034,48,48],[0,918,1128,48,48],[0,1129,48,48,0],[0,255,1130,48,48],[0,1275,1130,48,48],[0,357,1099,48,48],[0,408,1099,48,48],[0,459,1099,48,48],[0,510,1099,48,48],[0,1020,1116,48,48],[0,1326,1130,48,48],[0,1377,1130,48,48],[0,969,1131,48,48],[0,0,1134,48,48],[0,51,1134,48,48],[0,816,1085,48,48],[0,867,1044,48,48],[0,867,1044,48,48],[0,459,1150,48,48],[0,510,1150,48,48],[0,1020,1167,48,48],[0,1071,1167,48,48],[0,918,1179,48,48],[0,561,1180,48,48],[0,204,1181,48,48],[0,561,1180,48,48],[0,918,1179,48,48],[0,867,1044,48,48],[0,255,1181,48,48],[0,1275,1181,48,48],[0,1326,1181,48,48],[0,867,1044,48,48],[0,1122,1170,48,48],[0,306,1172,48,48],[0,1173,1175,48,48],[0,1224,1175,48,48],[0,1122,1170,48,48],[0,1377,1181,48,48],[0,969,1182,48,48],[0,0,1185,48,48],[0,51,1185,48,48],[0,1377,1181,48,48],[0,714,1198,48,48],[0,153,1201,48,48],[0,357,1201,48,48],[0,408,1201,48,200],[0,459,1201,48,48],[0,408,1252,48,48],[0,1020,1218,48,48],[0,1020,1269,48,48],[0,204,1232,48,48],[0,255,1283,48,48],[0,1275,1283,48,48],[0,1326,1283,48,48],[0,1377,1283,48,48],[0,255,1232,48,48],[0,459,1303,48,48],[0,1275,1232,48,48],[0,510,1303,48,48],[0,1326,1232,48,48],[0,1020,1320,48,48],[0,0,1236,48,48],[0,306,1376,48,48],[0,1173,1379,48,48],[0,1224,1379,48,48],[0,918,1383,48,48],[0,867,1248,48,48],[0,969,1386,48,48],[0,612,1249,48,48],[0,0,1389,48,48],[0,102,1236,48,48],[0,1275,1385,48,48],[0,663,1249,48,48],[0,51,1389,48,48],[0,714,1249,48,48],[0,102,1389,48,48],[0,765,1391,48,48],[0,816,1391,48,48],[0,905,446,96,48],[0,1004,446,96,48],[0,430,586,48,96],[0,481,586,48,96],[0,510,1201,48,48],[0,459,1252,48,48],[0,1252,48,48,0],[0,561,1384,48,48],[0,204,1385,48,48],[0,1071,1218,48,48],[0,816,1289,48,48],[0,867,1299,48,48],[0,612,1300,48,48],[0,816,1289,48,48],[0,1122,1221,48,48],[0,1071,1269,48,48],[0,1122,1272,48,48],[0,306,1274,48,48],[0,1122,1272,48,48],[0,1173,1277,48,48],[0,306,1223,48,48],[0,1224,1277,48,48],[0,918,1281,48,48],[0,561,1282,48,48],[0,204,1283,48,48],[0,1173,48,48,0],[0,0,1287,48,48],[0,51,1287,48,48],[0,102,1287,48,48],[0,918,1230,48,48],[0,663,1300,48,48],[0,714,1300,48,48],[0,153,1303,48,48],[0,357,1303,48,48],[0,1224,1226,48,48],[0,765,1289,48,48],[0,153,1252,48,48],[0,357,1252,48,48],[0,561,1231,48,48],[0,408,1303,48,48],[0,255,1385,48,48],[0,816,1238,48,48],[0,765,1238,48,48],[0,1377,1385,48,48],[0,1326,48,48,0],[0,1122,1323,48,48],[0,306,1325,48,48],[0,1173,1328,48,48],[0,1224,1328,48,48],[0,918,1332,48,48],[0,561,1333,48,48],[0,204,1334,48,48],[0,255,1334,48,48],[0,997,663,48,54],[0,1354,665,48,54],[0,1405,665,48,54],[0,836,614,48,54],[0,836,614,48,54],[0,887,614,48,54],[0,1099,651,48,54],[0,1252,659,48,54],[0,1303,659,48,54],[0,997,663,48,54],[0,1275,1334,48,48],[0,1326,1334,48,48],[0,1377,1334,48,48],[0,969,1335,48,48],[0,255,665,48,54],[0,1048,666,48,54],[0,0,669,48,54],[0,1150,651,48,54],[0,1150,651,48,54],[0,1201,654,48,54],[0,306,656,48,54],[0,583,664,48,54],[0,204,665,48,54],[0,255,665,48,54],[0,410,325,96,96],[0,509,325,96,96],[0,608,325,96,96],[0,1210,327,96,96],[0,1309,327,96,96],[0,0,331,96,96],[0,99,331,96,96],[0,945,347,96,96],[0,969,1233,48,48],[0,1338,48,48,0],[0,612,1351,48,48],[0,663,1351,48,48],[0,714,1351,48,48],[0,153,1354,48,48],[0,357,1354,48,48],[0,408,1354,48,48],[0,459,1354,48,48],[0,51,1338,48,48],[0,102,1338,48,48],[0,765,1340,48,48],[0,816,1340,48,48],[0,510,1354,48,48],[0,1020,1371,48,48],[0,1071,1371,48,48],[0,1122,1374,48,48],[0,867,1401,48,48],[0,612,1402,48,48],[0,612,1453,48,48],[0,153,1456,48,0],[0,1173,1481,48,48],[0,306,1478,48,48],[0,1224,1481,48,48],[0,867,1503,48,48],[0,612,1504,48,48],[0,663,1504,48,48],[0,255,1436,48,48],[0,918,1587,48,48],[0,51,1440,48,48],[0,306,1580,48,48],[0,204,1589,48,48],[0,255,1589,48,48],[0,1275,1589,48,48],[0,1202,96,48,0],[0,663,1453,48,48],[0,714,1453,48,48],[0,1020,1575,48,48],[0,1071,1575,48,48],[0,1326,1487,48,48],[0,1377,1487,48,48],[0,969,1488,48,48],[0,1326,1487,48,48],[0,357,1456,48,48],[0,408,1456,48,48],[0,459,1456,48,48],[0,408,1456,48,48],[0,459,1456,48,48],[0,510,1456,48,48],[0,1020,1473,48,48],[0,1071,1473,48,48],[0,1122,1476,48,150],[0,918,1485,48,48],[0,561,1486,48,48],[0,204,1487,48,48],[0,255,1487,48,48],[0,0,1491,48,48],[0,51,1491,48,48],[0,102,1491,48,48],[0,765,1493,48,48],[0,1275,1487,48,48],[0,816,1442,48,48],[0,867,1452,48,48],[0,816,1493,48,48],[0,1122,1578,48,48],[0,1224,1583,48,48],[0,1173,1583,48,48],[0,714,1504,48,48],[0,306,1529,48,0],[0,1224,1532,48,48],[0,918,1536,48,48],[0,561,1537,48,48],[0,153,1507,48,48],[0,357,1507,48,48],[0,408,1507,48,48],[0,459,1507,48,48],[0,51,669,48,54],[0,102,669,48,54],[0,836,671,48,54],[0,736,682,48,54],[0,153,685,48,54],[0,357,685,48,54],[0,204,1538,48,48],[0,255,1538,48,48],[0,1275,1538,48,48],[0,1326,1538,48,48],[0,510,1507,48,48],[0,1020,1524,48,48],[0,1071,1524,48,48],[0,1122,1527,48,100],[0,887,671,48,54],[0,634,682,48,54],[0,685,682,48,54],[0,408,685,48,54],[0,459,685,48,54],[0,510,685,48,54],[0,1044,347,96,96],[0,198,396,96,96],[0,707,419,96,96],[0,806,419,96,96],[0,297,424,96,96],[0,396,424,96,96],[0,495,424,96,96],[0,594,424,96,96],[0,1377,1538,48,48],[0,765,1544,48,48],[0,816,1544,48,48],[0,867,1554,48,48],[0,612,1555,48,48],[0,663,1555,48,48],[0,714,1555,48,48],[0,153,1558,48,48],[0,357,1558,48,48],[0,969,1539,48,48],[0,0,1542,48,48],[0,51,1542,48,48],[0,102,1542,48,48],[0,255,1538,48,48],[0,1326,1538,48,48],[0,408,1558,48,48],[0,459,1558,48,48],[0,959,264,4,4],[0,311,270,4,4],[0,959,271,4,4],[0,311,277,4,4],[0,959,278,4,4],[0,311,284,4,4],[0,311,291,4,4],[0,959,292,4,4],[0,311,298,4,4],[0,959,285,4,4],[0,959,299,4,4],[0,311,305,4,4],[0,959,306,4,4],[0,1408,327,60,60],[0,1439,143,30,30],[0,1454,308,4,4],[0,1461,308,4,4],[0,1468,308,4,4],[0,311,312,4,4],[0,1458,98,8,4],[0,311,237,4,8],[0,1454,315,4,4],[0,1461,315,4,4],[0,1468,315,4,4],[0,1460,390,4,4],[0,1467,390,4,4],[0,297,396,4,4],[0,1460,397,4,4],[0,1467,397,4,4],[0,297,403,4,4],[0,1460,404,4,4],[0,1467,404,4,4],[0,297,410,4,4],[0,1143,410,4,4],[0,1150,410,4,4],[0,1164,410,4,4],[0,1171,410,4,4],[0,1178,410,4,4],[0,1157,410,4,4],[0,1185,410,4,4],[0,1192,410,4,4],[0,1199,410,4,4],[0,379,523,60,60],[0,1440,209,30,30],[0,1460,411,4,4],[0,1467,411,4,4],[0,1143,417,4,4],[0,1150,417,4,4],[0,311,198,8,4],[0,959,242,8,0],[0,1164,417,4,4],[0,1171,417,4,4],[0,1178,417,4,4],[0,1185,417,4,4],[0,1192,417,4,4],[0,1199,417,4,4],[0,930,419,4,4],[0,937,419,4,4],[0,693,424,4,4],[0,930,426,4,4],[0,937,426,4,4],[0,693,431,4,4],[0,930,433,4,4],[0,693,438,4,4],[0,693,445,4,4],[0,693,452,4,4],[0,937,433,4,4],[0,1463,456,4,4],[0,693,459,4,4],[0,1463,463,4,4],[0,505,523,60,60],[0,1440,275,30,30],[0,693,466,4,4],[0,1463,470,4,4],[0,693,473,4,4],[0,1462,477,4,4],[0,311,205,8,4],[0,311,248,4,8],[0,186,481,4,4],[0,693,480,4,4],[0,1462,484,4,4],[0,693,487,4,4],[0,1462,491,4,4],[0,279,495,4,4],[0,286,495,4,4],[0,693,494,4,4],[0,683,572,4,4],[0,1468,573,4,4],[0,153,577,4,4],[0,160,577,4,4],[0,1468,580,4,4],[0,1468,587,4,4],[0,1354,599,4,4],[0,1468,601,4,4],[0,1354,606,4,4],[0,1468,594,4,4],[0,1468,608,4,4],[0,938,614,4,4],[0,1354,613,4,4],[0,1147,60,60,0],[0,1468,615,4,4],[0,1354,620,4,4],[0,938,621,4,4],[0,1468,622,4,4],[0,311,219,8,4],[0,311,259,4,8],[0,1354,627,4,4],[0,938,628,4,4],[0,1468,629,4,4],[0,1354,634,4,4],[0,938,635,4,4],[0,1468,636,4,4],[0,673,642,4,4],[0,1354,641,4,4],[0,1088,497,4,4],[0,1095,497,4,4],[0,693,501,4,4],[0,279,502,4,4],[0,286,502,4,4],[0,172,505,4,4],[0,1095,504,4,4],[0,693,508,4,4],[0,279,509,4,4],[0,1088,504,4,0],[0,1088,511,4,4],[0,1095,511,4,4],[0,1084,528,60,60],[0,1262,528,30,30],[0,1088,518,4,4],[0,1095,518,4,4],[0,683,523,4,4],[0,683,530,4,4],[0,311,212,8,4],[0,959,253,4,8],[0,683,537,4,4],[0,683,544,4,4],[0,683,551,4,4],[0,683,558,4,4],[0,683,565,4,4],[0,1468,566,4,4],[0,153,570,4,4],[0,160,570,4,4],[0,634,589,42,50],[0,1428,928,42,50],[0,1428,875,42,50],[0,93,481,90,21],[0,186,495,90,21],[0,905,497,90,18],[0,1301,477,90,21],[0,0,481,90,21],[0,1340,161,90,18],[0,1428,981,39,48],[0,1020,825,16,16],[0,788,1595,20,20],[0,834,1595,20,20],[0,811,1595,20,20],[0,857,1605,20,20],[0,612,1606,20,20],[0,880,1605,20,20],[0,23,1593,20,20],[0,69,1593,20,20],[0,46,1593,20,20],[0,92,1593,20,20],[0,765,1595,20,20],[0,115,1593,20,20],[0,945,320,20,20],[0,1453,1084,20,20],[0,1453,1061,20,20],[0,161,1609,20,20],[0,1372,1612,20,20],[0,357,1609,20,20],[0,518,1609,20,20],[0,1349,1612,20,20],[0,1326,1612,20,20],[0,1451,1544,20,20],[0,1451,1567,20,20],[0,1428,1560,20,20],[0,1453,1176,20,20],[0,1452,1222,20,20],[0,1453,1199,20,20],[0,1452,1245,20,20],[0,1451,1429,20,20],[0,1452,1268,20,20],[0,1428,1399,20,20],[0,1428,1422,20,20],[0,1451,1406,20,20],[0,1428,1445,20,20],[0,1428,1468,20,20],[0,1451,1452,20,20],[0,1428,1330,20,20],[0,1428,1353,20,20],[0,1451,1337,20,20],[0,1452,1291,20,20],[0,1451,1314,20,20],[0,1428,1307,20,20],[0,138,1609,20,20],[0,969,1613,20,20],[0,1395,1612,20,20],[0,1428,1514,20,20],[0,1428,1537,20,20],[0,1451,1521,20,20],[0,1451,1475,20,20],[0,1451,1498,20,20],[0,1428,1491,20,20],[0,1428,1583,20,20],[0,1349,1589,20,20],[0,1326,1589,20,20],[0,992,1590,20,20],[0,0,1593,20,20],[0,1451,1590,20,20],[0,23,1616,20,20],[0,69,1616,20,20],[0,46,1616,20,20],[0,1453,1107,20,20],[0,1453,1153,20,20],[0,1453,1130,20,20],[0,1451,1360,20,20],[0,1451,1383,20,20],[0,1428,1376,20,20],[0,992,1613,20,20],[0,0,1616,20,20],[0,1441,1613,20,20],[0,1372,1589,20,20],[0,969,1590,20,20],[0,1395,1589,20,20],[0,704,1606,20,20],[0,1418,1606,20,20],[0,727,1606,20,20],[0,449,1609,20,20],[0,495,1609,20,20],[0,472,1609,20,20],[0,380,1609,20,20],[0,426,1609,20,20],[0,403,1609,20,20],[0,635,1606,20,20],[0,681,1606,20,20],[0,658,1606,20,20],[0,704,1629,20,20],[0,681,1629,20,20],[0,635,1629,20,20],[0,612,1629,20,20],[0,865,1628,20,20],[0,842,1628,20,20],[0,819,1618,20,20],[0,796,1618,20,20],[0,1061,1626,20,20],[0,1038,1626,20,20],[0,750,1618,20,20],[0,115,1616,20,20]];
		
let i = 0;
cropImg();
		
const previousButton = document.querySelector("button.previous");
previousButton.addEventListener('click', function() {
	i--;
	checkI();
	cropImg();
});
const nextButton = document.querySelector("button.next");
nextButton.addEventListener('click', function() {
	i++;
	checkI();
	cropImg();
});
const loadButton = document.querySelector("button.load");
loadButton.addEventListener('click', function() {
	i = Math.floor(document.getElementById("index").value);
	checkI();
	cropImg();
});
const downloadButton = document.querySelector("button.download");
downloadButton.addEventListener('click', function() {
	i = Math.floor(document.getElementById("index").value);
	checkI();
	downloadImg();
});
		
function checkI() {
	if (i < 0) {
		i = 0;
	} else if (i > (imageProperties.length - 1)) {
		i = imageProperties.length - 1;
	}
}
function cropImg() {
	cropImage(imageSrc[imageProperties[i][0]], imageProperties[i][1], imageProperties[i][2], imageProperties[i][3], imageProperties[i][4], imageSrcDisplay[imageProperties[i][0]]);
}
function cropImage(imagePath, newX, newY, newWidth, newHeight, originalImagePath) {
  	const canvas = document.getElementById('canvas');
  	let ctx = canvas.getContext('2d');
			
  	ctx.clearRect(0, 0, canvas.width, canvas.height);
  	let originalImage = new Image();
	originalImage.src = imagePath;
	ctx = canvas.getContext('2d');
			
  	originalImage.addEventListener('load', function() {
  		canvas.width = newWidth;
    	canvas.height = newHeight;
    	ctx.drawImage(originalImage, newX, newY, newWidth, newHeight, 0, 0, newWidth, newHeight);
				
    	document.getElementById("index").value = i;
    	document.getElementById("width").innerHTML = newWidth;
    	document.getElementById("height").innerHTML = newHeight;
    	document.getElementById("x").innerHTML = newX;
    	document.getElementById("y").innerHTML = newY;
		document.getElementById("image").innerHTML = originalImagePath;
  	});
}
function downloadImg() {
  	var canvasId = document.getElementById("canvas");
  	var imageDownload = canvasId.toDataURL("image/png").replace("image/png", "image/octet-stream");
  	var link = document.createElement('a');
  	link.download = "image-index(" + i + ").png";
  	link.href = imageDownload;
  	link.click();
}
		
const audioSrc = ['./assets/jerry_lawson/music.mp3', './assets/jerry_lawson/sfx.mp3']
const audioSrcDisplay = ['https://google.com/logos/2022/lawson/r11292/music.mp3', 'https://google.com/logos/2022/lawson/r11292/sfx.mp3'];
const audioProperties = [[0,0,29.09090625],[1,0,1.055760009765625],[1,2.055760009765625,2.761882019042969],[1,3.761882080078125,4.495034057617188],[1,5.4950341796875,6.212517150878906],[1,7.21251708984375,8.540363037109374],[1,9.54036328125,10.994898315429687],[1,11.9948984375,13.419683471679688],[1,14.4196826171875,15.438117614746094],[1,16.4381171875,18.2955322265625],[1,19.295533203125,20.43043115234375],[1,21.430431640625,23.387483642578125],[1,24.387482421875,25.371360412597657],[1,26.371361328125,27.075329345703125],[1,28.075328125,28.567596130371093],[1,29.567595703125,30.248683715820313],[1,31.248685546875,31.808300537109375],[1,32.80830078125,34.23875476074219],[1,35.23875390625,35.70557891845703],[1,36.705578125,38.91859423828125],[1,39.91859375,40.54256176757813],[1,41.5425625,42.08870751953125],[1,43.08870703125,43.42986303710938],[1,44.42986328125,49.13417138671875],[1,50.134171875,50.497776885986326],[1,51.49777734375,51.95564535522461],[1,52.95564453125,53.34616653442383],[1,56.8858515625,58.147212524414066],[1,54.34616796875,55.88585095214844],[1,59.1472109375,60.02553295898438],[1,61.02553125,61.63301422119141],[1,62.633015625,63.35870764160156],[1,64.35870703125,65.69190405273437],[1,66.69190625,67.37421923828126],[0,30.09090625,51.42423828125],[0,52.42423828125,73.7575703125],[0,74.7575703125,118.39394140625],[0,119.3939453125,156.72727734375],[0,157.72728125,195.6933828125],[0,196.693375,232.0617890625],[0,233.061796875,268.4302109375],[0,269.43021875,274.16708984375]];
		
let audioI = 0;
trimAudio();
		
const previousAudioButton = document.querySelector("button.previousAudio");
previousAudioButton.addEventListener('click', function() {
	audioI--;
	checkAudioI();
	trimAudio();
});
const nextAudioButton = document.querySelector("button.nextAudio");
nextAudioButton.addEventListener('click', function() {
	audioI++;
	checkAudioI();
	trimAudio();
});
const loadAudioButton = document.querySelector("button.loadAudio");
loadAudioButton.addEventListener('click', function() {
	audioI = Math.floor(document.getElementById("audioIndex").value);
	checkAudioI();
	trimAudio();
});
const downloadAudioButton = document.querySelector("button.downloadAudio");
downloadAudioButton.addEventListener('click', function() {
	audioI = Math.floor(document.getElementById("audioIndex").value);
	checkAudioI();
	downloadAudio();
});
		
function checkAudioI() {
	if (audioI < 0) {
		audioI = 0;
	} else if (audioI > (audioProperties.length - 1)) {
		audioI = audioProperties.length - 1;
	}
}
function trimAudio() {
	trim(audioSrc[audioProperties[audioI][0]], audioProperties[audioI][1], audioProperties[audioI][2], audioSrcDisplay[audioProperties[audioI][0]]);
}
		
function trim(audioPath, audioStart, audioEnd, originalAudioPath) {
	var trimmedAudio = `${audioPath}#t=${audioStart},${audioEnd}`
       		
	document.getElementById("audioIndex").value = audioI;
	document.getElementById("trim_audio").src = trimmedAudio;
	document.getElementById("start").innerHTML = audioStart;
	document.getElementById("end").innerHTML = audioEnd;
	document.getElementById("duration").innerHTML = audioEnd - audioStart; 
	document.getElementById("audio").innerHTML = originalAudioPath;
 }
		
function downloadAudio() {
	var audioId = document.getElementById("trim_audio");
	
	/* const outPath = util.outPath(audioId.src, { suffix: "-trimmed" });
  	const args = ["-ss", audioId.audioProperties[audioI][1]];
  	if (audioId.rangeMethod === "specifyStopTime") {
    	args.push("-to", audioId.audioProperties[audioI][2]);
  	} else {
    	args.push("-t", (audioId.audioProperties[audioI][2] - audioId.audioProperties[audioI][1]));
  	}
  	args.push("-i", audioId.src, outPath);

  	await subprocess.run("ffmpeg", args); */
	
	var link = document.createElement('a');
  	link.download = "audio-index(" + audioI + ").mp3";
  	link.href = audioId.src;
  	link.click();
}
