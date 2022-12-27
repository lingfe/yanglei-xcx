-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2022-09-02 00:53:01
-- 服务器版本： 5.7.39-log
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;



-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_accesstoken`
--

CREATE TABLE IF NOT EXISTS `qqxcx_accesstoken` (
  `id` int(10) NOT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='存储公众号accesstoken';

--
-- 转存表中的数据 `qqxcx_accesstoken`
--

INSERT INTO `qqxcx_accesstoken` (`id`, `token`) VALUES
(1, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_admin`
--

CREATE TABLE IF NOT EXISTS `qqxcx_admin` (
  `id` int(10) unsigned NOT NULL COMMENT 'ID',
  `username` varchar(20) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(32) NOT NULL DEFAULT '' COMMENT '密码',
  `salt` varchar(30) NOT NULL DEFAULT '' COMMENT '密码盐',
  `is_super` tinyint(1) DEFAULT '0' COMMENT '是否为超级管理员  1-是 0-否',
  `roles_id` int(11) DEFAULT '0' COMMENT '角色id',
  `belong_to` tinyint(4) DEFAULT '1' COMMENT '所属团队 1-骆老团队 3-甫畅团队',
  `aim_user_id` int(10) DEFAULT '0' COMMENT '是否对应某个推广者id'
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='管理员表';

--
-- 转存表中的数据 `qqxcx_admin`
--

INSERT INTO `qqxcx_admin` (`id`, `username`, `password`, `salt`, `is_super`, `roles_id`, `belong_to`, `aim_user_id`) VALUES
(1, 'admin', '4be792064d5533542e63b2f1385b90a5', 'ms0e', 1, 0, 1, 0);

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_ad_log`
--

CREATE TABLE IF NOT EXISTS `qqxcx_ad_log` (
  `log_id` bigint(20) NOT NULL,
  `platform` varchar(5) NOT NULL COMMENT '用户来源 qq-QQ wx-微信 dy-抖音 ks-快手',
  `openid` varchar(100) NOT NULL COMMENT '小程序用户id',
  `created_at` int(10) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `updated_at` int(10) NOT NULL DEFAULT '0' COMMENT '更新时间',
  `type` tinyint(1) DEFAULT '1' COMMENT '类型 1-看广告 2-免费不看广告'
) ENGINE=InnoDB AUTO_INCREMENT=233 DEFAULT CHARSET=utf8mb4 COMMENT='小程序用户看广告次数记录';

--
-- 转存表中的数据 `qqxcx_ad_log`
--

INSERT INTO `qqxcx_ad_log` (`log_id`, `platform`, `openid`, `created_at`, `updated_at`, `type`) VALUES
(227, 'dy', 'WCNREccB5YkuS8XW', 1654659908, 1654659908, 2),
(228, 'dy', 'lAT7TgspSBWnDADz', 1654659945, 1654659945, 2),
(229, 'dy', 'WCNREccB5YkuS8XW', 1654659969, 1654659969, 2),
(230, 'dy', 'lAT7TgspSBWnDADz', 1654660007, 1654660007, 2),
(231, 'dy', 'WCNREccB5YkuS8XW', 1654660104, 1654660104, 2),
(232, 'dy', 'VOyAH8vD40WHqE0C', 1654671366, 1654671366, 2);

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_analysis`
--

CREATE TABLE IF NOT EXISTS `qqxcx_analysis` (
  `id` int(10) NOT NULL,
  `platform` varchar(5) NOT NULL COMMENT '用户来源 qq-QQ wx-微信 dy-抖音 ks-快手',
  `openid` varchar(100) DEFAULT NULL COMMENT '小程序用户openid',
  `enter_num` int(10) DEFAULT '0' COMMENT '进入小程序次数',
  `wallpaper_num` int(10) DEFAULT '0' COMMENT '访问素材详情次数',
  `ad_num` int(10) DEFAULT '0' COMMENT '点击看广告下载次数',
  `normal_num` int(10) DEFAULT '0' COMMENT '普通下载次数',
  `ad_end` int(10) DEFAULT '0' COMMENT '正常看完广告次数（达人素材）',
  `ad_stop` int(10) DEFAULT '0' COMMENT '正常退出看广告次数',
  `ad_error` int(10) DEFAULT '0' COMMENT '广告异常加载次数',
  `created_at` int(10) DEFAULT '0' COMMENT '创建时间',
  `total_download` int(10) DEFAULT '0' COMMENT '真实下载次数',
  `wallpaper_id` int(10) DEFAULT '0' COMMENT '素材id',
  `ad_end_platform` int(10) DEFAULT '0' COMMENT '正常看完广告次数（平台素材）'
) ENGINE=InnoDB AUTO_INCREMENT=2626 DEFAULT CHARSET=utf8 COMMENT='小程序数据分析统计记录';

--
-- 转存表中的数据 `qqxcx_analysis`
--

INSERT INTO `qqxcx_analysis` (`id`, `platform`, `openid`, `enter_num`, `wallpaper_num`, `ad_num`, `normal_num`, `ad_end`, `ad_stop`, `ad_error`, `created_at`, `total_download`, `wallpaper_id`, `ad_end_platform`) VALUES
(2591, 'dy', '7217739f-e8bb-440d-b7dc-d26f8ae8c772', 1, 0, 0, 0, 0, 0, 0, 1644508800, 0, 0, 0),
(2592, 'dy', '77df7cec-94a7-4460-bc99-db939d2c213c', 1, 0, 0, 0, 0, 0, 0, 1654444800, 0, 0, 0),
(2593, 'dy', '77df7cec-94a7-4460-bc99-db939d2c213c', 1, 0, 0, 0, 0, 0, 0, 1654444800, 0, 0, 0),
(2594, 'dy', '77df7cec-94a7-4460-bc99-db939d2c213c', 0, 1, 0, 0, 0, 0, 0, 1654444800, 0, 226, 0),
(2595, 'dy', 'dntTOelV96iD14lx', 1, 0, 0, 0, 0, 0, 0, 1654531200, 0, 0, 0),
(2596, 'dy', 'koCaQQ2i2RkauG5N', 1, 0, 0, 0, 0, 0, 0, 1654531200, 0, 0, 0),
(2597, 'dy', 'WCNREccB5YkuS8XW', 1, 0, 0, 0, 0, 0, 0, 1654617600, 0, 0, 0),
(2598, 'dy', 'WCNREccB5YkuS8XW', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 226, 0),
(2599, 'dy', 'WCNREccB5YkuS8XW', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 229, 0),
(2600, 'dy', 'WCNREccB5YkuS8XW', 0, 0, 0, 0, 0, 0, 0, 1654617600, 1, 229, 0),
(2601, 'dy', 'lAT7TgspSBWnDADz', 1, 0, 0, 0, 0, 0, 0, 1654617600, 0, 0, 0),
(2602, 'dy', 'lAT7TgspSBWnDADz', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 226, 0),
(2603, 'dy', 'lAT7TgspSBWnDADz', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 228, 0),
(2604, 'dy', 'lAT7TgspSBWnDADz', 0, 0, 0, 0, 0, 0, 0, 1654617600, 1, 228, 0),
(2605, 'dy', 'WCNREccB5YkuS8XW', 1, 0, 0, 0, 0, 0, 0, 1654617600, 0, 0, 0),
(2606, 'dy', 'WCNREccB5YkuS8XW', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 229, 0),
(2607, 'dy', 'WCNREccB5YkuS8XW', 0, 0, 0, 0, 0, 0, 0, 1654617600, 1, 229, 0),
(2608, 'dy', 'lAT7TgspSBWnDADz', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 226, 0),
(2609, 'dy', 'lAT7TgspSBWnDADz', 0, 0, 0, 0, 0, 0, 0, 1654617600, 1, 226, 0),
(2610, 'dy', 'WCNREccB5YkuS8XW', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 244, 0),
(2611, 'dy', 'WCNREccB5YkuS8XW', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 244, 0),
(2612, 'dy', 'WCNREccB5YkuS8XW', 0, 0, 0, 0, 0, 0, 0, 1654617600, 1, 244, 0),
(2613, 'dy', 'VOyAH8vD40WHqE0C', 1, 0, 0, 0, 0, 0, 0, 1654617600, 0, 0, 0),
(2614, 'dy', 'VOyAH8vD40WHqE0C', 1, 0, 0, 0, 0, 0, 0, 1654617600, 0, 0, 0),
(2615, 'dy', 'VOyAH8vD40WHqE0C', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 238, 0),
(2616, 'dy', 'VOyAH8vD40WHqE0C', 0, 0, 0, 0, 0, 0, 0, 1654617600, 1, 238, 0),
(2617, 'dy', 'VOyAH8vD40WHqE0C', 1, 0, 0, 0, 0, 0, 0, 1654617600, 0, 0, 0),
(2618, 'dy', 'VOyAH8vD40WHqE0C', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 226, 0),
(2619, 'dy', '19TBLkj9NbAlyDhZ', 1, 0, 0, 0, 0, 0, 0, 1654617600, 0, 0, 0),
(2620, 'dy', '19TBLkj9NbAlyDhZ', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 226, 0),
(2621, 'dy', '19TBLkj9NbAlyDhZ', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 225, 0),
(2622, 'dy', '19TBLkj9NbAlyDhZ', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 224, 0),
(2623, 'dy', '19TBLkj9NbAlyDhZ', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 226, 0),
(2624, 'dy', 'VOyAH8vD40WHqE0C', 1, 0, 0, 0, 0, 0, 0, 1654617600, 0, 0, 0),
(2625, 'dy', 'VOyAH8vD40WHqE0C', 0, 1, 0, 0, 0, 0, 0, 1654617600, 0, 249, 0);

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_cate`
--

CREATE TABLE IF NOT EXISTS `qqxcx_cate` (
  `id` int(11) NOT NULL,
  `name` varchar(10) NOT NULL COMMENT '分类名称',
  `img` varchar(255) DEFAULT NULL COMMENT '分类图标',
  `show_index` tinyint(1) DEFAULT '1' COMMENT '是否显示 0-否 1-是',
  `is_deleted` tinyint(1) DEFAULT '0' COMMENT '是否删除 0-否 1-是',
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL,
  `banner_img` varchar(255) DEFAULT NULL COMMENT '首页导航图片',
  `banner_index` tinyint(1) DEFAULT '0' COMMENT '导航是否显示',
  `weight` int(6) DEFAULT '0' COMMENT '权重',
  `redirect_type` tinyint(1) DEFAULT '1' COMMENT '跳转类型 1-小程序页面 2-业务外链 3-富文本内容',
  `mini_url` varchar(255) DEFAULT NULL COMMENT '小程序页面',
  `webview_url` varchar(255) DEFAULT NULL COMMENT '业务外链',
  `editor_content` text COMMENT '富文本内容',
  `platform` tinyint(1) DEFAULT '1' COMMENT '平台 1-全网 2-抖音 3-快手 4-微信 5-qq'
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='banner导航管理';

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_config`
--

CREATE TABLE IF NOT EXISTS `qqxcx_config` (
  `id` int(10) unsigned NOT NULL,
  `config_name` varchar(255) DEFAULT '' COMMENT '配置项名称',
  `config_value` varchar(255) DEFAULT NULL COMMENT '配置项值',
  `type` tinyint(4) DEFAULT '1' COMMENT '类型  1-输入框 2-图片上传 3-文本框 4-多选框  5-单选框',
  `config_key` varchar(255) DEFAULT NULL COMMENT '配置项key',
  `module` varchar(50) DEFAULT NULL COMMENT '模块',
  `module_name` varchar(50) DEFAULT NULL COMMENT '模块名称',
  `config_note` varchar(255) DEFAULT NULL COMMENT '备注'
) ENGINE=InnoDB AUTO_INCREMENT=15005 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='系统基础配置信息表';

--
-- 转存表中的数据 `qqxcx_config`
--

INSERT INTO `qqxcx_config` (`id`, `config_name`, `config_value`, `type`, `config_key`, `module`, `module_name`, `config_note`) VALUES
(1, '小程序名称', '团啊壁纸头像表情包小程序', 1, 'mini_name', 'win_module', '基础设置', NULL),
(2, '系统域名', 'https://www.tuana.cn', 1, 'mini_domain', 'win_module', '基础设置', '域名最后不要带上/ ，切记'),
(20, '是否开放达人入口', '1', 5, 'open_expert', 'win_module', '基础设置', NULL),
(21, '是否开放微信授权', '0', 5, 'open_wechat', 'mp_module', '公众号设置', '若有需要走微信企业付款到零钱的或者使用模板消息，需要开启'),
(30, '每日素材总上传限制次数', '20', 1, 'day_upload_num', 'win_module', '基础设置', NULL),
(51, '首页展现手机壁纸个数', '5', 1, 'index_1_num', 'win_module', '基础设置', '后台推荐为优先，再以达人下载量倒序补充'),
(52, '首页展现动态壁纸个数', '0', 1, 'index_2_num', 'win_module', '基础设置', '后台推荐为优先，再以达人下载量倒序补充'),
(53, '首页展现背景图个数', '2', 1, 'index_3_num', 'win_module', '基础设置', '后台推荐为优先，再以达人下载量倒序补充'),
(54, '首页展现头像个数', '9', 1, 'index_4_num', 'win_module', '基础设置', '后台推荐为优先，再以达人下载量倒序补充'),
(55, '首页展现表情包个数', '9', 1, 'index_5_num', 'win_module', '基础设置', '后台推荐为优先，再以达人下载量倒序补充'),
(56, '是否开启GIF图展示', '0', 5, 'open_gif', 'win_module', '基础设置', '针对小程序端展示动图或静态图使用'),
(57, '注册是否强制填写邀请码', '0', 5, 'register_code', 'win_module', '基础设置', NULL),
(77, '分享id', '', 1, 'share_id', 'share_module', '分享设置', '用于抖音分享'),
(78, '分享标题', '【免费】高清壁纸下载', 1, 'share_title', 'share_module', '分享设置', NULL),
(79, '分享描述', '【免费】高清壁纸下载', 1, 'share_desc', 'share_module', '分享设置', NULL),
(8051, '存储路径', '1', 5, 'save_way', 'source_module', '资源管理', NULL),
(8052, '阿里云Bucket', 'qutubao', 1, 'aliyun_buckey', 'source_module', '资源管理', '选择了阿里云OSS存储必须填，出错自己解决'),
(8053, '阿里云KEYID', 'LTAI5tF2xP8HJysheDyaM', 1, 'aliyun_keyid', 'source_module', '资源管理', '选择了阿里云OSS存储必须填，出错自己解决'),
(8054, '阿里云KeySecret', 'rfQIAgeJdJ7TL8Vamyzt9yt', 1, 'aliyun_keysecret', 'source_module', '资源管理', '选择了阿里云OSS存储必须填，出错自己解决'),
(8055, '阿里云Endpoint', 'oss-cn-nanjing.aliyuncs.com', 1, 'aliyun_endpoint', 'source_module', '资源管理', '选择了阿里云OSS存储必须填，出错自己解决'),
(8056, '阿里云资源外网域名', 'http://qutubao.oss-cn-nanjing.aliyuncs.com', 1, 'aliyun_old_domain', 'source_module', '资源管理', '选择了阿里云OSS存储必须填，出错自己解决,最后不要带上/'),
(8057, '阿里云自己解析的域名', 'https://qutubao.oss-cn-nanjing.aliyuncs.com', 1, 'aliyun_new_domain', 'source_module', '资源管理', '如果自己有解析域名，就配置域名，最后不要带上/'),
(8100, '七牛云Bucket', '', 1, 'qiniu_bucket', 'source_module', '资源管理', '选择了七牛云OSS存储必须填，出错自己解决'),
(8101, '七牛云KEYID', '', 1, 'qiniu_keyid', 'source_module', '资源管理', '选择了七牛云OSS存储必须填，出错自己解决'),
(8102, '七牛云KeySecret', '', 1, 'qiuniu_keysecret', 'source_module', '资源管理', '选择了七牛云OSS存储必须填，出错自己解决'),
(8103, '七牛云资源域名', '', 1, 'qiniu_new_domain', 'source_module', '资源管理', '选择了七牛云OSS存储必须填，出错自己解决,最后不要带上/'),
(9000, '小程序appid', '', 1, 'ks_appid', 'ks_module', '快手小程序设置', NULL),
(9001, '小程序appsecret', '', 1, 'ks_appsecret', 'ks_module', '快手小程序设置', NULL),
(9002, '是否看广告', '0', 5, 'ks_open_ad', 'ks_module', '快手小程序设置', NULL),
(9003, '激励广告', '', 1, 'ks_jili', 'ks_module', '快手小程序设置', NULL),
(9004, '小程序appid', '', 1, 'wx_appid', 'wx_module', '微信小程序设置', NULL),
(9005, '小程序appsecret', '', 1, 'wx_appsecret', 'wx_module', '微信小程序设置', NULL),
(9006, '是否看广告', '0', 5, 'wx_open_ad', 'wx_module', '微信小程序设置', NULL),
(9007, '激励广告', '', 1, 'wx_jili', 'wx_module', '微信小程序设置', NULL),
(9010, '插屏广告', '', 1, 'wx_chaping', 'wx_module', '微信小程序设置', NULL),
(9011, 'banner广告', '', 1, 'wx_banner', 'wx_module', '微信小程序设置', NULL),
(9012, '小程序appid', 'ttb89fce2227a5e340', 1, 'dy_appid', 'dy_module', '抖音小程序设置', NULL),
(9013, '小程序appsecret', 'c2a40c659b34ef69ef38a30538295426c7c563ab', 1, 'dy_appsecret', 'dy_module', '抖音小程序设置', NULL),
(9014, '是否看广告', '0', 5, 'dy_open_ad', 'dy_module', '抖音小程序设置', NULL),
(9015, '激励广告', '', 1, 'dy_jili', 'dy_module', '抖音小程序设置', NULL),
(9016, '小程序appid', '', 1, 'qq_appid', 'qq_module', 'QQ小程序设置', NULL),
(9017, '小程序appsecret', '', 1, 'qq_appsecret', 'qq_module', 'QQ小程序设置', NULL),
(9018, '是否看广告', '0', 5, 'qq_open_ad', 'qq_module', 'QQ小程序设置', NULL),
(9019, '激励广告', '', 1, 'qq_jili', 'qq_module', 'QQ小程序设置', NULL),
(9020, '插屏广告', '', 1, 'qq_chaping', 'qq_module', 'QQ小程序设置', NULL),
(9021, 'banner广告', '', 1, 'qq_banner', 'qq_module', 'QQ小程序设置', NULL),
(9022, '插屏广告', '', 1, 'dy_chaping', 'dy_module', '抖音小程序设置', NULL),
(10001, '推广平台名称', '壁纸达人助手', 1, 'platform_name', 'system_module', '系统设置', NULL),
(10002, '首页海报', 'https://cepingkyle.oss-cn-shenzhen.aliyuncs.com/wallpaper/img/2021/11/03/618206e2b5086.png', 2, 'index_poster', 'system_module', '系统设置', NULL),
(10003, '玩法介绍介绍', 'https://v.qq.com/x/page/c3302g0qmsd.html', 1, 'index_play', 'system_module', '系统设置', '设置自己介绍的外链'),
(10004, '客服微信号', '/static/uploads/default/2021/10/30/617c683439fd7.jpg', 2, 'wechat_img', 'system_module', '系统设置', NULL),
(10005, '公众号二维码', '/static/uploads/default/2021/10/30/617c6895ed58f.jpg', 2, 'wechat_code', 'system_module', '系统设置', '上传带有平台入口的公众号二维码'),
(10006, '提现最低金额', '0', 1, 'apply_money', 'money_module', '分销设置', '提现最低金额，不填或填0表示不限制，金额小数位不能超过2位，出错自己负责'),
(10007, '总佣金排行榜显示条数', '10', 1, 'ranking_num', 'system_module', '系统设置', '代理排行名次显示人数，建议在10-100之间，填写整数'),
(10008, '是否显示代理排行榜总数据', '0', 5, 'ranking_show', 'system_module', '系统设置', NULL),
(10009, '申请提现时间说明', '提现时间T+30', 1, 'money_log_date', 'money_module', '分销设置', '该文案仅作为提现说明，无实际作用'),
(10010, '是否开放提现申请', '1', 5, 'apply_status', 'money_module', '分销设置', '默认为开放申请'),
(10012, '提现方式', '1', 5, 'pay_way', 'money_module', '分销设置', '若没有配置微信支付信息，请不要选择微信付款到零钱，微信支付最低提现要超过1元，不超过10w'),
(10013, '新手教程视频链接', 'http://video.caicailu.cn/xsjc.mp4', 1, 'user_teach', 'system_module', '系统设置', '请填写自己录制好的第三方视频链接'),
(10014, '每日可看广告次数', '10', 1, 'show_ad_num', 'money_module', '分销设置', NULL),
(10015, '每日免费下载原素材次数', '20', 1, 'free_ad_num', 'money_module', '分销设置', NULL),
(10016, '每日免费不扣量的推广数', '100', 1, 'kou_free', 'money_module', '分销设置', '针对达人设置，每个达人每天可以直接入库不扣量的次数'),
(10017, '基础扣量数', '100', 1, 'kou_base', 'money_module', '分销设置', '这个数为扣量基数，如设置100，表示每100条数据要处理扣量'),
(10018, '扣量设置', '1', 1, 'del_distribution', 'money_module', '分销设置', '每100条数据要扣多少条数据，这个100为基础扣量数'),
(11000, '抖音单次自推预估佣金', '0.2', 1, 'money_fir_dy', 'predict_module', '佣金设置', '请填写大于0的数字，出错自己负责'),
(11001, '抖音单次上级预估佣金', '0.02', 1, 'money_sec_dy', 'predict_module', '佣金设置', '请填写大于0的数字，出错自己负责'),
(11002, '默认上级昵称', '客服1号', 1, 'default_fir_name', 'system_module', '系统设置', '用于通过原始链接注册的达人显示我的上级昵称'),
(11003, '默认上级微信号', '666', 1, 'default_fir_wechat', 'system_module', '系统设置', '用于通过原始链接注册的达人显示我的上级微信号'),
(11004, '快手单次自推预估佣金', '0.1', 1, 'money_fir_ks', 'predict_module', '佣金设置', '请填写大于0的数字，出错自己负责'),
(11005, '快手单次上级预估佣金', '0.03', 1, 'money_sec_ks', 'predict_module', '佣金设置', '请填写大于0的数字，出错自己负责'),
(11006, '微信单次自推预估佣金', '0.2', 1, 'money_fir_wx', 'predict_module', '佣金设置', '请填写大于0的数字，出错自己负责'),
(11007, '微信单次上级预估佣金', '0.03', 1, 'money_sec_wx', 'predict_module', '佣金设置', '请填写大于0的数字，出错自己负责'),
(11008, 'QQ单次自推预估佣金', '0.2', 1, 'money_fir_qq', 'predict_module', '佣金设置', '请填写大于0的数字，出错自己负责'),
(11009, 'QQ单次上级预估佣金', '0.04', 1, 'money_sec_qq', 'predict_module', '佣金设置', '请填写大于0的数字，出错自己负责'),
(12000, '每次提现最大金额', '5000', 1, 'max_money', 'money_module', '分销设置', NULL),
(15000, '公众号appid', '', 1, 'g_appid', 'mp_module', '公众号设置', NULL),
(15001, '公众号appsecret', '', 1, 'g_appsecret', 'mp_module', '公众号设置', NULL),
(15002, '每日结算模板消息ID', '', 1, 'g_push_order', 'mp_module', '公众号设置', NULL),
(15003, '佣金提现成功模板消息ID', '', 1, 'g_withdraw', 'mp_module', '公众号设置', NULL),
(15004, '是否开启模板推送', '0', 5, 'g_template_push', 'mp_module', '公众号设置', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_day_price`
--

CREATE TABLE IF NOT EXISTS `qqxcx_day_price` (
  `id` int(10) NOT NULL,
  `day` int(10) NOT NULL DEFAULT '0' COMMENT '日期',
  `dy` decimal(10,3) DEFAULT '0.000' COMMENT '抖音单价',
  `ks` decimal(10,3) DEFAULT '0.000' COMMENT '快手单价',
  `wx` decimal(10,3) DEFAULT '0.000' COMMENT '微信单价',
  `qq` decimal(10,3) DEFAULT '0.000' COMMENT 'qq单价',
  `created_at` int(10) DEFAULT NULL COMMENT '创建时间',
  `updated_at` int(10) DEFAULT NULL COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='每日实际单价纪录';

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_expert`
--

CREATE TABLE IF NOT EXISTS `qqxcx_expert` (
  `user_id` int(11) unsigned NOT NULL,
  `openid` varchar(100) DEFAULT NULL COMMENT '用户openid',
  `avatar_url` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `nickname` varchar(255) DEFAULT NULL COMMENT '用户昵称',
  `withdraw_money` decimal(12,3) DEFAULT '0.000' COMMENT '可提现佣金',
  `total_money` decimal(12,3) DEFAULT '0.000' COMMENT '总佣金',
  `history_money` decimal(12,3) DEFAULT '0.000' COMMENT '已提现佣金',
  `freeze_money` decimal(12,3) DEFAULT '0.000' COMMENT '待结算佣金',
  `fir_distribution` int(11) DEFAULT '0' COMMENT '上级id',
  `created_at` int(10) DEFAULT '0' COMMENT '创建时间',
  `updated_at` int(10) DEFAULT '0' COMMENT '更新时间',
  `wechat_num` varchar(50) DEFAULT NULL COMMENT '微信号',
  `user_phone` char(11) DEFAULT NULL COMMENT '手机号码',
  `alipay_account` varchar(50) DEFAULT NULL COMMENT '支付宝收款账号',
  `alipay_true_name` varchar(50) DEFAULT NULL COMMENT '支付宝收款真实姓名',
  `sex` varchar(50) DEFAULT NULL COMMENT '用户性别',
  `country` varchar(50) DEFAULT NULL COMMENT '国家',
  `province` varchar(50) DEFAULT NULL COMMENT '省份',
  `city` varchar(50) DEFAULT NULL COMMENT '城市',
  `yesterday_money` decimal(12,3) DEFAULT '0.000' COMMENT '昨日结算佣金',
  `is_freeze` tinyint(1) DEFAULT '0' COMMENT '是否封号 0-否 1-是',
  `wechat_paycode` varchar(255) DEFAULT NULL COMMENT '微信收款码',
  `ali_paycode` varchar(255) DEFAULT NULL COMMENT '支付宝收款码',
  `user_nickname` varchar(100) DEFAULT NULL COMMENT '达人昵称',
  `user_headimg` varchar(255) DEFAULT NULL COMMENT '达人头像',
  `user_zan` int(10) DEFAULT '0' COMMENT '素材总点赞数，不区分平台',
  `user_collection` int(10) DEFAULT '0' COMMENT '素材总收藏数，不区分平台',
  `user_code` varchar(20) DEFAULT NULL COMMENT '达人搜索口令',
  `day_upload_num` int(5) DEFAULT '0' COMMENT '每日用户上传素材的总次数',
  `is_recommend` tinyint(1) DEFAULT '0' COMMENT '是否推荐 1-是 0-否',
  `is_reviewed` tinyint(1) DEFAULT '0' COMMENT '是否审核通过 0-待审核 1-通过 2-驳回',
  `password` varchar(100) DEFAULT NULL COMMENT '密码',
  `pwd_salt` char(4) DEFAULT NULL COMMENT '密码盐',
  `weight` int(10) DEFAULT '0' COMMENT '权重 越大越靠前',
  `base_setting` varchar(255) DEFAULT NULL,
  `self_cover` varchar(255) DEFAULT NULL COMMENT '自定义封面选择'
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='推广达人用户信息';

--
-- 转存表中的数据 `qqxcx_expert`
--

INSERT INTO `qqxcx_expert` (`user_id`, `openid`, `avatar_url`, `nickname`, `withdraw_money`, `total_money`, `history_money`, `freeze_money`, `fir_distribution`, `created_at`, `updated_at`, `wechat_num`, `user_phone`, `alipay_account`, `alipay_true_name`, `sex`, `country`, `province`, `city`, `yesterday_money`, `is_freeze`, `wechat_paycode`, `ali_paycode`, `user_nickname`, `user_headimg`, `user_zan`, `user_collection`, `user_code`, `day_upload_num`, `is_recommend`, `is_reviewed`, `password`, `pwd_salt`, `weight`, `base_setting`, `self_cover`) VALUES
(67, NULL, '/static/images/2.png', '15600000000', '0.000', '0.000', '0.000', '0.000', 0, 1644550133, 1654617661, '666', '15600000000', NULL, NULL, NULL, NULL, NULL, NULL, '0.000', 0, NULL, NULL, '520jiu', '/static/images/2.png', 0, 0, 'B606_DAAB', 0, 0, 1, 'e6f7a176e71edaae87423144bab03194', 'pKx0', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_instruction`
--

CREATE TABLE IF NOT EXISTS `qqxcx_instruction` (
  `id` int(10) NOT NULL,
  `content` text COMMENT '内容',
  `desc` varchar(255) DEFAULT NULL COMMENT '描述',
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='整站富文本说明表';

--
-- 转存表中的数据 `qqxcx_instruction`
--

INSERT INTO `qqxcx_instruction` (`id`, `content`, `desc`, `created_at`, `updated_at`) VALUES
(1, '<p>1、下载成功后找不到图片怎么办？</p><p>这个问题偶尔发生，主要是由于小程序接口的兼容问题造成，可打开手机文件管理里图片管理查找。</p><p><br/></p><p>2、提示下载失败怎么解决？</p><p>这个问题大多情况是由于手机网络或wifi不稳定造成，可以重新尝试下载。</p><p><br/></p><p>3、动态壁纸下载后怎么设置成手机壁纸？</p><p>最简单的方式就是通过短视频app用已下载的动态视频发布，然后打开自己的作品，找到设置动态壁纸操作即可。</p><p><br/></p><p>4、为什么下载素材需要看广告？</p><p>广告内容是小程序官方提供给小程序一个积极创作的动力来源，请理解和支持！</p><p><br/></p><p>5、如何成为云云取图的创作者？</p><p>可以通过客服联系我们，另外入驻是完全免费的，请大家注意甄别。若有需要搭建同款小程序，也可以咨询联系！</p>', '常见问题', NULL, 1642686971),
(2, '<p>本指引是云云取图小程序开发者收集、使用和存储你的信息而制定。</p><p>开发者收集你的用户信息（用户昵称、头像、性别、地区），用于产品内个人信息展示</p><p>开发者收集你的相册，用于保存图片</p><p>信息的使用规则</p><p>开发者将会在本指引所涵盖的用途内使用收集的信息。</p><p>如开发者使用你的信息超出本指引目的或合理范围，会及时更新本指引，同时，开发者在使用你的信息前，再次以小程序浮窗等方式告知并征得你的明示同意。</p><p>开发者承诺</p><p>不会主动共享或转让你的信息至任何第三方，如存在确需共享或转让时，开发者应当直接或确认第三方征得你的明示同意。</p><p>不会对外公开披露你的信息，如必须公开披露时，开发者应当向你告知公开披露的目的、披露信息的类型及可能涉及的信息，并征得你的明示同意，开发者在使用你的信息前，再次以小程序浮窗等方式告知并征得你的明示同意。</p><p>若你认为开发者未遵守上述约定，或有其他的投诉建议、未成年人个人信息相关问题，可通过以下方式与开发者联系；或者向开发者平台进行投诉。</p><p>更新日期：2021/08/18</p><p>生效日期：2021/08/18</p><p><br/></p>', '用户隐私保护指引', NULL, 1642649152),
(3, NULL, '达人上传素材协议', NULL, NULL),
(4, NULL, '小程序联系我们（针对qq、快手端）', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_news`
--

CREATE TABLE IF NOT EXISTS `qqxcx_news` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL COMMENT '标题',
  `content` text COMMENT '内容',
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0' COMMENT '是否删除 0-否 1-是',
  `show_index` tinyint(1) DEFAULT '0' COMMENT '轮播显示 0-否 1-是'
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='平台公告';

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_permission`
--

CREATE TABLE IF NOT EXISTS `qqxcx_permission` (
  `id` int(10) unsigned NOT NULL COMMENT '权限表主键',
  `parent_id` int(11) DEFAULT '0' COMMENT '父级id',
  `menu_name` varchar(50) DEFAULT '' COMMENT '菜单名称',
  `menu_action` varchar(100) DEFAULT '' COMMENT '菜单路由',
  `menu_url` varchar(255) DEFAULT NULL COMMENT '跳转连接',
  `ul_name` varchar(100) DEFAULT NULL COMMENT '父级名称',
  `icon` varchar(20) DEFAULT NULL COMMENT '父级icon'
) ENGINE=InnoDB AUTO_INCREMENT=168 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='后台权限表';

--
-- 转存表中的数据 `qqxcx_permission`
--

INSERT INTO `qqxcx_permission` (`id`, `parent_id`, `menu_name`, `menu_action`, `menu_url`, `ul_name`, `icon`) VALUES
(1, 0, '素材列表', 'Wallpaper', '/admin/wallpaper', '资源管理', '&#xe6b8;'),
(2, 0, 'Banner管理', 'Cate', '/admin/cate', '资源管理', '&#xe6b8;'),
(10, 0, '站点说明', 'Instruction', '/admin/instruction', '资源管理', '&#xe6b8;'),
(30, 0, '用户列表', 'User', '/admin/user', '用户管理', '&#xe828;'),
(50, 0, '平台公告', 'News', '/admin/news', '达人系统', '&#xe6b4;'),
(51, 0, '常见问题', 'Questions', '/admin/questions', '达人系统', '&#xe6b4;'),
(52, 0, '达人列表', 'Expert', '/admin/expert', '达人系统', '&#xe6b4;'),
(53, 0, '分销明细', 'Distribution', '/admin/distribution', '达人系统', '&#xe6b4;'),
(54, 0, '真实佣金列表', 'DistributionDay', '/admin/distributionDay', '达人系统', '&#xe6b4;'),
(55, 0, '佣金提现', 'UserPrice', '/admin/userPrice', '达人系统', '&#xe6b4;'),
(56, 0, '素材管理', 'ExpertWallpaper', '/admin/expertWallpaper', '达人系统', '&#xe6b4;'),
(110, 0, '系统配置', 'Config', '/admin/config', '系统管理', '&#xe726;'),
(120, 0, '账号管理', 'Admin', '/admin/admin/list', '系统管理', '&#xe726;'),
(130, 0, '角色管理', 'Roles', '/admin/roles/list', '系统管理', '&#xe726;'),
(140, 0, '权限管理', 'Permission', '/admin/permission/list', '系统管理', '&#xe726;'),
(150, 0, '数据图表', 'Analysis', '/admin/analysis', '数据分析', '&#xe6ce;');

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_phone_log`
--

CREATE TABLE IF NOT EXISTS `qqxcx_phone_log` (
  `id` int(10) NOT NULL,
  `phone` char(11) NOT NULL,
  `code` char(6) NOT NULL COMMENT '验证码',
  `ip` varchar(20) DEFAULT NULL,
  `created_at` int(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8 COMMENT='手机验证码记录';

--
-- 转存表中的数据 `qqxcx_phone_log`
--

INSERT INTO `qqxcx_phone_log` (`id`, `phone`, `code`, `ip`, `created_at`) VALUES
(61, '15600000000', '909318', '116.22.7.118', 1644550114);

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_questions`
--

CREATE TABLE IF NOT EXISTS `qqxcx_questions` (
  `id` int(10) NOT NULL,
  `question` varchar(100) DEFAULT NULL COMMENT '问题',
  `answer` text COMMENT '答案',
  `weight` int(10) DEFAULT '0' COMMENT '权重 越小越靠前',
  `created_at` int(10) DEFAULT NULL COMMENT '创建时间',
  `updated_at` int(10) DEFAULT NULL COMMENT '更新时间'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='常见问题表';

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_roles`
--

CREATE TABLE IF NOT EXISTS `qqxcx_roles` (
  `id` int(10) unsigned NOT NULL COMMENT '权限表主键',
  `role_name` varchar(50) NOT NULL DEFAULT '' COMMENT '角色名称'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='后台角色表';

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_role_permission`
--

CREATE TABLE IF NOT EXISTS `qqxcx_role_permission` (
  `id` int(10) unsigned NOT NULL COMMENT '权限表主键',
  `role_id` int(11) NOT NULL COMMENT '角色名称',
  `permission_action` varchar(50) NOT NULL COMMENT '权限路由'
) ENGINE=InnoDB AUTO_INCREMENT=173 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='后台角色-权限表';

--
-- 转存表中的数据 `qqxcx_role_permission`
--

INSERT INTO `qqxcx_role_permission` (`id`, `role_id`, `permission_action`) VALUES
(50, 10, 'Video'),
(51, 10, 'User'),
(52, 10, 'Media'),
(53, 10, 'UrlTitle'),
(54, 10, 'Banner'),
(55, 10, 'Topic'),
(56, 10, 'TopicCate'),
(57, 10, 'Distribution'),
(58, 10, 'UserPrice'),
(59, 10, 'Config'),
(60, 10, 'Admin'),
(61, 10, 'TopicUrl'),
(68, 12, 'Analyse'),
(69, 12, 'UserManger'),
(91, 13, 'Analyse'),
(102, 11, 'Project'),
(103, 11, 'User'),
(104, 11, 'Distribution'),
(105, 11, 'UserPrice'),
(106, 11, 'Config'),
(107, 11, 'Admin'),
(108, 11, 'Roles'),
(109, 11, 'Food'),
(110, 11, 'Analyse'),
(111, 11, 'UserManger'),
(112, 11, 'Food2'),
(134, 1, 'Wallpaper'),
(135, 1, 'Cate'),
(136, 1, 'User'),
(137, 1, 'News'),
(138, 1, 'Questions'),
(139, 1, 'Expert'),
(140, 1, 'Distribution'),
(141, 1, 'DistributionDay'),
(142, 1, 'UserPrice'),
(143, 1, 'ExpertWallpaper'),
(144, 1, 'Config'),
(145, 1, 'Admin'),
(146, 1, 'Roles'),
(159, 2, 'Wallpaper'),
(160, 2, 'Cate'),
(161, 2, 'User'),
(162, 2, 'News'),
(163, 2, 'Questions'),
(164, 2, 'Expert'),
(165, 2, 'Distribution'),
(166, 2, 'DistributionDay'),
(167, 2, 'UserPrice'),
(168, 2, 'ExpertWallpaper'),
(169, 2, 'Config'),
(170, 2, 'Admin'),
(171, 2, 'Roles'),
(172, 2, 'Analysis');

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_template_push`
--

CREATE TABLE IF NOT EXISTS `qqxcx_template_push` (
  `id` int(10) NOT NULL,
  `user_id` int(10) DEFAULT NULL COMMENT '达人id',
  `template_id` varchar(255) NOT NULL COMMENT '订单id',
  `template` text COMMENT '模板内容',
  `type` tinyint(1) DEFAULT '0' COMMENT '类型 1-结算昨天收益推送 2-佣金提现成功推送',
  `is_push` tinyint(1) DEFAULT '0' COMMENT '是否推送 0-未推送 1-已发起 ',
  `push_err` varchar(255) DEFAULT NULL COMMENT '推送错误信息',
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='模板消息推送记录表';

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_user`
--

CREATE TABLE IF NOT EXISTS `qqxcx_user` (
  `user_id` int(11) unsigned NOT NULL,
  `openid` varchar(100) NOT NULL COMMENT '用户openid',
  `nickname` varchar(255) DEFAULT NULL COMMENT '用户昵称',
  `avatar_url` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `platform` varchar(5) DEFAULT '' COMMENT '用户来源 qq-QQ wx-微信 dy-抖音 ks-快手',
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='用户信息';

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_user_day_distribution`
--

CREATE TABLE IF NOT EXISTS `qqxcx_user_day_distribution` (
  `id` int(10) unsigned NOT NULL,
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `created_at` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `true_price` decimal(12,3) NOT NULL DEFAULT '0.000' COMMENT '实际获得的佣金',
  `price_deal_staus` tinyint(1) NOT NULL DEFAULT '1' COMMENT '佣金结算状态 1-待发放 2-已发放 3-发放中 4-违规冻结佣金',
  `priece_deal_at` int(10) NOT NULL DEFAULT '0' COMMENT '佣金发放时间',
  `updated_at` int(10) NOT NULL DEFAULT '0' COMMENT '更新时间',
  `platform` char(2) DEFAULT NULL COMMENT '用户来源 qq-QQ wx-微信 dy-抖音 ks-快手',
  `unit_price` decimal(12,3) DEFAULT '0.000' COMMENT '结算单价'
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='推广用户分佣明细-每日表';

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_user_distribution`
--

CREATE TABLE IF NOT EXISTS `qqxcx_user_distribution` (
  `id` int(10) unsigned NOT NULL,
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `created_at` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `type` tinyint(2) NOT NULL DEFAULT '1' COMMENT '佣金获得方式  1-自推 2-下级推广所得  4-违规冻结佣金',
  `true_price` decimal(12,3) NOT NULL DEFAULT '0.000' COMMENT '实际获得的佣金',
  `price_deal_staus` tinyint(1) NOT NULL DEFAULT '1' COMMENT '佣金结算状态 0-待结算 1-已结算  2-结算中',
  `priece_deal_at` int(10) NOT NULL DEFAULT '0' COMMENT '佣金结算时间',
  `origin_user_id` int(10) NOT NULL DEFAULT '0' COMMENT '提供收益的用户id',
  `updated_at` int(10) NOT NULL DEFAULT '0' COMMENT '更新时间',
  `next_user_id` int(11) DEFAULT '0' COMMENT '获得收益的下级用户id',
  `predict_price` decimal(12,3) NOT NULL DEFAULT '0.000' COMMENT '预估佣金',
  `platform` char(2) DEFAULT '' COMMENT '用户来源 qq-QQ wx-微信 dy-抖音 ks-快手',
  `wallpaper_id` int(10) DEFAULT '0' COMMENT '图片id',
  `openid` varchar(150) DEFAULT NULL COMMENT '小程序用户openid',
  `nickname` varchar(255) DEFAULT NULL COMMENT '小程序用户昵称',
  `avatar_url` varchar(255) DEFAULT NULL COMMENT '小程序用户头像',
  `ip` varchar(20) DEFAULT NULL COMMENT '小程序用户ip'
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='推广用户分佣明细表';

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_user_price`
--

CREATE TABLE IF NOT EXISTS `qqxcx_user_price` (
  `id` int(10) unsigned NOT NULL,
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `price` decimal(12,2) NOT NULL COMMENT '提现金额',
  `ceated_at` int(11) NOT NULL COMMENT '创建时间',
  `is_get` tinyint(1) DEFAULT '0' COMMENT '是否转账 0-待转账 1-已转账',
  `get_at` int(11) DEFAULT NULL COMMENT '转账时间',
  `apply_account` varchar(80) DEFAULT NULL COMMENT '支付宝转账账号',
  `apply_type` tinyint(1) DEFAULT '1' COMMENT '提现方式  1-支付宝  2-微信  3-银行卡',
  `real_name` varchar(50) DEFAULT NULL COMMENT '真实姓名',
  `updated_at` int(10) DEFAULT NULL COMMENT '更新时间',
  `pay_way` tinyint(1) DEFAULT '0' COMMENT '0-支付宝收款账号  1-微信企业到零钱 2-微信收款码转账 3-支付宝收款码转账',
  `code_img` varchar(255) DEFAULT NULL COMMENT '收款码',
  `order_sn` varchar(100) DEFAULT NULL COMMENT '微信企业付款到零钱的订单号',
  `payment_no` varchar(100) DEFAULT NULL COMMENT '微信企业转账成功的微信付款单号',
  `payment_time` int(10) DEFAULT NULL COMMENT '微信付款成功时间'
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='推广用户佣金提现记录表';

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_wallpaper`
--

CREATE TABLE IF NOT EXISTS `qqxcx_wallpaper` (
  `id` int(11) NOT NULL,
  `cate_id` int(10) DEFAULT '0' COMMENT '分类id',
  `name` varchar(30) NOT NULL COMMENT '分类名称',
  `img` varchar(255) NOT NULL COMMENT '分类图标',
  `show_index` tinyint(1) DEFAULT '0' COMMENT '是否显示 0-否 1-是',
  `is_deleted` tinyint(1) DEFAULT '0' COMMENT '是否删除 0-否 1-是',
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL,
  `is_recommend` tinyint(1) DEFAULT '0' COMMENT '是否推荐 0-否 1-是',
  `author_id` int(10) DEFAULT '0' COMMENT '作者id',
  `download_count` int(10) DEFAULT '0' COMMENT '下载次数',
  `type` tinyint(1) DEFAULT '1' COMMENT '资源类型 1-手机壁纸 2-动态壁纸 3-背景图 4-头像 5-表情包',
  `source` tinyint(1) DEFAULT '1' COMMENT '来源 1-后台上传 2-达人上传',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态 1-已通过 2-审核中 3-未通过 4-下架',
  `video_url` varchar(255) DEFAULT NULL COMMENT '动态壁纸视频路径',
  `tag_ids` varchar(255) DEFAULT NULL COMMENT '标签',
  `thumb_img` varchar(255) DEFAULT NULL COMMENT '素材裁剪图 头像、表情包、gif的用原来图片',
  `weight` int(10) DEFAULT '0' COMMENT '权重，数值越大越靠前',
  `expression_video_url` varchar(255) DEFAULT NULL COMMENT '表情包原视频',
  `expression_show_video` tinyint(1) DEFAULT '0' COMMENT '表情包原视频是否展示 0-否 1-是',
  `self_name` varchar(50) DEFAULT '' COMMENT '自定义的素材名称'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='图片管理';

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_wallpaper_collection`
--

CREATE TABLE IF NOT EXISTS `qqxcx_wallpaper_collection` (
  `id` int(10) NOT NULL,
  `user_id` int(10) DEFAULT NULL COMMENT '用户id',
  `wallpaper_id` int(10) DEFAULT NULL COMMENT '素材id',
  `platform` varchar(5) DEFAULT NULL COMMENT '用户来源 qq-QQ wx-微信 dy-抖音 ks-快手',
  `author_id` int(11) DEFAULT '0' COMMENT '作者',
  `created_at` int(10) DEFAULT NULL COMMENT '创建时间',
  `updated_at` int(10) DEFAULT NULL COMMENT '更新时间',
  `type` tinyint(1) DEFAULT '1' COMMENT '资源类型 1-手机壁纸 2-动态壁纸 3-背景图 4-头像 5-表情包'
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COMMENT='用户收藏素材表';

-- --------------------------------------------------------

--
-- 表的结构 `qqxcx_wallpaper_zan`
--

CREATE TABLE IF NOT EXISTS `qqxcx_wallpaper_zan` (
  `id` int(10) NOT NULL,
  `user_id` int(10) DEFAULT NULL COMMENT '用户id',
  `wallpaper_id` int(10) DEFAULT NULL COMMENT '素材id',
  `platform` varchar(5) DEFAULT NULL COMMENT '用户来源 qq-QQ wx-微信 dy-抖音 ks-快手',
  `author_id` int(10) DEFAULT '0' COMMENT '作者',
  `created_at` int(10) DEFAULT NULL COMMENT '创建时间',
  `updated_at` int(10) DEFAULT NULL COMMENT '更新时间'
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COMMENT='用户点赞素材表';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `qqxcx_accesstoken`
--
ALTER TABLE `qqxcx_accesstoken`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qqxcx_admin`
--
ALTER TABLE `qqxcx_admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `qqxcx_ad_log`
--
ALTER TABLE `qqxcx_ad_log`
  ADD PRIMARY KEY (`log_id`),
  ADD KEY `pc` (`created_at`,`openid`) USING BTREE,
  ADD KEY `idx_openid_platform_type_createdat` (`openid`,`platform`,`type`,`created_at`);

--
-- Indexes for table `qqxcx_analysis`
--
ALTER TABLE `qqxcx_analysis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_createdat` (`created_at`);

--
-- Indexes for table `qqxcx_cate`
--
ALTER TABLE `qqxcx_cate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qqxcx_config`
--
ALTER TABLE `qqxcx_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qqxcx_day_price`
--
ALTER TABLE `qqxcx_day_price`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `day` (`day`) USING BTREE;

--
-- Indexes for table `qqxcx_expert`
--
ALTER TABLE `qqxcx_expert`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_code` (`user_code`) USING BTREE;

--
-- Indexes for table `qqxcx_instruction`
--
ALTER TABLE `qqxcx_instruction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qqxcx_news`
--
ALTER TABLE `qqxcx_news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qqxcx_permission`
--
ALTER TABLE `qqxcx_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `action_unique` (`menu_action`);

--
-- Indexes for table `qqxcx_phone_log`
--
ALTER TABLE `qqxcx_phone_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qqxcx_questions`
--
ALTER TABLE `qqxcx_questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qqxcx_roles`
--
ALTER TABLE `qqxcx_roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `role_unique` (`role_name`);

--
-- Indexes for table `qqxcx_role_permission`
--
ALTER TABLE `qqxcx_role_permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qqxcx_template_push`
--
ALTER TABLE `qqxcx_template_push`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qqxcx_user`
--
ALTER TABLE `qqxcx_user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `idx_openid_platform` (`openid`,`platform`);

--
-- Indexes for table `qqxcx_user_day_distribution`
--
ALTER TABLE `qqxcx_user_day_distribution`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id_index` (`user_id`);

--
-- Indexes for table `qqxcx_user_distribution`
--
ALTER TABLE `qqxcx_user_distribution`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id_index` (`user_id`);

--
-- Indexes for table `qqxcx_user_price`
--
ALTER TABLE `qqxcx_user_price`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qqxcx_wallpaper`
--
ALTER TABLE `qqxcx_wallpaper`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qqxcx_wallpaper_collection`
--
ALTER TABLE `qqxcx_wallpaper_collection`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qqxcx_wallpaper_zan`
--
ALTER TABLE `qqxcx_wallpaper_zan`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_w_p` (`user_id`,`wallpaper_id`,`platform`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `qqxcx_admin`
--
ALTER TABLE `qqxcx_admin`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `qqxcx_ad_log`
--
ALTER TABLE `qqxcx_ad_log`
  MODIFY `log_id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=233;
--
-- AUTO_INCREMENT for table `qqxcx_analysis`
--
ALTER TABLE `qqxcx_analysis`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2626;
--
-- AUTO_INCREMENT for table `qqxcx_cate`
--
ALTER TABLE `qqxcx_cate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `qqxcx_config`
--
ALTER TABLE `qqxcx_config`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15005;
--
-- AUTO_INCREMENT for table `qqxcx_day_price`
--
ALTER TABLE `qqxcx_day_price`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `qqxcx_expert`
--
ALTER TABLE `qqxcx_expert`
  MODIFY `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=68;
--
-- AUTO_INCREMENT for table `qqxcx_instruction`
--
ALTER TABLE `qqxcx_instruction`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `qqxcx_news`
--
ALTER TABLE `qqxcx_news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `qqxcx_permission`
--
ALTER TABLE `qqxcx_permission`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '权限表主键',AUTO_INCREMENT=168;
--
-- AUTO_INCREMENT for table `qqxcx_phone_log`
--
ALTER TABLE `qqxcx_phone_log`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=62;
--
-- AUTO_INCREMENT for table `qqxcx_questions`
--
ALTER TABLE `qqxcx_questions`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `qqxcx_roles`
--
ALTER TABLE `qqxcx_roles`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '权限表主键',AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `qqxcx_role_permission`
--
ALTER TABLE `qqxcx_role_permission`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '权限表主键',AUTO_INCREMENT=173;
--
-- AUTO_INCREMENT for table `qqxcx_template_push`
--
ALTER TABLE `qqxcx_template_push`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `qqxcx_user`
--
ALTER TABLE `qqxcx_user`
  MODIFY `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `qqxcx_user_day_distribution`
--
ALTER TABLE `qqxcx_user_day_distribution`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `qqxcx_user_distribution`
--
ALTER TABLE `qqxcx_user_distribution`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=117;
--
-- AUTO_INCREMENT for table `qqxcx_user_price`
--
ALTER TABLE `qqxcx_user_price`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `qqxcx_wallpaper`
--
ALTER TABLE `qqxcx_wallpaper`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `qqxcx_wallpaper_collection`
--
ALTER TABLE `qqxcx_wallpaper_collection`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT for table `qqxcx_wallpaper_zan`
--
ALTER TABLE `qqxcx_wallpaper_zan`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=25;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
