/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : shop

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 15/12/2020 13:50:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for hot
-- ----------------------------
DROP TABLE IF EXISTS `hot`;
CREATE TABLE `hot`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '图片索引',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '商品名',
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商品说明',
  `price` decimal(10, 2) UNSIGNED NOT NULL COMMENT '价格，单价',
  `num` int UNSIGNED NOT NULL COMMENT '库存',
  `unit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '入库单位',
  `uid` int NOT NULL COMMENT '品类索引',
  `soldnum` int NOT NULL COMMENT '卖出量',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hot
-- ----------------------------
INSERT INTO `hot` VALUES (1, '奥利奥', NULL, 5.50, 100, '包', 1, 50);
INSERT INTO `hot` VALUES (2, '威化饼干棒（日本进口）', NULL, 19.90, 50, '包', 1, 20);
INSERT INTO `hot` VALUES (3, '梳打饼干（奶盐味）', NULL, 16.90, 30, '包', 1, 30);
INSERT INTO `hot` VALUES (4, '巧克力派打糕', NULL, 16.80, 50, '包', 1, 40);
INSERT INTO `hot` VALUES (5, '威化饼干', NULL, 44.90, 20, '包', 1, 10);
INSERT INTO `hot` VALUES (6, '小鸡干脆面（12包装）', NULL, 39.80, 60, '包', 1, 50);
INSERT INTO `hot` VALUES (7, '夹心小蛋卷', NULL, 27.90, 45, '包', 1, 40);
INSERT INTO `hot` VALUES (8, '日本薯条三兄弟咸味薯条', NULL, 29.90, 75, '包', 1, 65);
INSERT INTO `hot` VALUES (9, '钙芝奶酪威化饼干', NULL, 24.80, 3, '盒', 1, 2);
INSERT INTO `hot` VALUES (10, '老板仔海苔卷原味', NULL, 16.80, 13, '盒', 1, 1);

-- ----------------------------
-- Table structure for shop1
-- ----------------------------
DROP TABLE IF EXISTS `shop1`;
CREATE TABLE `shop1`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '图片索引',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '商品名',
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商品说明',
  `price` decimal(10, 2) UNSIGNED NOT NULL COMMENT '价格，单价',
  `num` int UNSIGNED NOT NULL COMMENT '库存',
  `unit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '入库单位',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop1
-- ----------------------------
INSERT INTO `shop1` VALUES (1, '奥利奥', NULL, 5.50, 100, '包');
INSERT INTO `shop1` VALUES (2, '威化饼干棒（日本进口）', NULL, 19.90, 50, '包');
INSERT INTO `shop1` VALUES (3, '梳打饼干（奶盐味）', NULL, 16.90, 30, '包');
INSERT INTO `shop1` VALUES (4, '巧克力派打糕', NULL, 16.80, 50, '包');
INSERT INTO `shop1` VALUES (5, '威化饼干', NULL, 44.90, 20, '包');
INSERT INTO `shop1` VALUES (6, '小鸡干脆面（12包装）', NULL, 39.80, 60, '包');
INSERT INTO `shop1` VALUES (7, '夹心小蛋卷', NULL, 27.90, 45, '包');
INSERT INTO `shop1` VALUES (8, '日本薯条三兄弟咸味薯条', NULL, 29.90, 75, '包');
INSERT INTO `shop1` VALUES (9, '钙芝奶酪威化饼干', NULL, 24.80, 3, '盒');
INSERT INTO `shop1` VALUES (10, '老板仔海苔卷原味', NULL, 16.80, 13, '盒');

-- ----------------------------
-- Table structure for shop2
-- ----------------------------
DROP TABLE IF EXISTS `shop2`;
CREATE TABLE `shop2`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '图片索引',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '商品名',
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商品说明',
  `price` decimal(10, 2) UNSIGNED NOT NULL COMMENT '价格，单价',
  `num` int UNSIGNED NOT NULL COMMENT '库存',
  `unit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '入库单位',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop2
-- ----------------------------
INSERT INTO `shop2` VALUES (1, '鲁花花生油4L', NULL, 125.90, 36, '桶');
INSERT INTO `shop2` VALUES (2, '粤盐250g', NULL, 1.50, 44, '袋');
INSERT INTO `shop2` VALUES (3, '老大同芝麻香油', NULL, 26.90, 54, '瓶');
INSERT INTO `shop2` VALUES (4, '龙门米醋', NULL, 12.90, 75, '桶');
INSERT INTO `shop2` VALUES (5, '金锣猪油', NULL, 29.90, 64, '桶');

-- ----------------------------
-- Table structure for shop3
-- ----------------------------
DROP TABLE IF EXISTS `shop3`;
CREATE TABLE `shop3`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '图片索引',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '商品名',
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商品说明',
  `price` decimal(10, 2) UNSIGNED NOT NULL COMMENT '价格，单价',
  `num` int UNSIGNED NOT NULL COMMENT '库存',
  `unit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '入库单位',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop3
-- ----------------------------
INSERT INTO `shop3` VALUES (1, '飘柔洗发水750ml', NULL, 37.80, 14, '瓶');
INSERT INTO `shop3` VALUES (2, '花王洗衣粉', NULL, 24.00, 51, '盒');
INSERT INTO `shop3` VALUES (3, 'kri洗发水', NULL, 88.00, 7, '瓶');
INSERT INTO `shop3` VALUES (4, 'ave婴儿洗发水', NULL, 83.90, 15, '瓶');
INSERT INTO `shop3` VALUES (5, '起初儿童洗发水', NULL, 85.00, 21, '瓶');

-- ----------------------------
-- Table structure for shop4
-- ----------------------------
DROP TABLE IF EXISTS `shop4`;
CREATE TABLE `shop4`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '图片索引',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '商品名',
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商品说明',
  `price` decimal(10, 2) UNSIGNED NOT NULL COMMENT '价格，单价',
  `num` int UNSIGNED NOT NULL COMMENT '库存',
  `unit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '入库单位',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop4
-- ----------------------------
INSERT INTO `shop4` VALUES (1, '大宝男生保湿水150g', NULL, 42.90, 7, '瓶');
INSERT INTO `shop4` VALUES (2, '仁和祛斑霜', NULL, 74.90, 5, '瓶');
INSERT INTO `shop4` VALUES (3, '兰芝保湿唇膜', NULL, 115.00, 9, '瓶');
INSERT INTO `shop4` VALUES (4, '凡士林润唇膏', NULL, 19.80, 50, '瓶');
INSERT INTO `shop4` VALUES (5, '仁和洗面奶', NULL, 65.00, 16, '瓶');

-- ----------------------------
-- Table structure for shop5
-- ----------------------------
DROP TABLE IF EXISTS `shop5`;
CREATE TABLE `shop5`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '图片索引',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '商品名',
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商品说明',
  `price` decimal(10, 2) UNSIGNED NOT NULL COMMENT '价格，单价',
  `num` int UNSIGNED NOT NULL COMMENT '库存',
  `unit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '入库单位',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop5
-- ----------------------------
INSERT INTO `shop5` VALUES (1, '江中健胃消食片', NULL, 9.90, 15, '盒');
INSERT INTO `shop5` VALUES (2, '医药箱', NULL, 219.00, 4, '箱');
INSERT INTO `shop5` VALUES (3, '蒲公英颗粒', NULL, 97.50, 46, '盒');
INSERT INTO `shop5` VALUES (4, '板蓝根20袋装', NULL, 79.00, 78, '袋');
INSERT INTO `shop5` VALUES (5, '风精油', NULL, 9.50, 21, '瓶');

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type`  (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `cnum` int NOT NULL COMMENT '存入商品数',
  `knum` int NOT NULL COMMENT '库存商品数',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES (1, '食品饮料', 10, 10);
INSERT INTO `type` VALUES (2, '粮油副食', 5, 5);
INSERT INTO `type` VALUES (3, '个人护理', 5, 5);
INSERT INTO `type` VALUES (4, '护肤美妆', 5, 5);
INSERT INTO `type` VALUES (5, '常备医药', 5, 5);

SET FOREIGN_KEY_CHECKS = 1;
