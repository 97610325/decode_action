//Tue Jul 09 2024 14:57:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
新东东农场任务

种植，任务，浇水

环境变量：
jd_XinFarm_plantSkuId // 需要种植的作物ID，详见脚本打印
jd_XinFarm_autoPlant // 种植模式 默认自动种植，自动随机种植等级价值最高的物品
jd_XinFarm_waternum // 浇水次数，默认 10次  自行修改
jd_XinFarm_retainWater  // 快速浇水，默认不开启（有水滴门槛，满足要求后开启才会生效）
jd_XinFarm_Notify // 是否推送通知（true/false），默认不推送

代理变量：
支持API  代理池   具体请查看 Wiki

2024.3.6  建议上代理

cron:45 2-22/6 * * *

*/

const $ = new Env("\u65B0\u4E1C\u4E1C\u519C\u573A\u4EFB\u52A1");
var iｉl = "jsjiami.com.v7";
const I1iI = iii1II;
if (function (lliII, iiiiI, iiIlIl, iiIlIi, iIlIli, iIlIll, il11I1) {
  return lliII = lliII >> 3, iIlIll = "hs", il11I1 = "hs", function (lll1i1, iIl11l, I1ii, I1il, I1Iiil) {
    const IlIili = iii1II;
    I1il = "tfi", iIlIll = I1il + iIlIll, I1Iiil = "up", il11I1 += I1Iiil, iIlIll = I1ii(iIlIll), il11I1 = I1ii(il11I1), I1ii = 0;
    const I1Iiii = lll1i1();
    while (!![] && --iiIlIi + iIl11l) {
      try {
        I1il = parseInt(IlIili(481, "bLYY")) / 1 * (parseInt(IlIili(474, "kRS[")) / 2) + -parseInt(IlIili(1154, "i@xn")) / 3 + -parseInt(IlIili(645, "oyv$")) / 4 + parseInt(IlIili(975, "11dd")) / 5 + parseInt(IlIili(1314, "@Kqq")) / 6 + parseInt(IlIili(485, "dK9O")) / 7 * (parseInt(IlIili(1354, "SHv]")) / 8) + -parseInt(IlIili(1536, "SHv]")) / 9 * (-parseInt(IlIili(626, "Mg$B")) / 10);
      } catch (lIIliI) {
        I1il = I1ii;
      } finally {
        I1Iiil = I1Iiii[iIlIll]();
        if (lliII <= iiIlIi) I1ii ? iIlIli ? I1il = I1Iiil : iIlIli = I1Iiil : I1ii = I1Iiil;else {
          if (I1ii == iIlIli["replace"](/[WyDFAnxgUlQKwBEITY=]/g, "")) {
            if (I1il === iIl11l) {
              I1Iiii["un" + iIlIll](I1Iiil);
              break;
            }
            I1Iiii[il11I1](I1Iiil);
          }
        }
      }
    }
  }(iiIlIl, iiiiI, function (IiI111, i11llI, iIIi1, iIiIIl, iIiIIi, IlIill, iiI1I1) {
    return i11llI = "split", IiI111 = arguments[0], IiI111 = IiI111[i11llI](""), iIIi1 = `\x72\x65\x76\x65\x72\x73\x65`, IiI111 = IiI111[iIIi1]("v"), iIiIIl = `\x6a\x6f\x69\x6e`, (1502241, IiI111[iIiIIl](""));
  });
}(1544, 937548, Iii11l, 195), Iii11l) {}
const jdCookie = require(I1iI(701, "il$L")),
  notify = require(I1iI(999, "WM2J")),
  common = require(I1iI(543, "yGNi")),
  {
    H5st
  } = require("./utils/Rebels_H"),
  CryptoJS = require(I1iI(263, "sFII")),
  querystring = require("querystring");
console[I1iI(464, "*RZC")](""), console["log"](I1iI(1327, "SqLq") + $[I1iI(388, "KYtB")] + I1iI(996, "exYa")), console["log"](I1iI(505, "z%%b")), console[I1iI(1202, "kRS[")](I1iI(927, "0%so")), console[I1iI(709, "[)vG")](I1iI(1673, "11dd")), console["log"](I1iI(1734, "lc(%")), console["log"](I1iI(831, "lc(%")), console["log"]("==========" + $[I1iI(781, "0%so")] + I1iI(702, "iCdQ")), console[I1iI(457, "dK9O")]("");
const autoPlant = !(process[I1iI(422, "B%6T")][I1iI(1395, "Lo*N")] === I1iI(1710, "RCrL")),
  waternum = process[I1iI(360, "kRS[")][I1iI(968, "SmzW")] || "10",
  plantSkuId = process["env"][I1iI(451, "aH6A")] || "",
  retainWater = process[I1iI(1594, "zIDY")][I1iI(1375, "WM2J")] === I1iI(897, "Gr0r"),
  isNotify = process["env"]["jd_XinFarm_Notify"] === "true",
  sign_linkId = I1iI(1246, "yGNi"),
  draw_linkId = I1iI(1497, "i@xn"),
  award_map = {
    1: "\u6C34\u6EF4",
    2: "\u6C34\u6EF4"
  };
let cookie = "";
const cookiesArr = Object[I1iI(860, "8O3M")](jdCookie)[I1iI(1047, "lc(%")](iII1i => jdCookie[iII1i])[I1iI(609, "zIDY")](ilI1ii => ilI1ii);
!cookiesArr[0] && ($[I1iI(1519, "0%so")]($[I1iI(817, "zIDY")], I1iI(1333, "Mg$B")), process[I1iI(1490, "bLYY")](1));
!(async () => {
  const I1IiiI = I1iI,
    iII1l = {
      "yCyXS": function (i11Il, i11Ii) {
        return i11Il !== i11Ii;
      },
      "vIacv": "vslew",
      "VyLAf": function (iII1I, iilli1) {
        return iII1I + iilli1;
      },
      "lwfKy": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "hJSNq": function (ilI1l1, Iil1l) {
        return ilI1l1 * Iil1l;
      },
      "IsfpQ": " \u279C ",
      "CxpIm": function (Iil1i, i1i1i1) {
        return Iil1i === i1i1i1;
      },
      "ejhjF": I1IiiI(240, "yNfK")
    };
  notify[I1IiiI(1658, "sFII")]({
    "title": $["name"]
  });
  for (let iiiIli = 0; iiiIli < cookiesArr["length"]; iiiIli++) {
    if (iII1l[I1IiiI(269, "Mg$B")](iII1l[I1IiiI(1624, "TJ2U")], I1IiiI(1069, "[)vG"))) {
      $[I1IiiI(414, "a9Rj")] = iII1l[I1IiiI(1582, "kRS[")](iiiIli, 1), cookie = cookiesArr[iiiIli], common["setCookie"](cookie), $["UserName"] = decodeURIComponent(common["getCookieValue"](cookie, I1IiiI(556, "z%%b"))), $["UA"] = common[I1IiiI(712, "exYa")]($["UserName"]), $[I1IiiI(313, "RaO3")] = common[I1IiiI(1054, "sFII")](iII1l[I1IiiI(249, "[)vG")]), $[I1IiiI(1644, "a9Rj")] = notify[I1IiiI(1348, "aH6A")]($[I1IiiI(942, "a4Kz")], $[I1IiiI(332, "@Kqq")]), $[I1IiiI(599, "KYtB")] = "", console["log"](I1IiiI(1622, "SmzW") + $[I1IiiI(1648, "SqLq")] + "\u3011" + ($["nickName"] || $["UserName"]) + "******\n"), await Main(), common["unsetCookie"]();
      if ($[I1IiiI(402, "lc(%")]) break;
      await $[I1IiiI(365, "11dd")](parseInt(iII1l[I1IiiI(1651, "RCrL")](Math[I1IiiI(933, "bseJ")](), 1000) + 1000, 10));
    } else il1lI[I1IiiI(369, "LzrV")](IliIIl[I1IiiI(351, "WM2J")]?.[I1IiiI(1755, "i@xn")]);
  }
  const ilI1il = notify[I1IiiI(595, "il$L")]();
  ilI1il && (console[I1IiiI(798, "bLYY")](I1IiiI(479, "KYtB") + ilI1il[I1IiiI(704, "lc(%")](/：/g, iII1l[I1IiiI(710, "2aji")])), isNotify && (iII1l[I1IiiI(536, "UNVx")](iII1l["ejhjF"], I1IiiI(829, "yNfK")) ? Ill1i[I1IiiI(1764, "@Kqq")]("\u2753" + ii1iil + " " + lllI1l[I1IiiI(1596, "[)vG")](i11iii)) : (notify["appendContent"]("\n"), await notify[I1IiiI(1716, "[)vG")]())));
})()["catch"](IIli => $[I1iI(1645, "FwYB")](IIli))["finally"](() => $[I1iI(1581, "RaO3")]());
async function Main() {
  const iI1i11 = I1iI,
    iII11 = {
      "QsYxt": "zh-CN,zh",
      "hDhKh": "9.9.9",
      "tPNRr": "prompt",
      "XybZs": iI1i11(1425, "U2fK"),
      "XsuCX": iI1i11(1097, "RCrL"),
      "FGZCI": function (iilll1, l1iI11) {
        return iilll1(l1iI11);
      },
      "UBqRI": function (l1I11, i11I1, IlIiI) {
        return l1I11(i11I1, IlIiI);
      },
      "cionA": function (l1iI1I, ilI1i1) {
        return l1iI1I === ilI1i1;
      },
      "nphiV": function (l1I1I) {
        return l1I1I();
      },
      "mYKaZ": function (l1lII1, iilllI) {
        return l1lII1 + iilllI;
      },
      "aLXfD": function (i1i1iI, iillil) {
        return i1i1iI + iillil;
      },
      "JGTfE": function (iillii, ilI1iI) {
        return iillii * ilI1iI;
      },
      "GwTvo": function (l1I1i, l1I1l) {
        return l1I1i * l1I1l;
      },
      "ZYsXy": function (i11II) {
        return i11II();
      },
      "pnKvS": function (IlIi1, i1i1il) {
        return IlIi1 === i1i1il;
      },
      "WACzI": iI1i11(384, "RaO3")
    };
  $[iI1i11(1025, "oyv$")] = !![], $[iI1i11(1703, "zIDY")] = ![], $["fp"] = "";
  try {
    const i1i1ii = await common[iI1i11(1793, "LzrV")](cookie);
    if (!i1i1ii && typeof i1i1ii === "boolean") {
      console["log"](iI1i11(1623, "Gr0r")), $[iI1i11(420, "0%so")][iI1i11(1121, "KYtB")](iII11["XsuCX"]);
      return;
    }
    $["farm_home"] = "", await iII11["FGZCI"](sendRequest, iI1i11(1231, "U2fK")), await $["wait"](iII11[iI1i11(1494, "$XDD")](parseInt, Math["random"]() * 500 + 500, 10));
    if ($[iI1i11(593, "2Sez")]) return;
    const Il1ill = $[iI1i11(1781, "WM2J")]?.[iI1i11(1529, "SmzW")]?.[iI1i11(469, "SmzW")] || 0;
    if (iII11["cionA"](Il1ill, 0)) {
      const Il1ili = $["farm_home"]?.[iI1i11(247, "[)vG")]?.["treeFullStage"],
        liIIII = $[iI1i11(1179, "@Kqq")]?.[iI1i11(711, "kRS[")]?.[iI1i11(668, "0%so")] || "",
        iI11ii = $["farm_home"]?.["result"]?.[iI1i11(496, "a9Rj")] || 0,
        IIllII = $["farm_home"]?.[iI1i11(1654, "TJ2U")]?.["skuName"];
      switch (Il1ili) {
        case 0:
          await iII11[iI1i11(1190, "a4Kz")](plantTree), await $[iI1i11(1301, "kRS[")](parseInt(iII11["mYKaZ"](Math["random"]() * 500, 500), 10));
          break;
        case 1:
        case 2:
        case 3:
        case 4:
          console["log"](iI1i11(470, "$XDD") + iI11ii + "]" + IIllII + "\n\uD83C\uDF33 \u5F53\u524D\u8FDB\u5EA6\uFF1A" + liIIII + "\n"), $[iI1i11(539, "%7#J")][iI1i11(1283, "bLYY")](IIllII + iI1i11(1485, "TJ2U") + iI11ii + "]" + liIIII);
          break;
        case 5:
          console[iI1i11(882, "yNfK")]("\uD83C\uDF89 \u79CD\u690D\u7684 \u201C" + IIllII + iI1i11(1325, "OSrY")), $[iI1i11(1229, "rWnN")][iI1i11(1296, "a4Kz")](iI1i11(508, "dK9O") + IIllII + iI1i11(432, "SHv]")), await notify["sendNotify"]($[iI1i11(788, "TJ2U")] + iI1i11(251, "ekwl"), iI1i11(1088, "oyv$") + $[iI1i11(553, "LzrV")] + "\u3011" + $[iI1i11(373, "UNVx")] + iI1i11(1349, "il$L") + IIllII + iI1i11(758, "rWnN")), console[iI1i11(292, "iCdQ")](iI1i11(1794, "[)vG")), await iII11["nphiV"](plantTree), await $[iI1i11(1067, "8O3M")](parseInt(iII11[iI1i11(1022, "SqLq")](iII11[iI1i11(320, "U2fK")](Math[iI1i11(931, "il$L")](), 500), 500), 10));
          break;
      }
    } else {
      if (iI1i11(1479, "$XDD") === iI1i11(1002, "il$L")) console[iI1i11(649, "exYa")](iI1i11(1258, "SHv]")), await plantTree(), await $[iI1i11(346, "*RZC")](parseInt(iII11[iI1i11(334, "SHv]")](iII11["GwTvo"](Math[iI1i11(1010, "SqLq")](), 500), 500), 10));else {
        const iI11il = Ilil1["data"];
        if (iI11il?.["data"] && iI11il?.[iI1i11(1506, "TJ2U")]?.[iI1i11(1777, "B%6T")]) {
          const iii111 = iI11il[iI1i11(351, "WM2J")][iI1i11(907, "KYtB")]?.[iI1i11(928, "7%iy")],
            liiI = iI11il["data"][iI1i11(1777, "B%6T")]?.["tk"];
          if (iii111 && liiI) return {
            "token": liiI,
            "algo": iii111
          };
        }
        IliII1 = "\uD83D\uDEAB getH5st request_algo \u8BF7\u6C42\u5F02\u5E38 \u279C " + l1iIi1["stringify"](iI11il);
      }
    }
    if ($["farmHot"]) return;
    await dailySign();
    if ($["farmHot"]) return;
    await iII11["ZYsXy"](doTask);
    if ($[iI1i11(1501, "U2fK")]) return;
    await getAssistRewards(), await limitedTimeDropletRain(), await goWatering(), await iII11[iI1i11(872, "8O3M")](doTask), await awarddetail();
  } catch (liIII1) {
    if (iII11["pnKvS"](iII11["WACzI"], iI1i11(640, "i@xn"))) console[iI1i11(686, "rWnN")]("\u274C \u811A\u672C\u8FD0\u884C\u9047\u5230\u4E86\u9519\u8BEF\n" + liIII1);else return {
      "wc": 0,
      "wd": 0,
      "l": iI1i11(1250, "2Sez"),
      "ls": iII11[iI1i11(1422, "*RZC")],
      "ml": 0,
      "pl": 0,
      "av": IIIIiI["av"],
      "ua": II1I1["ua"],
      "sua": i1i111[iI1i11(901, "WM2J")],
      "pp": ii1l1I["pin"] ? {
        "p1": lI1lII["pin"],
        "p2": lIill1["pin"]
      } : {},
      "extend": {
        "pm": 0,
        "wd": 0,
        "l": 0,
        "ls": 2,
        "wk": 0,
        "bu1": iII11["hDhKh"]
      },
      "pp1": iiI1i1[iI1i11(1402, "$XDD")] ? "" : ilIlII[iI1i11(1631, "exYa")],
      "pm": {
        "ps": iII11[iI1i11(799, "$XDD")],
        "np": iII11["XybZs"]
      },
      "w": 400,
      "h": 700,
      "ow": 400,
      "oh": 700,
      "url": iIiil1[iI1i11(1730, "sFII")],
      "og": l1lI1i["og"],
      "pr": 1.25,
      "re": l1lI1l[iI1i11(1110, "zIDY")],
      "random": this[iI1i11(1140, "ekwl")](10),
      "referer": l1I1Il[iI1i11(1753, "ekwl")],
      "v": l1I1Ii["fv"],
      "ai": IIlili[iI1i11(997, "bLYY")],
      "fp": IIlill["fp"]
    };
  }
}
async function plantTree() {
  const lIIli1 = I1iI,
    l1Ili1 = {
      "ESUhj": function (iliill, I111ii) {
        return iliill(I111ii);
      },
      "CfHvB": "farm_tree_board",
      "tuIsj": function (Ililll, I1liII) {
        return Ililll + I1liII;
      },
      "AQigB": function (I1ii1I, Ililli) {
        return I1ii1I && Ililli;
      },
      "IjqTn": lIIli1(483, "[)vG"),
      "rdZFr": "\u5F53\u524D\u5C1A\u672A\u79CD\u690D\uFF0C\u81EA\u52A8\u968F\u673A\u9009\u62E9\u6700\u9AD8\u4EF7\u503C\u7684\u4F5C\u7269\u79CD\u690D",
      "qgjGH": function (lii1, iIii1l) {
        return lii1 + iIii1l;
      },
      "hjYYh": lIIli1(1469, "B%6T"),
      "kjwyk": function (iIliIi, IIil1l, i1i1l1) {
        return iIliIi(IIil1l, i1i1l1);
      },
      "RckxI": lIIli1(1059, "z%%b"),
      "yegEu": function (iIii1i, IIil1i) {
        return iIii1i === IIil1i;
      },
      "vAWtS": lIIli1(692, "2aji")
    };
  $["farm_tree_board"] = "", await l1Ili1["ESUhj"](sendRequest, l1Ili1[lIIli1(1206, "8O3M")]), await $["wait"](parseInt(l1Ili1[lIIli1(1556, "11dd")](Math[lIIli1(361, "Lo*N")]() * 500, 500), 10));
  if (!$[lIIli1(1686, "dK9O")]) return;
  let iliili = $["farm_tree_board"]?.[lIIli1(1484, "UNVx")] || [];
  if (!iliili[lIIli1(1554, "SqLq")]) {
    console[lIIli1(1170, "a9Rj")](lIIli1(454, "2Sez") + JSON[lIIli1(1439, "oyv$")]($["farm_tree_board"]));
    return;
  }
  if (l1Ili1[lIIli1(771, "kRS[")](autoPlant, !plantSkuId)) {
    if (l1Ili1[lIIli1(427, "Gr0r")] !== lIIli1(277, "lc(%")) {
      console[lIIli1(1096, "7%iy")](l1Ili1[lIIli1(957, "KYtB")]);
      let IlIl1 = iliili[lIIli1(1212, "a4Kz")]((iIliI1, iIii11) => iIii11[lIIli1(1082, "[)vG")] > iIliI1[lIIli1(802, "SmzW")] ? iIii11 : iIliI1, iliili[0]),
        II1i1I = IlIl1["farmLevelTrees"][lIIli1(1288, "SHv]")]((i1i1lI, IIllIi) => parseFloat(IIllIi[lIIli1(1547, "ekwl")]) > parseFloat(i1i1lI[lIIli1(1451, "hfm5")]) ? IIllIi : i1i1lI, IlIl1["farmLevelTrees"][0]);
      if (II1i1I) {
        const i11l1l = "1|3|2|4|0"[lIIli1(243, "SHv]")]("|");
        let IIllIl = 0;
        while (!![]) {
          switch (i11l1l[IIllIl++]) {
            case "0":
              await $["wait"](parseInt(l1Ili1["qgjGH"](Math[lIIli1(1752, "Mg$B")]() * 2000, 2000), 10));
              continue;
            case "1":
              $[lIIli1(1558, "exYa")] = !![];
              continue;
            case "2":
              console[lIIli1(1415, "RCrL")]("\u53BB\u79CD\u690D\u5546\u54C1 \u201C" + II1i1I?.["skuName"] + lIIli1(1715, "Gr0r") + II1i1I?.[lIIli1(1483, "iCdQ")] + "\u5143\uFF09\u201D");
              continue;
            case "3":
              $[lIIli1(737, "hfm5")] = II1i1I[lIIli1(1496, "a4Kz")];
              continue;
            case "4":
              await sendRequest(lIIli1(1101, "TJ2U"));
              continue;
          }
          break;
        }
      }
    } else lilIl1[lIIli1(1677, "FwYB")](i1l1ii[lIIli1(1072, "ekwl")], lIIli1(1186, "2Sez")), i1l1[lIIli1(575, "LzrV")](1);
  } else {
    if (plantSkuId) $[lIIli1(1480, "RCrL")] = !![], $[lIIli1(783, "Mg$B")] = plantSkuId, await l1Ili1[lIIli1(538, "z%%b")](sendRequest, l1Ili1["hjYYh"]), await $[lIIli1(651, "hfm5")](l1Ili1["kjwyk"](parseInt, l1Ili1[lIIli1(418, "0%so")](Math[lIIli1(932, "RCrL")]() * 1000, 1000), 10));else {
      if (l1Ili1[lIIli1(1782, "Lo*N")] === lIIli1(1320, "0%so")) {
        let iI11l1 = "";
        for (let IlIii of iliili) {
          if (l1Ili1[lIIli1(342, "LzrV")](l1Ili1[lIIli1(1387, "yNfK")], lIIli1(412, "$XDD"))) {
            const iI11lI = IlIii[lIIli1(1625, "FwYB")],
              II1i11 = IlIii["needDays"];
            for (let IlillI = 0; IlillI < iI11lI["length"]; IlillI++) {
              if (lIIli1(1708, "Lo*N") === lIIli1(827, "2Sez")) {
                const iIliII = ii1IIl[lIIli1(1561, "i@xn")][lIIli1(551, "yGNi")]?.[lIIli1(928, "7%iy")],
                  iIii1I = ii1IIi["data"][lIIli1(383, "%7#J")]?.["tk"];
                if (iIliII && iIii1I) return {
                  "token": iIii1I,
                  "algo": iIliII
                };
              } else {
                const I1liI1 = iI11lI[IlillI][lIIli1(663, "exYa")],
                  I1ii11 = iI11lI[IlillI][lIIli1(725, "%7#J")];
                iI11l1 += I1liI1 + lIIli1(1173, "sFII") + II1i11 + lIIli1(434, "yNfK") + I1ii11 + "\n";
              }
            }
          } else IiiIl[lIIli1(769, "SmzW")] = !![], ii1l1l["message"] && ii1l1i[lIIli1(1271, "zIDY")]["fix"](l1iIl1);
        }
        console["log"]("\u5F53\u524D\u5C1A\u672A\u79CD\u690D\uFF0C\u53EF\u79CD\u690D\u7684\u5546\u54C1\u5982\u4E0B\uFF1A\n" + iI11l1), console["log"](lIIli1(1063, "8O3M")), $[lIIli1(630, "kRS[")][lIIli1(587, "U2fK")](lIIli1(639, "sFII"));
      } else lllI1I[lIIli1(1302, "aH6A")]("\u2753" + lillI1 + " " + IlIlii["stringify"](i1l1i1));
    }
  }
}
async function dailySign() {
  const iIl11i = I1iI,
    i1i1li = {
      "pBJBO": iIl11i(1585, "bLYY"),
      "nkXyH": function (iil1Ii, iii11i) {
        return iil1Ii(iii11i);
      },
      "gRAHT": iIl11i(1141, "RaO3"),
      "qTOMp": "\u53BB\u505A\u4EFB\u52A1 \"\u6BCF\u65E5\u7B7E\u5230\"",
      "sRlTG": function (iii11l, l1Ilii) {
        return iii11l + l1Ilii;
      },
      "YyTQL": function (IIl11l, I111i1) {
        return IIl11l !== I111i1;
      },
      "CzxIv": iIl11i(358, "hfm5")
    };
  await i1i1li["nkXyH"](sendRequest, iIl11i(791, "SqLq"));
  const iIill = $[iIl11i(1295, "[)vG")]?.[iIl11i(770, "$XDD")] || 0;
  switch (iIill) {
    case 0:
      {
        if (i1i1li[iIl11i(1342, "UNVx")] === iIl11i(1270, "KYtB")) {
          console[iIl11i(643, "lc(%")](i1i1li["qTOMp"]), await sendRequest(iIl11i(1691, "SHv]")), await $[iIl11i(724, "0%so")](parseInt(Math[iIl11i(1221, "ekwl")]() * 1000 + 1000, 10)), await i1i1li[iIl11i(377, "i@xn")](sendRequest, iIl11i(823, "z%%b")), await $[iIl11i(1433, "Lo*N")](parseInt(i1i1li[iIl11i(568, "7%iy")](Math[iIl11i(773, "LzrV")]() * 1000, 1000), 10));
          break;
        } else {
          IIII1l["log"](i1i1li[iIl11i(1109, "LzrV")]), i1ili1[iIl11i(1670, "hfm5")][iIl11i(1099, "iCdQ")](i1i1li["pBJBO"]);
          return;
        }
      }
    case 1:
      {
        if (i1i1li[iIl11i(603, "a9Rj")]("OXDje", iIl11i(1363, "[)vG"))) {
          const iIili = new i11iIl(ll11ll[iIl11i(1515, "@Kqq")]);
          l11iIl[iIl11i(1251, "oyv$")] = iIili[iIl11i(880, "Lo*N")], i11iIi["og"] = iIili[iIl11i(743, "LzrV")];
        } else break;
      }
    default:
      {
        if (iIl11i(1162, "SHv]") !== i1i1li[iIl11i(670, "LzrV")]) iii1ii[iIl11i(602, "KYtB")](iIl11i(438, "LzrV") + (il1iIi[iIl11i(677, "Mg$B")] || iii1il["msg"]));else {
          console[iIl11i(1310, "Lo*N")](iIill);
          break;
        }
      }
  }
}
async function limitedTimeDropletRain() {
  const i11ll1 = I1iI,
    iil1Il = {
      "FPgbP": function (liil, i11l11) {
        return liil(i11l11);
      },
      "tealV": function (IlIli, liIIIl, iliil1) {
        return IlIli(liIIIl, iliil1);
      },
      "TaDkh": function (i1i1ll, IIllI1) {
        return i1i1ll + IIllI1;
      },
      "WmLye": function (lIl1iI, iil1II) {
        return lIl1iI === iil1II;
      },
      "XAKPF": function (iii11I, IIil11) {
        return iii11I / IIil11;
      },
      "UaRlZ": function (iI11iI, l1IliI) {
        return iI11iI % l1IliI;
      },
      "yqdCW": i11ll1(971, "exYa"),
      "TPmBN": function (liIIIi, iIilI) {
        return liIIIi * iIilI;
      }
    };
  $[i11ll1(1039, "bLYY")] = "", await iil1Il[i11ll1(1676, "a4Kz")](sendRequest, i11ll1(1039, "bLYY")), await $["wait"](iil1Il[i11ll1(1143, "OSrY")](parseInt, iil1Il["TaDkh"](Math[i11ll1(1169, "rWnN")]() * 1000, 1000), 10));
  if (!$[i11ll1(697, "a9Rj")]) return;
  const IlIll = $[i11ll1(267, "rWnN")]?.[i11ll1(648, "z%%b")]?.[i11ll1(1641, "B%6T")] || 0;
  switch (IlIll) {
    case 2:
      {
        if (iil1Il[i11ll1(366, "sFII")](i11ll1(1440, "0%so"), "BAcGT")) {
          const liii = $[i11ll1(1421, "@Kqq")]?.["result"]?.[i11ll1(1709, "iCdQ")] || 0,
            iliilI = Math[i11ll1(242, "SHv]")](liii / 60000),
            I111iI = iil1Il["XAKPF"](iil1Il["UaRlZ"](liii, 60000), 1000)[i11ll1(1428, "z%%b")](0);
          console[i11ll1(778, "TJ2U")](i11ll1(726, "yGNi") + iliilI + "\u5206\u949F" + Math[i11ll1(1682, "U2fK")](I111iI) + "\u79D2\u5F00\u542F");
          break;
        } else liIIi["t"] = "";
      }
    case 3:
      {
        if (i11ll1(1742, "0%so") === iil1Il["yqdCW"]) iI1Ill[i11ll1(649, "exYa")](lilI1), IIIi1 && (iI1111[i11ll1(1356, "2aji")] = !![], IIIl1[i11ll1(956, "Gr0r")] && I1I1lI["message"]["fix"](ii1il));else {
          const II1i1l = $[i11ll1(1061, "kRS[")]?.["result"]?.[i11ll1(1180, "WM2J")] || 0,
            II1i1i = Math[i11ll1(541, "SmzW")](II1i1l / 60000),
            Il1iiI = (II1i1l % 60000 / 1000)[i11ll1(521, "exYa")](0);
          $[i11ll1(589, "7%iy")] = $[i11ll1(504, "7%iy")]?.["result"]?.[i11ll1(1522, "z%%b")] || "", console["log"]("\n\u3010\u9650\u65F6\u6C34\u6EF4\u96E8\u3011\u4EFB\u52A1\u8FD8\u5269" + II1i1i + "\u5206\u949F" + Math[i11ll1(1273, "W5fK")](Il1iiI) + "\u79D2\u7ED3\u675F"), await sendRequest(i11ll1(793, "yGNi")), await $["wait"](iil1Il["tealV"](parseInt, iil1Il["TaDkh"](iil1Il[i11ll1(659, "yGNi")](Math[i11ll1(884, "*RZC")](), 1000), 1000), 10)), await sendRequest(i11ll1(1344, "lc(%")), await $[i11ll1(333, "yNfK")](parseInt(iil1Il[i11ll1(462, "%7#J")](Math["random"]() * 1000, 1000), 10));
          break;
        }
      }
    case 4:
      break;
    default:
      console[i11ll1(1786, "2aji")]("\n\u3010\u9650\u65F6\u6C34\u6EF4\u96E8\u3011\u4EFB\u52A1\u72B6\u6001\u672A\u77E5\uFF1A" + IlIll);
      break;
  }
}
function iii1II(_0x24607b, _0x12e313) {
  const _0x3302a7 = Iii11l();
  return iii1II = function (_0x2dc5e6, _0x586dfb) {
    _0x2dc5e6 = _0x2dc5e6 - 235;
    let _0x30cec9 = _0x3302a7[_0x2dc5e6];
    if (iii1II["ygWxzv"] === undefined) {
      var _0x18b368 = function (_0x4442d0) {
        const _0x44f1b6 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x4d3583 = "",
          _0x32059f = "";
        for (let _0x1b3bd4 = 0, _0x2a560e, _0x3e00da, _0x1dd1b2 = 0; _0x3e00da = _0x4442d0["charAt"](_0x1dd1b2++); ~_0x3e00da && (_0x2a560e = _0x1b3bd4 % 4 ? _0x2a560e * 64 + _0x3e00da : _0x3e00da, _0x1b3bd4++ % 4) ? _0x4d3583 += String["fromCharCode"](255 & _0x2a560e >> (-2 * _0x1b3bd4 & 6)) : 0) {
          _0x3e00da = _0x44f1b6["indexOf"](_0x3e00da);
        }
        for (let _0x45717a = 0, _0x3f5cbf = _0x4d3583["length"]; _0x45717a < _0x3f5cbf; _0x45717a++) {
          _0x32059f += "%" + ("00" + _0x4d3583["charCodeAt"](_0x45717a)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x32059f);
      };
      const _0x2656c0 = function (_0x53815c, _0x356666) {
        let _0x5164c0 = [],
          _0x33eaa4 = 0,
          _0x523849,
          _0x4dffee = "";
        _0x53815c = _0x18b368(_0x53815c);
        let _0x45362a;
        for (_0x45362a = 0; _0x45362a < 256; _0x45362a++) {
          _0x5164c0[_0x45362a] = _0x45362a;
        }
        for (_0x45362a = 0; _0x45362a < 256; _0x45362a++) {
          _0x33eaa4 = (_0x33eaa4 + _0x5164c0[_0x45362a] + _0x356666["charCodeAt"](_0x45362a % _0x356666["length"])) % 256, _0x523849 = _0x5164c0[_0x45362a], _0x5164c0[_0x45362a] = _0x5164c0[_0x33eaa4], _0x5164c0[_0x33eaa4] = _0x523849;
        }
        _0x45362a = 0, _0x33eaa4 = 0;
        for (let _0x5c8890 = 0; _0x5c8890 < _0x53815c["length"]; _0x5c8890++) {
          _0x45362a = (_0x45362a + 1) % 256, _0x33eaa4 = (_0x33eaa4 + _0x5164c0[_0x45362a]) % 256, _0x523849 = _0x5164c0[_0x45362a], _0x5164c0[_0x45362a] = _0x5164c0[_0x33eaa4], _0x5164c0[_0x33eaa4] = _0x523849, _0x4dffee += String["fromCharCode"](_0x53815c["charCodeAt"](_0x5c8890) ^ _0x5164c0[(_0x5164c0[_0x45362a] + _0x5164c0[_0x33eaa4]) % 256]);
        }
        return _0x4dffee;
      };
      iii1II["zuCOxd"] = _0x2656c0, _0x24607b = arguments, iii1II["ygWxzv"] = !![];
    }
    const _0x5ef4f5 = _0x3302a7[0],
      _0x114a95 = _0x2dc5e6 + _0x5ef4f5,
      _0x3ec87d = _0x24607b[_0x114a95];
    return !_0x3ec87d ? (iii1II["JECISr"] === undefined && (iii1II["JECISr"] = !![]), _0x30cec9 = iii1II["zuCOxd"](_0x30cec9, _0x586dfb), _0x24607b[_0x114a95] = _0x30cec9) : _0x30cec9 = _0x3ec87d, _0x30cec9;
  }, iii1II(_0x24607b, _0x12e313);
}
function Iii11l() {
  const ilIII1 = function () {
    return [...[iｉl, "DnIDjwBsjigaUQmlxi.TyAcUoYFmKx.WxUvEU7Dy==", "su1RqLVcRqhdLCk/es1wW5/cUZldLmoNWR81tSofsdRcImo9urrnCcKnW4LmWQy", "yYKHWO/cIComW6tdMbRcOCknW5btguBcRWSXW4ldIsZcJue", "W4aSbN1RWPpdTW", "bgFcI8oJkW", "u8oOWP/cRxCA", "W6HPnhi", "aCk7WPhdHSor", "WRXJW4ZcJSo9W4v5", "vSoHDSkgWPW", "6lsu5y+X5PEe5Pwx", "W4hdSmkDfZW", "v1ddO1RcSWy", "W6RdS8oirmoG", "W4KOaw8", "qrerqYS", "WPRcNrHsW6a", "cCkquCkIxq", "WOioWQm", "kCkRW6m", "uK/dHmo0gq", "sgJcHu0Cnmk5W4TW", "CKddOCoBhq", "imkGW7ThW68o", "WRBcG8kIiKS", "WQBcO8kpia", "Cmk4r8kaW4P/WQZcTJZcLa", "eIhcKmkEW5lcPCkU", "w8oDWQBdUXZdOq", "xqSSWR3dHa", "vCo1WONcHq", "5P2j5Qok5B2n6iQf5lIC", "vCouWQddV8oEW5hcRG", "AKvPpSo3", "8jokHSkV5BEC5RAr5Rga", "CZOwAZddPmouW5XGxW", "W5PNWOqC", "W7BdTSoVEa", "rmktEri9W6pdJmkCErFdSttdMCoAl8oZ", "uLhdNCohCvvRWOpcM8oZWQi0W53cMxNdHmoeW4xcU8kfWOO", "vmoZWPFcRxCA", "r2bMEgy", "WQxcHCkEfL4", "WPjLW4bTrW", "D8odWRRdQ8owW5G", "yZOryq", "5Q6F77Yk5y2l5Rs65RoAWO0", "W6rlW67cQSoYpIhLVjNLPklJGlJKU6ZKU6hOT5xLJOa", "6lEm5y2K5PAx5Psu", "WR1nW6rfDW", "WRjNW5/cH8ouW5j8WOJcLSoAWPpcJ0FcQW", "kgTLoSkou8o6WOZcTCkovmoCEa", "FZWMWPtdUSknWRJdNbJcVa", "pSkGW6fvW6KiW5m", "uhHfq3i", "x8ouWQFdGmoEW4lcRSkpp8oKtbSqfKSZjGqA", "yMv1i8oPlq", "5y6J5lIG5B2+6yc/5REC5RgsWQG", "aComkebIWQlcTCkyBdxdOcJdLW", "Axyrpt7cSa", "xvBdQa", "BCoJr8k5", "A8o4WRD0ua", "q1ONhW7cH8kTeru/oSkBA8kwWOPnW4dcU0tcNaOK", "W4fEW7PFWQBcIa", "xmogWQ7dTqddOKe", "tSoKWQzxuSowWQWeWO8", "sSoEmmoEqmkMWOa1CtmMW47cGSovW53cICoxW7PdW4xdQ2tcICkRWRnjW5yMmK/cPG7cICkDWQVcIWdcNSoAWPSMuSkIr8o7gSohhmovsSk+W4jDW7/dU8odiqVcPCkDWRVcLaGzD1tdTSoGd3xcRq", "xhTaweW", "W7y1e8kntJP/", "WRHPW4RcR8oQW4u", "W6tNPQZMP4NNMitMS6ZMNOJLT7NMIiNNHBBLJ4FKUQxML4VOJytKU7etW6JdSG", "W57dOX5+ia", "xv7dI8opvG", "y1rxFeu", "6lEJ56wm5OQb54Au6l685P2l", "WOddNCk1kCku", "tfHRuua", "EgvQ", "WRLHW7ztBuC", "fCkRFmkhtW", "zSkWtSkMW6PS", "WRNcUmkdphS", "b8kEs8kNxhy", "FCkZsaaL", "wmkwW6nMoYBdJaRdLbZdNh4", "WQ1BdKBdRvNdSSkPlCogpSo8xSoqpSkqWPq", "W7JcSIvIWP1zWRadt8o0WQVdVG/cUSkmF0u", "4P2UWOOJW4ThW5tcMMLTjNRdHSoDW4RdNmouW4ddIK/cHSo8ACkg5z6Z5AAg55g6WQfotEIUIoAZLEAxIoMdOEwlR+s5JUMwQ+IUUmoM", "cSkEuG", "WO8wWQxdSSk8qhjPWOW", "vgn0pCox", "nx3MI6JLPQNOJitLVBtdQW", "W6/dPG9/a8kz", "fYNdHSoAW6dcT8oXWQLtjmkGWOHEa1FdPq", "WQhcQCkvpxKlW5S", "WQr+W4NcGCoP", "smogk8o0wG", "vmolWOVdRGBdQgldHhJcQSkpca0Ffmo2W5xcVqpdPKWYWQpMTAZMSiRMRilMLRJVVjVPUjVORydcUmo7fUAUOa", "mCoTdmoAWQfdWQRcGZpcQZO", "ExVdUSo4fJ8jjmk7WPJcHCkX", "W4FdH8oHBSoF", "WRL1W4O", "wmkwW6nMlc3dLW", "4P2nkN0TW7qaqcddOYlKVApLH7FLJjlMLlRMNQ/OR6VVVz/NVlBLSA/LVlBOP4RLJPVMLPRVVP0", "qZRcQMPc", "x8kECHaLW7G", "W6tdLGn/BG", "puNcOCoTgCkaBW", "WP1tW41sDa", "W5RdJdzHpG", "y3innXxcRmkCpdeUfSkXrSk7WQO", "W4XqpIxdQG", "x33cG0u", "WRy0WOldMfq", "W4ZdVmkcgXPb", "wSkyW79Sic3dJtldPHZdNxH3WQWNWRerWPi", "FSo9WQWyWQO", "ytOxBthdPCot", "DvldRLFcPa", "EbRcJeDBWQ3cOxtcUHBcNa", "WOuhtmkYW4q", "W78Fdend", "WOZdSGuXAsJcNhhdHSo+f17cN8koWOJcPr0", "bSkMW5zMW4K", "z8k2wSkiW7H/", "W7xdL1WXxhFdGSoEtmkPySkEW47cImkfW6m", "BmkCErKeW5e", "kSkKW6DnW5mjWOC", "C298lCoYlqC", "aI3cJmk2W5pcPW", "phzYdCknvCoyWOFcLCkvwSolBW", "gLbJhmkl", "dWhcMSkYW7e", "Ehv/EhhdVqysWRvqWPpdLtpcOmkCW5lcQWBcRmkMo04I", "WO7dTSkkfmka", "W4xcQY16WPW", "xSoUWPNcKhDhWO9dWPJdGX/cKsaHWPHpACk7D8omi8kVDGJcUcfZrmoRW7pdPsNcHmkO", "nSkYWQ3dQ8os", "EGZcG2jEWO/cPwRcPH0", "77+I5lMK5ygl", "s2NcHeW", "m8kJWQNdPG", "DmogWQBdRSoD", "W4zfW7jrWRRcI8kV", "lGpcLCk5W64", "D8oyWOxdQ8oo", "bepcVSopcG", "WP7cNaPvW7e", "W7nngsZdPG", "WPxcTmkOjvu", "veVdVwpcPrm", "oSkJWQ0", "w8o2rSkFWRm", "8jgQT8ox", "eCkdsq", "W57dTSoQA8oGWPTfWPSs", "WONdTmksdSktWRNdLCoNW6r2jLWhtCoqwCosWPBdUG", "wvxdNmozt1n9", "W43cUHToWPfeWOiRCSokWQldQrJcVCkeEuv0pSovW5r/iCovW6W45B+Y6ykc5REq5Rkv77+E6BI96k6B5lIF5BYI5zkj", "WOFMNOJNNOFNIQhMG7r3W68", "s33cHuuFimkuW4X9W48", "m2zUomkwsa", "y2nGbCoZlW", "WQvBeu4", "W6/dIqS", "ug9EuNPT", "W6z5W7jJWPG", "WQ1BdKBdRuZdT8kToSo9a8o3wSowoW", "WOTNW4hcJCo3W7PRWP3cIq", "kmkKW6fb", "W4iNjv9G", "tmokWQFdGWpdSG", "B3Wwna", "WQ9BceO", "xNVdTSo4FG", "WQtcUmkspMTwWPeDWOZdHSoMW7mLWQOeWRZcPfFcPmk2FCo5W4yIkeSmdrXnW5H2BNu", "umolkSokxmoX", "WOqYs8kFW5SzxG", "zCkPrmkhW7W", "ErlcMf1jWR4", "ENxdH8o+tq", "xCo8WRjluSowWQWeWO8", "wCokWQddVGddS1BdLG", "xCousmkRWO0", "qLxdNCozr1T2", "WRhdGXi", "W7/cPaz0WRm", "DmovwSkmWRu", "W4eMeG", "WO0oWQVdQ8kXCq", "tmoQWRDQqSoJWQCa", "chbckmkk", "4P2YWO/cS8otg8ooeCowFSoN55Ep5OMV56Ys5zgM5PAh6yod5yQl5lMo6zw36kYPqW", "W6RcVcP/WRm", "uSoFn8og", "WQDVW5FcJW", "WPi6WRddM3i", "sZ/cHNzW", "WR7dIXHAWOzn", "WOytWQhdPG", "WP0Yva", "tSoUWQbmwSo2", "W6W6W5NcOWm", "uCoEWQa", "v3rwuNPT", "xSoqWQhdOCoGW57cPmkrlG", "mIFcNCkdW6K", "Bw90l8o0ia", "EtGZWPRdGCkgWRK", "C29PpCoSpa", "W6unW5a", "E3VdVmo0", "W69NnebaW7lcI8oTW7ZdPSoK", "5P++5Qc+5yYa6iID5lU+", "zM9Uamk1oWe", "W5tcQJz/WPznWQ0SEq", "5lQB5yQq5yQe", "ogz0e8knr8oFWO3cKSkoumoADhy", "5y6a56Er5QE65PAu55U2lq", "6lEw56EM5B2v6iMo6l2R5P+Q", "hmkk5OU55yQE5lQ156UM5Rk7", "WQz3W6i", "AXRcKhfxWQRcGgFcPXK", "WQLTW79RCLq", "wtGZWPRdGCkgWRK", "W4DjasddNa", "vSobzSkFWRK", "WPSbWRFdPNNcSmopbmo8WPi", "wmkBW75KfG", "tCkhW71Iea", "W6VdTsPytG", "WR/dOXqpya", "vrRcMKb+", "sxNcHfeEjW", "vmo/WQDjrCk4W7PBWOyzWP7dSL3cSmohvmkvWRFcTCoEsCojW5RdPHrOWPi2WP9JW40", "v2VcKw8l", "WQinWQtdOepcLCophSo9WO/cVSoicKK", "5OUM54Ei6yc355YF", "WP0vWRBdQCk2C2j/WPa", "W61NatNdUa", "WR/dSqTLWO8", "tCkdW6nIcIxdIJpdMq", "wxpcMeGxmSk+", "WOdcPCkHi1m", "WRTLW7DhBedcR8o0b1q", "WOhcMCkQl0G", "WRbNW5NcIW", "sSoUWQfkx8oTWRS", "w8o/WP7cK2uAW4u", "b8kdxmkXqx4Xpvy", "xSkiEW", "vSkUW5bBkq", "5lQz5yQoW7hcGG", "WRpcUJ9zW4xdJJqVhmkLEYTecSkbW41HWRRcU8od", "5A6/54Mq5y2O", "w8oPpCo2ya", "W6WvW5BcRbe", "d0RcOSotgCkxEq", "WRpcUJ9zW4xdNsy1g8kjFrTycSkmW6zxWRdcUSolWRijW7BdTSkk", "v2rkbmoY", "k+IUQUAWL+wNJUI2LSod4P2xWPK", "y3innXxcVmkbbIaqb8k1", "W4hdVCkFgsXAeIzRiaSPlqnZW7pdU8kfWPBcRa", "W4pcNYbbWOa", "W54EjSkXFG", "W75NnhnoW6S", "rLXREH3dPfO", "cSozWQm", "uCkvrCksW78", "W68dW4xcQHVdVvnYW7O", "ue7dRLZcSIFcUCkGWPb1W7m", "ymk4qmkk", "WO7dSGm9", "W4BdMZjHaG", "WR3cLSk/cgi", "W6BcJb1AWRu", "zNf1Bu7dOtCDWQvI", "ACo+a8o9qq", "EN9G", "pmknW7nrW6S", "W7OJe8kxsdm", "FYKrmtK", "WQzJW57cN8o0W4m", "W6TJlLTaW7lcI8oSW6hdICoZWONdICkDWRBcJG7cI8k1", "aSkqv8kSFx5O", "WRJdGXz2", "W4xcTZ5BWOTn", "W43cHYDsWRW", "WPGrBSkxW4W", "W5KObMvEWO3dOSk2", "DSk4wSkpW7zM", "AJ4wCXJdRCoc", "56E+5QE25PAS5lYR54I45AAH6lAL", "W6ZdPmoH", "pmkPW7roW68LWPZcQvHHW5JcKSkuW48jga", "WOKeWRddImoTz38", "W4dcUZbAWPLEWQe5DmoMWO3dQZ/cVmkmFe91oSotW4jKBSku", "wSooWQddLW", "wMVcLLywb8kPW51S", "W5Lte1m", "jvVKUjNLIRhLRRBMI4K", "WO3dTGmqvZ3cJMpdGmoBoeRcRmkFWPVcVXHgaG", "dtFcKq", "WRHOW6Xfza", "6lEy56AO57QS5P+g6l6s5P+r", "5y2N6AcK5y60n8ox", "W4JdVtH2wq", "tSkEW78", "WQ5EbhVdMG", "w8oKWRDrzW", "DGe8rGm", "W4mToNHq", "umoFfW", "gbCMhbe", "W4pcVZb3", "77Y66l2c6z+T5RAN", "WRRdGXb6WR1fWQe", "5y6A6Ak/5y+jeGO", "W7G6ehXeWPxdV8k2", "ECoTsSkO", "x8k7W4LTia", "u8oCWRm", "WPa7qSkvW5S", "W43dT8kqgG1hdW", "WR1PW54", "WOpdOYDeWRbeWRzHsmkrW5m", "A8kmtty3", "56E25Qsr5Pwh5l2454IB5AwI6lE1", "jMzNgSkx", "W60dW4pcPG", "oG3cHmkFW4q", "WRhdHXfKWPrnWRa", "W4LNWPKj", "tgK7iGm", "4P2cWQXeWRNcRmkktZmzWPJNL6BMIidNR4JLKB/MLQtPG6VLIjhKUitPLi/ORQTv", "b13cO8oTc8kx", "zIGwAqRdVSoPW4X/", "xmoqWQFdRq", "WPOoWRhdHmkC", "zd4mBa", "xx3cHuKTj8kXW55IW7elqr3dRq47", "rfhdNCozsW", "ENvPA1FdUG", "WOSzWQFdQmk5EMX8WRTnlCkuWP0t", "WQxcOCkEk3K", "W4pdS8kdeZDfeZfYnHaQgGvJ", "mSkSWQS", "eIxcMmkFW4/cRq", "uSokWRRdKrVdRG", "W5vjWOmlWPK", "s8ofWQhdPCorW5hcOSkAmG", "sCooWR3dGG", "m8kCACk4ua", "WOVdOYm9rslcP3NdH8oU", "sCoLn8oyra", "m2XN", "W5hdS8kcftXmdcq", "5l+b5Aw75y6r5yQ+5yQ6776C", "t8odDmkWWOS", "sMNdRCoNbZOlhG", "s3BdI0lcHq", "uSkyAb4NW7NdTmkAAbddIZBdJmoZnmoHlmojxG", "WRVcTdO", "DrdcUMLY", "CCkZAHG3", "wSor5lUE5yMG5A655OIb", "sxfRA0ZdMryf", "WP/dOCkRi8kJ", "ztiFtqRdRq", "W7zdhZ7dS8kO", "W4nul1jZ", "W6fuhGBdRmk7", "WOWtxmkIW7K", "BbqwDG4", "WPmbWQJdRG", "6lsG56EB5B+f6iI66l++5P+o", "wCoaWRddNJ4", "v8oPWP7cIwmt", "WRRdSsuQEG", "WQNcVSkua2Sl", "uvPmomoc", "yti8WPe", "AwngweW", "WQ8gWOJdSwi", "yIKxtqRdRq", "W5TFWOmNWRO", "W5zdcI7dRCk5W5q", "uuvJBh0", "W5xcQYPtWPzo", "zgW1Eq", "qgfHz2a", "c0hcSSomdCkuEre", "WPSbWRFdPNNcO8obl8oTWOhcOmoW", "x8omWP7cGLC", "FhxdRmoW", "WQJcRCkslW", "WQhcMrvnW4K", "WO4XWORdIL4", "W4FdUcrAfq", "WQlcSYHrW7BdJX0Ph8kF", "W7i+bmkBvW", "ow9Vmmkq", "W63dUmoH", "W7mnW6pcQGi", "W5vlW6jvWP0", "mCkJWQ/dQSoOWONcJSk9WR5A", "W4LjW7THWRtcImkV", "WPLSbwBdUW", "wCoLWQu", "F1yuldG", "jEIVPoAWVEwLQ+I1R8o44P2YEEAwTowsVow7OoAwRUAnIq", "tSopkSojr8o0", "WQ7dHXfIWPLE", "WQpdUqyiwa", "bttdMCoEWPFcGSo5W6Hck8kLW4LqcKRcUsddH8krWP90smodrrm2WRSTyKyqWOa5W6PBWPrzW5BdK8oyW5FdMSoCpSoIW6SUvCktySkHnNJcJbX9jZiZkhnFgwyXW7RdPmkCWPVdGqyrW6BcOCkgWP3dRbvXWO/cV8kviSoLWOe4W5TCW63dUCk+W4VcPf8+rWxcGxitfCoRFSonW63dGCkxW67dMwftvq58W73dQmoUW7T4ACoeWQdcVIZdKgedWRJdGSolfWGnW5CkmcRdHq", "5BAw6k2p572l5RAg5Rcb", "mNbN", "FMNdU8o8oI8GcCkMWPZcMmk+r8k6W6BcVW", "4OcJW5FLTApMIjVNH7VVVyROHyNLI73MLPBOJ4RVVQy", "W6bhgcO", "5AsN776fkEEKKEANLEwmMUMgTqKP776I", "zM9UbmoHpbaGW6ndm8oIWOyVW5r3oMmq", "WRLLW6TcBL4", "WOhcIbPNW4i", "yspPOOBLJONLP5pOTixcLG", "ogz0e8kdvmotWPdcTCkZFSo9v2ajW5G7WOVcLa", "rWCaWRZdLW", "oSkJWQNdPmoF", "DSo3WR3dJae", "6lw456sP5OUH54EH6l6W5PY8", "77Y06l2P6z+t5REl", "WROLWPe", "Fb7cLL1tWRxcQg/cOb3cMchdG8oxWQW", "WO/dSSksl8oqWQpdLq", "WQiuWQRdOepcQCoJeCoPWPm", "W7ZdLsX0cG", "cSkbW6y", "BSk9A8kZW7bLWOVcOZVcIG/dSZ8IWOxdN8kTWPhdQCoHW5G", "WPJdVHe2qW", "FxxdVmoHjt4XgSk7WPZcHa", "5Rka5PYW5y+W56E/5QsL55It5l2Y54Qt77+e", "W4q8aCkksI5UWP8Fc8ktW41XWRXSosqZpbWp", "W7BdLt9KBMNcGCok", "AxWy", "5y6/5ykd6AkY5RoF5RMT5lUW5yMSW6jR", "tN9gvwi", "WOVdOWCWuW", "qColkSo5uSoOW4POCgHV", "W5bhkcddTW", "W7ldRoMHOowoMowKQEI1ICkE", "W5jPWPC", "dSkEtmkV", "WPhdMWrDWQ0", "EmoRWQC", "W6ZdTSoYB8oN", "WPOtWQhdPCkByxLRWOXgnmkUWOCwgCkh", "8lYEVfvP56Y557Mz", "W4jaW6D9WQC", "F+IVToAXGUwsKUw5TGa", "waCCWQZdGW", "zCo0WRddLCoTWRNcP8kz", "tSouWQhdV8owW5NcPq", "r1HTx3FdTL3cICk3eJaNW5VdUZhdHmkwWRu0rCkfDd7cJSoS", "W57dO8oPz8oQWRHPWOOrDG", "vSo2yCk+WPm", "W7FWP5cMWQVOV7BOOOVNUB3MN6ZcKW", "cCkjWP7dICo1W6BcUmkg", "bZiClJfcqmoiW5hdJSoX", "jCk2WQJdK8ot", "sL3cNwW/", "W6ddP8o2rCoR", "msbkBxNdOmoFaZigaSkktq", "ESoTumk3WPhcPG", "W5z3lL9R", "FLbPEu3dRG", "jmkRWRRdQCosWPRcSmk+WRmD", "k2jZnmkRra", "umo7WP/cJvSCW5mFWPddGaldOd9QWPfolSkUFCo+BCk7EXpcUq", "WRW3WR3dJCkr", "4P+oWPOlDwHiW5RdNHVdPxZdISozWPhcJ8k4W4RdLZ8LW7xcP8of5zYL5AEu55g05O6v5yYK5zo35BMU5PEH6yoQ5yU25lUt6zsb6kY9k+kDGcO", "W57dSCo2qCoUWQzx", "xw7dHgJcKW", "W68IbCkByZHSWRSd", "wc0nWRddUG", "FCkxwmkbW70", "vNNcHfCtnmk1", "vWxcMmomga", "nNZcHSoZia", "yImFtXq", "xCkfW4fdmq", "WQ1BdKBdRuRdPmkHmCo9e8o3tSoko8kMWPhcT8kyca", "wCkFqY84W77dHSksFW7dIZBdJmoZlSoZemoqrSoqWPVcJLpdJSov56At5QE+jIi", "W7KdW4xcPINdPNH+W6VdSG", "WQDFeKZdHLa", "56Ei5QsE55U7EUkbLG", "vejiw3ddLYW", "bcxcGSkA", "fKdcL8ojamkvEa", "CNfZBq", "s3xcMq", "WPaFD8k5W7O", "jmkTWPddQSop", "pmkKW6DbW7yvWRFcPvXS", "EMJdUSoyoJW", "ztqrDbxdR8oWW5HMtSkf", "W6eXW5NcOGe", "qCkACHm+W70", "DwvCiCo4lre", "WRRdGXb6WQPlWQzGwmksW5pdP8oYdSofC0/dNbP+gW", "W4a6eG", "W7mrW5RcTYW", "W5DfW698WRdcI8kvW7qKxW", "WQdcO8kb", "WRFcSJD5W6NdMW", "W4u9ax55W47cVCo8nNvgWQOppComEXldUCoQtt4QDmoSW7xcH8oJWQudW6BdQG", "xM7cHwKbna", "lr/dKNPsWQJcSZxcOXK", "W65jbsu", "WRBcTcnxW7VdIa", "m2X0k8khuSopWQdcQCkBx8onzhy"], ...function () {
      return [...["W6JdLqv+", "WRdcIvqJjtddN8o1lSk0xCo7W7G", "xgldUmoCja", "euBcTSoohCkuqXxcVZm", "DSkOsr87", "W6LdhZJdVSk7W4m", "mmkNWQNdI8owWORcISk6WQ9PFCksWQL+B8kqW40fW4e", "WOGnWQVdR8kQ", "WRTLW6f1DvlcMCoH", "kxqqDbddPSouWPzatSkvW7XCWOXaiImjWOpcRSkuW6ZcOW", "mhj5omkg", "4P6qWOlMNyJOG6RMRPBNOytLP5hNKjur", "WO7dTSkucSk6WQtdGmo9W6PAc0KisConsCoyWRVdTKjdnui", "vCociColx8oVW6D1Dgm", "W5TOWPm", "mSkSWR4", "AhVdOCoH", "Dt4wDrxdVG", "Bfv2s1u", "nM1KoSkA", "kqJcKSkbW5u", "q1ZdVfVcUGa", "q8kpqWC4W74", "lSkSW69JW7qcWPy", "W7K5gSkZxdO", "qCkEEHiJW7xdSG", "W6PwjdZdSa", "jCkRW6zfW6Ks", "W5DXfatdKa", "WP8jWQxdQSki", "W6WqW4xcIJFdSG", "W6TEW6f1WRZcGq", "CdOmDa", "zCoOWOjqrG", "WRHOeh/dTq", "vxGCkx0", "WPSvWQlcRCoG", "W5PPWP4AWQRcNe7cVWpdVCoKDM3dT8oBt3/dKG", "W6VdU+MJI+wpOUwMQ+I2Mxu", "Bmo5WQ3dUYy", "W6itognC", "oNTPkW", "xCkFW7b5jty", "uSkyW7y", "W7OxW5y", "DYKmEHZdJSocW4PX", "jmk2WQ/dRSozWPNcHSkVWQi", "BZWHWP4", "FMRdUmo5idGhd8kMWPBcMmo1yCkGW7RcPxFcKgT8DHmBpsFdUCorW5/cKgu", "W4H0ir7dNq", "wSkwW6vQ", "uSo7WPNcGq", "uCkvFsq4", "W6VdLb91BNq", "WOXdnx7dUa", "WQHpdNNdNu3dQ8kSc8oncSo9vq", "CximmqpcTSkDpcyf", "ug9ExgzUqG", "W60nW5NcOaddULj4W5NdSSorW4ddIH96rCo8lq", "r1HTx2ddUfO", "qCkEBbSWW7pdPq", "uCo/WPNcRweoW5mnWP7dLG", "WOidBSklW6q", "W6zpfGBdRmk7", "5y2V5ygC5BUv6lY66l+055MV5lUX5yMmW5RcRa", "WPmjWQBdOgJcPSodfq", "WRJcQcO", "WP7cRcXTW5y", "WPepWQi", "W4iPnmkVyW", "ASoJtCk7WPZcRrqNk8ozWOT9W6uBnCocACoTEYe", "n2vVbCky", "WPGsWRFdHLxcOa", "vSo5WOhdG8ot", "W5hdVCkIcHPCeIy", "kSkSW7LuW74u", "WRhdKqu", "Bg9Po8oHlXa", "ymoln8olbCkO", "qM7dJMJcOG", "WRK2WRxdMCkE", "xCkFwSkQW6O", "CSk4wmkEW7W", "E3f3", "yhPQcSo1irK3WRG", "a0pcTSop", "CN97", "WRNdJSkLeCk9", "CCozWRFdQSo2", "WQ82WRZdHM8", "uSoaWQddGGRdTf3dPMlcPSk+haKy", "W4hcSIT5WOO", "emkzFmkDcSkSWP9cwhDBW7FdVa", "W5dcTtfXWOe", "BmkTqmkBW6OXW6ldRsxcIctdTZyXWPldJ8kmWPVdQ8kfW5jOubldOmozW5LUWPpcHq", "W4zfW7jFWQBcIa", "oSkNWQ7dTmowWPNcIG", "WQ3LTQxPOQVLJkZdTey", "sxNcHLeximkK", "kCk3W6DTW6Gb", "xSoqWR/dV8oA", "W70XeSktzZjU", "WRbPW4pcJCoCW5HKWORcVmoVWPpcH3hcSsPWu2y", "c8khW6FcVSklWOBcVSk+mCoYAW0", "BbhcSuv3", "5P2o5AkA5yA85yAY6zsB5y+j6yEt6lAK6l+I56Aa5QsN", "vcNcL1vO", "BmoQWOddPcBdG3ldOfxcI8kFpc0/omolW7u", "w8oEWRFdQq", "W4VcSsm", "x8kCW7vGeG", "badcVHVdPe3dV8kYWQjpW4eeWQW", "tvz4", "WQBdKq9NWP0", "qCkEBWi9W6q", "Bwv9", "y8o+v8kkWPa", "WRVcRCkpoG", "W6ZdVazBf8kq", "t8o/WQfqwmoLWRWsWPm", "5lQS5yQ55yQC5AwA5yQs44kc", "W4D5W7PtWPi", "vCoqWQm", "z3OffZNcVW", "WRNcSaDwW7a", "uWSiqJC", "5PY55Qkd5OUH54EH5lUU", "yCkRrSkMW6PS", "vSkptCkMW5a", "CMfVbSoHjra", "qmodpSoJqmo7", "aeBcQ8oTc8kx", "yK9Fi8oX", "WO0bWQhdMflcPSoCba", "W5nnW7X3WQFcU8kJW7m/", "tmkwW79VcY8", "hhL4fSku", "p8kSW7joW74cWQZcS0a4", "W6OM5lMw5yMl5AAP6lAskG", "vmkEAdSWW6tdPCkaEsldPdBdTSo3mSo0kSouxq", "W6PNkhP+W6FcNCoSW7ZdU8o3WQBdTSkwWQ3cItJcJCk1iCon", "tc0cWRldSa", "W5qRchjhW6pcNmo6W6FcPCotWPJdUmkD", "r8oynSoJqmo7", "bIBcPCk1W6u", "77Y05AEN5yMI44kC", "W6xdTSoYBq", "Dxinks8", "W5viWRCoWQK", "rHWAWPBdOG", "WRLFd17dNKW", "mCkYz8kywq", "WRNcTcO", "wmo1WPO", "77+I6l656z+e5REh", "W6xdNXHCFxtcISoEg8keFSoFW77cGCkyWRJdL8oNma", "wmooWQBdMZddTexdJgtcMmkIebKffCoBW5lcQWhcQa", "cmkEqG", "W4mvW6BcRYe", "W4na6Agd5y2D5OI25yMy776I6i+h5BYo44oW", "W7ldU8oVB8oQ", "CNP2iCo0", "bCkbCCkGrNPqpLy5", "W70XeSktCc97WRCbjmk3W4D2WQfHcsmumGy", "zCkIEHKK", "WQ8UWPpdRmkl", "W7JcNWffWR1eWQC4ECoxWOK", "gmk1WOFcHeCsW48hWPddLG", "5O+g56sQ57Uu5P2thSkVtKhdRd7dMSkjFmoP", "A8oRWPRdN8op", "W5xcUZr6WPLjWQe", "rLa1csC", "DXtcHq", "wSo1WOO", "rbuzWPpdUG", "v3pcKa", "W4arW5hcTXu", "jCkNWQ7dSSoBWOO", "zM90hCob", "ySo1WPNcO2i", "WPxdQcLeWQjTWOWA", "W6pdVSo8qCo8WRe", "W5FdV8oTzCod", "jmoWW4OrWRvwW53dTa", "v03dI8oYcW", "B8kwr8kDW64", "W40ggCk8wa", "Edi4WPO", "W5LJWOqUWOVcKe/cTIhdRW", "W6ldUmoOB8oUWQi", "W5nnW6fM", "W7fpca", "dEobI+MyTEAxTUAXJEA5VUMzJ+ocQos7QEwkIUI8R+MEMq", "WRRdGXb6WQPAWRPJBSkwW47dLSo/d8oB", "v3rwChS", "W4ddOmkdmXTs", "uI8doa", "5PY55Qkd57II5P+I5lUU", "WOFdIr4syG", "AZ4lzW3dOG", "WQ/dLHb+WPTnWRX1sa", "77Yl6l6d6z2L5Rwh", "W5xcVYPYWPDh", "WRZcOmkhigW/W5vhWRJdN8oR", "qKrauKm", "wmoQWQDy", "txNcHvCBpmk+", "W4jzW6zXWQhcHSkLW60fdG", "W68oW5JcQdy", "mhfPomkltG", "5P6z5Qcc5B2/6iUR5lUm", "wmooWQBdMZddTexdJgtcMmkGhGSo", "WP8pWQhdSG", "WPLNrW", "5PYE5QkR6zst5As35lQA", "umo7WP/cJvSnW4WnWPFdHYNdIZ9QWPC", "W4dcUZbEW41zWRa", "WRRdGXb6WQPlWQzGwmksW5pdP8oYdSofC0/dNbP+g07dTSobW4a", "DwymmG", "zhfPAeZdVW", "WRjNW5/cH8ohW4nRWP7cKCorWO3cG1hcRa", "wmkwW6nMoZBdGIBdIYldI3bqWQqPWRm", "qSo7WP7cI0ukW4eEWP0", "WP3cPmojsLWfsGLNnaWgeq", "4OoiW7VLTR/MIktNHixLJzpKURdMLBdOJ4xKUBX3tJS", "WORdUmkse8kjWRxdTSoVW7vGcW", "eZhcLW", "W4xcStbIWPrpWPmRDmocWO8", "W7xdNCkIkG", "4P6MWRpNPRRMPzhLPiFOTAZVV7e", "WOnCW6XCBW", "o8kNWRpdOmodWPy", "DSo5WOTmvW", "W67dRoEjKoAbJ+ACSUEEIE++Pa", "BMJcKrW", "WOeuWRddHSk0DwW", "W77dPHjCoCkqW5ldR2HG", "fSktWRtdOmo1", "W6DZWOKOWQS", "lwjUo8kntq", "wLRcTSodf8kMCG", "fqOVgbhcPbW", "s8onemohyW", "z8ofe8o7rG", "WQDRW6i", "zZG7WPJdH8kl", "WP5vW7ldRra", "W4PnW6v3", "l8kQW7ff", "uSogjCoar8opW4rVtg9S", "W6rYlMDsWRZdGCkWW7tdUmoQW5FdSSowWQ7cMuNcH8k0kSknkSkLkW", "nCkRWQFdISoeWPK", "W6nZlLfnW6FcIq", "xSoIWQL6wCoMWRa", "WQvLW6Hd", "WOddSSkha8kaWQldKG", "WRpcSJu", "uf/dGConALT2WPFcTmoHWQqgW6FcNNFdNSotW4pcUmkg", "eMX6nSkotmoxW4ZdTmouaCkokwWRW4m9WORcN8o/vchcJ8oCW7GGWOW6W6KgW61AWPhcVH0", "ytOxBsBdUmogW5b8DmkhW7HxWPO", "sg3cH2iy", "yCkAW7bGaqtdKW", "wSkyW79Sic3dJtldPHZdNxH3WQWNWReqWPpcTxS", "cCkuvSkYvhz5", "xMLd", "W7NdNZTGaG", "W7xdLCoEDCoC", "eSklWQRdVSoT", "WOieWRldPCk0", "WPi2wCkB", "WOTRW4ZcGCo9W6vRWOpcNSoHWOZcUvBcQG", "tSovWOBdGJS", "gLNcU8ompW", "BLddOuFcOItcRmkZWOvTW7m", "W6hdObi", "A1hdG8onqx99WOK", "sv0Bkda", "W6GsW4tcGYVdGv1SW7q", "xSkEBWqWW7FdPq", "t0XY", "5P6Q5Qkl6zAs5AEh5lQc", "sSooWQFdNsBdOG", "WPO4sG", "iSkKW7Hf", "WPWaWQRdPmk3Eq", "W4BdVCkFhqLb", "cCkcqG", "W4hcVZz7WQDcWQSNzq", "W51FWPeiWPO", "v8kuCHavW7/dRSkusWldPIVdS8o7j8oPc8ouxSo8", "WP8jWR/dHLxcOa", "W6fJkwraW6hcIW", "W4HdW68", "ugXPyLi", "5P6N5Qcn5OUN54A75lU0", "smoMu8kMWOa", "5RkD56wg5Qoc", "W43cUHToWPfeWOiRCSokWQldLrlcVCkmDLidCmkoWPhMMklLKkFPG6dNNkyWBCoVW6ldHmo9WOnEFLhdG8oa77+66BIV6kYM5lIw5O6X6yoS", "qeLSDKFdG0/cICk1", "WOtcR8kXjLq", "W6FdJSo/rSob", "vmkuEb8a", "WPq+v8k3W5OB", "u1BdQ1C", "rZqsWPldUa", "FCo4uCk1WRBcPrmMfa", "WQzJW53cHSo5W5rV", "zhv0Eu/dPG", "vMDqFG", "W6OM56+t5yUA5AAP6lAskG", "bCkTW7fgW5i", "zgmRoZNcS8kImcCf", "g0RcP8oSmG", "uwLaEG", "tCoBWRxdKqRdLvddHh/cTa", "WQxcUJ9vW7FdJXeNbSkB", "W6jLW6rtWOC", "v8kzW7vUha", "W6vDW5HlWPS", "5P2q5QoD5yY36iUZ5lQE", "yJGmuaG", "yhBdHvRcUa", "EtaZWPxdHG", "WONdVbm5", "d8khW5y", "4P2jmXG/pSkqW5SQifhPGlpLI67KUQhPL5dORke/", "cuRcQmot", "u8ooWR3dMdVdR1ddIw8", "Cmk2z8kFW6TIWQpcPq", "zCouWONcTwi", "F8koEaqd", "Fb7cLLGpWQRcSa", "FIv0Ea", "W79Qm3re", "5QYG5OQ35Awm5P2Y5l6A", "WPbuW4hcV8o8", "lCk1W6vjW78", "xfZdVf3cTXpcQa", "ohBcOSo4aq", "WQKWsmkoW6WexmoTWOjKq8ovbmkYWObCW4BdKCk7iq", "WRJcO8k1oMOfW5bv", "WOZdSGuXAsJcMgpdNCoPpgxcImkFWORcQrHFcCoJW4/cOCosW73dNa", "agrLmCk3yq", "W5tcS+s6JowlVEwKH+I1Ro+/P+AYSEAEVEImREwoNUwiIUs4GEwjM8kGWOG", "mmkfWPZdICoc", "irpcM8kWW6S", "cdBcK8kD", "wmogWRJdGGRdTa", "ySoJra", "WONcPKa6aa", "W4XNWP4zWOhcNG", "zxL9Aq", "W6hdKG1Ixxq", "WO8rWRtdICk8", "WOlcPIGYrItcTgBcGmk0EHtdIG", "W41rn1XQ", "ybGsWRBdPW", "WRxcQCkqaLi", "sSoqWR3dQmoqW5S", "nubppmk3", "zNLP", "W5TNkrJdMSkYW4u/WRO5fq", "WQ5idMBdGv8", "WP7dOqi5", "WP9sW6RcUCoQ", "DLxdH8oKrG", "W4RcVY14WQXdWRaMzq", "s8oeWRi", "WOpdLG18WPbeWPHYqCks", "77+h6l+I6z285RwS", "W4FdHIzqna", "uCoFWQddQConW4i", "AmoTuCkXWOFcQHuTca", "WO8fWRBdVKRcSW", "W74dW4pcOJBdH112W7hdG8orW4tdOXm", "ASoTv8k9", "x8oFWQtdMGO", "W6NdRGft", "mCkJWQ/dQSoOWORcNCkSWR53B8knWP5PEq", "eK7cO8obfCkdwapcO2C", "uCoHqSk3WR3cKbSUcCoxWPrdW4ia", "rvBdML7cPHhcV8kcWOvZW6u", "CZOwAY3dS8oxW5W", "5P6D5QcB5y+l6iU15lIg", "noAER+I8HEELU+ALOUAkLUEgU+ISLEw9N8o977+kDq", "AdW7WRNdKSkqWR/dRGVcVmogW48", "WPefWQVdRflcRW", "Fr3cUMbZ", "wxpcG1aEnSkhW4X9W4SD", "WR/cQCks", "W7NdOcbcamkBW6BdGgH0EG", "DH7cKwnBWR7cOq", "DCoKWP/dRCoV", "W45iW5DkWRZcGCkmW6i+b8kMW4ZcQ8olWOziWR3cICobyCkgzInl56si5QEB5QMT5B2zWQlPUOBOR7FOH7RLIR/NPQdMPji", "WQPwg0q", "umo2WOlcJ3y", "WPOaWRFdQ8kmBxT8", "rmo7WOpcHgSq", "WPRdTSkia8kkWR0", "WQ7dGWXZWPPh", "56As5Qso5PAW5lYd54Ql5OIW5yIP", "W6OM6AcR5yY85OQi5yIO77Yg6i2A5B2T44kE", "W6SlW43cIJFdSG", "auFcSmosoCke", "WOBdRCk/imkJ", "WQVdLHSeBG", "WQ1LW7DlxKFcISoMggOuWQ98mW", "AgzYjSoT", "W6JdUCoIACo3", "WOpdTCkRcmkZ", "W4G7b0n5WPm", "uCkuAam9W7xdL8ksEqBdPG", "e8kXW7PlW74iWR7cPvH+", "WRZcTs5yW6/dMda1", "vwnqvZX5uW", "W70XeSktCc97WRCbjmk1W4LKWQO", "CCkuFZ08", "FmkcW7nAbW", "r8kQzCk8W5m", "yCooWRJdKqddI0xdLxK", "W6VdRGDFl8kmW7xdQMDyB8oCWQhdKa", "WOBdVba", "WOFdTGqVvY7cJG", "WO8eWP/dJvq", "pUENVEAMOUEyRUAWMUAEQowLJUwjGCkP", "BXRcKxTPWQ3cPxlcPGS", "vvJdU08", "W7fuaa", "rSolmmop", "WRHodKldNf/dRmkUjG", "eY3cKCkvW4xcPmkdWQ0yFq", "WPVdVdO3uW", "Fc/cV8oZFW", "W6HdaIZdQ8k0", "WOqfWPVdMmkXEK14WPTfh8kkWPidcmkqWPyxW6G", "wmkwW6nMoYpdKcBdIq7dM0PnWQSPWQShWPxcTNJcGW", "t8onWRJcHKO", "vMLPi8ok", "aSkqv8kSAMv9je4srIiVWOy", "r1HTx3FdO0/cICk1pJyDW5hdSdhdHSkSWOm7vmklwti", "W5yoW5BcSYhdPKHEW6/dO8o1W4JdQWv0rmoBbZq8WQ8", "dCkzW6dcHfVcTLhdP3dcKmkhgq", "W7JdVrK", "y8oNWRjnu8oXWQe1WPOgWRZdO0RcSCoxx8kjWPlcO8khrG", "tSkcW6jJ", "W5DjW6z2WPVcGmk+W6OQeW", "6ls356sO6zsi5Aw76l+U5P2a", "nsqO", "W67dOXXxhSkkW4ldPNT0DSosWQG", "WQbFf0ddMG", "W6ZdVWvEfq", "ugLazG", "WQBdJtz6WRm", "W5yHlSkpza", "5yYE6Acu5yYN", "W6TaWOmQWOS", "fCkqW4D4W5G", "WRVdHXzFW4bzWQe", "yCogWRRdNXVdLKxdL2VcQSkJ", "evVcO8ojfSkxDqtcRG", "Bmo7WP/dGdy", "vfFdRa", "5y+z6yEf6k+U5PMgWR11sg7cQJ9+WQ/dRxC", "u3zuvM0", "WQ52W7DRCLq", "fSkEWQBdUmowW5RcUmotgCoaxG4QagyZkGuqWRlcRmkjd1dcKxnk", "wSospmows8oKW5DInh5WW5VdLmksW4hdN8omW60dWPldO37dNSk2W7OeWPHMFaFdR0BdNSkNWRddIG", "W7BdVSoGzq", "BmoZWQZcT0C", "cSozWQy", "xSoIWQL0rCoL", "uw3cK1eI", "WPapWQhdRG", "x8kTtCkBW7W2", "W4tdOSkbnWW", "W6uSdq", "rLhdGCooqvK", "4P6MWRmqouibW55JW4dcUUs9QowfN+wmUoAwIUAFOoISO++9VEE8K+wXVEw9UEIKR+wmLoAxG+++Lq", "vmoEWRq", "zmomWPtcRu0", "fCksWO7dPCo9", "AJDLo8ov", "AxWllI/cQSkxgJWqgSk9qSk6", "6lEJ56wm6zEU5AsS6l685P2l", "W7uA6Ao65y+95AAd6lsDWQu", "WRddJqu", "WOOaWRddOq", "z2TOjCoFkqyGW75Xn8onWQiVW4vHoNOBWQWQlSklW7uT", "vxZdT8omAG", "ELddI0VcOa", "yhv1F0RdVr0", "uLJdOxNcTWdcQmkZWO1UW6C", "fCkNt8kyrW", "W6jhhIBdGmk0W4KGWQy", "Dv5zoCon", "fSkuvSk0wwu", "WQ1peKJdHLhdQSkMfSog", "W4WHW6pcHqm", "8lAPOwtLT6tMTR/MSj4", "WOi2xSkrW6ay", "DGJcHq", "w8kfW6dcV8kn", "776n6l2p6z6g5Rwl", "WQXFcgpcH0VdSq", "cIVcN8kv", "vgDwCLz4rSoGW4xdNCoPWQiPW5JcOSkVWO/cM8kFka", "EHJcLNLmWRdcSg/cTGVcPd7dGCosWQTgsCo5WRW", "WPRdOr4MuWRcHh7dKSoZl3tcM8kxWOW", "W6ddQGzbeCkzW7e", "W6FdLSkakqO", "FSk5WQzCWQOAW4FcUbHXWOJcMSoh", "W61oWRfpW5VdHq", "s8ofnW", "W4RcVZq", "56Ew5Qw25Pws5l2m54Mt5AEO6lEH", "wvhdNW", "WOKbWRBdOglcOSoAeCoWWQZcUSoOcG", "5yI+5l6B5RoP5RMZ", "56wZ5Qsl5Pwa5lYH54Qh5OUJ5yQ/", "5P6z5Qcc57QS5P+g5lUm", "a8kus8kuqhH4", "WRK+E8kDW5G"], ...function () {
        return ["lSkSW69TW6Gb", "DCopWQdcTuG8W7qLWQ/dTINdQWrcWRD4", "FmoPumkPWRtcTG", "x8ktFXif", "xmkCxCkmW60", "mCkJWQ/dQSoOWOZcJSkGWRv3F8knWOP1ECk8W40jW4aQ", "uCkszJq+W7tdPq", "AcxORkBPGRROVR/LJkJPH5pLOiNLHy7NP4VMPjFKVk3NIQW/WOJLKzpLHl/MRRROViBOO7RdIq", "WP7dSGq3FY0", "qvJdQ33cOHxcV8k1", "Agay", "fu7cUmou", "x8kuEW", "BvVcPvez", "B3VdUSoMla", "W63dMaz1F3q", "WPG2qmkF", "FMRdUmo5idGhd8kMWPBcMmo1C8o+W6lcVdVdNMvYDG1tpgJdOmoaW5FdNJi0W5hdKG", "W4lcRdzBWOTn", "vCkABHOoW6ddR8kduHtdVsJdHmo9nW", "WQP3W7zpCKFcUmoHeLiDWOPMnmoL", "WR9LW7znuKFcISoHbKy", "W78ZW7hcJJq", "BI8NWRldGmke", "vuddN8ogsW", "WOW/amk5W6DqvSoK", "v3NcGueE", "W4SOb2nvWOddS8kGmuvwWRSElSoCCW", "WPuuWRhdU1xdVCkbx8o4WPdcUSk1eXxdGmoeW63dNCkfi8ofxCk9j8kZoCkjEtpdImoVu8oyWQq", "dSk8v8k2yq", "Ade8WPRdNCkx", "W70dW4tcRbFdUKLTW7ZdTSo2W5/dTq", "44cH5lQv5lQt6lsi5yYH", "qCkltWCs", "WP01WQFdRCkC", "yh0C", "WO/cQJL8W5a", "ag5HnmkhCSoxWO3cPCkvxmo9DxC", "W6pdIJHXB2VcO8oehmkX", "WP9FW77cQCo8", "WQDvgW", "6lEo5y2G5Psg5PsV", "W5NcUSouACoPWRnwWO4tkmotq8oQW4a", "ChL/", "BmoeWObT", "WQ1LW7DlxKpcH8o0hueNWRj9iSo0", "W4FdSmkqjXe", "W67dNWj3AgG", "qCoYWOJcHwGoW6WdWO3dHXpdJtq", "yCk3v8kzW6b7WRK", "W5JcPSowvCovW6pcKCk6WReWsrPBg8kubW", "W7aZW5NcNYC", "zSkXAGye", "l0fkhCkT", "pSkGW7nfW6KdWOe", "WRTwhuxdHNNdSSkPlCogeG", "wmkfW75M", "WR1Bef7dLW", "xetdM8oAxq43W5/cK8oWWR9fW5NdMxRdLmk1W4/cUSkoW4PZFK0cv8ouymkuehHYWOxcLq", "W6yrgLDq", "4P6XqmkIW65sWO/cMWpdRCoaWQhdVG9oW4/dK8k3W6hcIYlcJvhdSEwDPUwNKUErKEAnMowoTowsN+w4V+AvREMbVEwkH+s5JoMwLEIUNbRIN7ZdKW", "dchcMmkCW5tcQa", "W5rdm3bv", "W51VnKvj", "Aow9VowkNowlIEs8OEAZHoA7Qo+9Ua", "WPSjWR0", "W4yWW7pcGHBdINfEW43dMa", "5B+F5yMl5yIZ5l2o", "WOCpWQFdRmkTCg5Q", "WOLOm3ZdOx3dMSkydCoTjConEmoW", "wCobWOFdRComW53cH8kvomor", "iSk9W6znW5a", "WRRdGXb6WQPcWRP+va", "W61PgevJ", "B8opWR/cUeC", "vCoqWQFdR8ox", "W6CImLPL", "WONdOmkhfCkbWOBdGmoIW7rG", "zISvsr0", "zZiY", "WPxdGbnDWQ8", "r1vWxvO", "W7ldMX5XCxpcQ8omg8kK", "Dc8xArFdRCooW59R", "WQK6tmkrW4WUtCoIWOHVFSoNaSkH", "W4TEgvHI", "jmkNWQK", "FZG0WPpdPq", "5l2m5Aw35y+r5yUH5yIB772s", "5y6k5ygJ6Acj5RcA5RII5lQp5yMSW6hdHG", "xCo7WODyrCoPWPKDWPKc", "FSoUtmkWWOa", "tSofiW", "WRnBoKxdGq", "tSoPWR57FG", "W5nJWOmoWO/cLeu", "zCoCDSk9WPq", "uCo/WPNcRgujW4uFWO3dSGBdJXTQWObylSk3DG", "kuZdLICjW6VdSw3cSI7cJYddMG", "W6Xdds/dUSkUW5u", "cmk9r8kgta", "vLNdLCoNxvm", "xf3dQxtcVa", "yCoEACk1WP8", "FCoDWRFcJNu", "5PYy5Qc36zst5AwS5lIz", "v8kAW6LUbq", "W53dOCkObH0", "ec3cMa", "metcLCokhq", "W4H35OQq5AAS6iYE5B+Rda", "W74dW57cSW", "WPJdOSkvdW", "WQFcUInqW7xdKq", "W7C/bW", "l8kQW7TdW7Os", "yxiloW", "772S5P+X5B+o5OUr54AQ6zYr6kAD", "W65Qp0fS", "W7XwW4PWWP4", "WRHJW4pcJCoSW58", "qHJcS3Lk", "v8osmCoBxq", "W4SOb2nvWPZdVCk+pW", "w8oeWQhdNSoqW4pcPCkydSolwcGPbLC0cWqdWPy", "W7W1fmkZqdnUWRy", "WQzOWOi", "W6tdPCo0qCo8WRe", "amkquCkG", "W79Yo3beW5xcMSo+W6ddUW", "44cX5O+P56sL44cJ6k+F5yEF6i6z5yYSWP0okXpdM8oW", "W7buirJdTW", "W49IjXJdRa", "W5jJWP4AWPRcMW", "W6/dP8oUzCoz", "w8ouWRRdOa", "W65LW61BWRK", "W6HjcW", "WQzBda", "WQRdGW5IWPa", "yNyleN/cQ8kA", "sSoEmmoEqmkMWOa1EhzHWO3dGCkrW5pdG8kAW7zbWOFcTgFdLSoY", "W7TUp3jnW7xcOSoWW6hdVmoMWOVdPG", "z2TOjCoFoHq6W7LDmCo9WQuKW4jBoM8rWP0", "W7G8cCkBqsK", "wCo5WQf0rCoL", "o8kTWRO", "W547W5/cHqu", "WQfvfuu", "DxXUAu3dPIuzWQnWWO7dMY8", "iuNcMCowoG", "WOGaWRBdRCkhzMPWWOD3mSksWOyzcCk9WPebW6RdGq", "WOSfWRFdUe/cQmoa", "vfZdGulcKG", "WRjRdgRdGW", "W47dIHPFhq", "W7pdSSoIECoSWRm", "WQxcOSkck2aJW5G", "nM1ZoSkqva", "oIJdI8kWE2Koh8kMWP3dK8oOoCo2WQBcIMNdGtfxsvK4EgpdU8oWW6NdIJS8W4ldUZWZWPiABmoKiwJcU8kaW4KhW5tcRSo3fGzsamkrt1FcTNJdJSoYmmoZW7DrW7VdQwLLWRSEW7XKrCk/W6yZiwlcTe8gBSo+W7T0W543oW3cHcNdGCojbSkRWOLxWReZWP5utCkXq8osFeddHSoIWPJcJJdcS1DmW57cOZZcSLz8WQ/cKqRcGKhdTMTblePfvNyphNzmdgz+W7tcJCoCp8knoCooW5HUW44Kj10uW4KovGHOWO/dRmoZWP4", "W6TJlL8uW7xcMG", "W6jhhIBdGmkOW4C+WQGweYepl1GyW7BcMSkhzmkeWP44", "tZBcU1z3", "d8kFW6q", "DxHMFMldPG", "WOq2q8kEW4yr", "uSoaWRm", "W7/dQGjtaSkAW4ddUNLI", "vv9Zsui", "W4ZdVJH2Ba", "umopn8oBx8oO", "Aa3cLMjr", "W4tdNCkGorW", "WRJcVJ5hW7VdMZa", "W6OhW57cQW", "W6tdMX59q2JcGmoacG", "uMJcKKK7nW", "BSoVf8oKEq", "e8kPW7ruW74vWOFcJwDEW6VcG8kdW6GjbWS", "WRHPW4O", "WOpdVaq", "W4dcNrb1WQW", "5lMh5yUj5yME", "rCoQWPviCW", "qeLVxKhdTe/cJSk3dIPxW5JdPJFdNSoLW7WUrSksx3NcKCo0xGKnpwPtWO8j", "ACk8qCk6W7u", "WOmeWRFdS8k5C24", "x3vd", "WPa2x8kxW7yuq8oHWOK", "pwP6hmknrmot", "sXGTlr/dNmkqW5fbrCk0W7fYW5iPixiSW5JcOSkaW7q", "WPKbWRhdQG", "WRpLTAxOVkhMNBJcUmoQ", "W6vOkxjtW7i", "w1eYCwy", "reVdOW", "WQfOW4NcJ8o+W55KWOJcNG", "vvHSwxZdRL7cNW", "tfXSquNdSeS", "rmkFWRXOcG", "uhxdHSojWPddS8oSW65aFCo8WO8iwaJdTq", "lLLzgCky", "6lA76lYWWQa/5Awn5P2O5REK5RgH776S5P+H5Qk+5BEN57UR5P2Q6jgo5lMz772u6ysX5PwO56Et5QEHz3G", "r1HTx3FdV0hcL8k7", "W6GKeSkxqtPZWRGw", "Cmk4r8kaW5bV", "pwP6eSkrrW", "WQbal2ZdNq", "W4GSo2jo", "bSkyx8kcwNv5", "WOihWOVdRCkE", "WRldQtu+Fq", "6yoS55w/57Qp5y+/", "E2nG", "WRO4WOBdHgu", "iCkGW6ztW7ObWPy", "WQHveKJdK0W", "W4pdVSkEerO", "W5BcT+s4NEwlHUwNLoI3TCkb", "WOZdTSksbG", "uSolia", "CHtcKq", "W4pdS8kdeYbAca", "W6pdIHXzEa", "W68dW4xcQHVdOv1SW7tdJmopW4tdQGi", "WQzNW4pcJSo3W5O", "D27dVmoLoMfjvmkSWPJcLCkUFSkGWRVcOsJdNwbYAq", "w2HxENT+", "WQzFd1JdK1/dOa", "hmkRWPNdOSob", "CvCkecC", "awZcLSotda", "tmksW7v+bYC", "W6OnW5pcOG", "W6W1b8kFqJG", "4P+PWRlcLHSCFuKYwwhKVzNLHkhLJRZMLjRMNj3ORBlVVR/NV5dLS6RLViZOP6RLJ7JMLjNVVj8", "smoft8kDWOO", "E8oVWOdcLui", "pYNcL8kqW4xcK8k1WR0E", "x3pcMum2pmk+W4PpW48DstRdPqa5j8kpeGO", "W6JdUCo1ACo9WQi", "uKZdKmoshG", "bK7cPCob", "wCokWQddUG7dSKhdLN7cHSkGdZOoa8o3W5lcPWa", "WRlcIH93W7u", "imkJWRtdSW", "Amk2uW", "5yIU5AsW5yYk5B215BMPWRdINjZdKW", "yYKHWO/dGmozW6tcLGBcP8oxW4KyavVdPrO/W5JdIYpcMf/dKSoNW4jsW6noW4ZcHWpcI2mp", "dmkfuCkXrISZEeq9q2uXW5X5n8kEuSojW4jjAKazW44KWOPlax5LWQpcLmkT", "WOnWW6lcVCoY", "WOqHtSkyW7K", "WQtdSJ8rrq", "yNBdVSozxa", "dcVcKq", "kMLZcCk6", "WPJcJGfvW4O", "W6zpfGJdSmk4W4m", "WPv/ttO+W4tcPmkBeg9hWPWf", "WOVdUmkcaG", "xNpcKg4v", "WRZcPCki", "AZqc", "5PYh5Qgb5B2G6iMp5lQP", "W4HeW6T3WOe", "umoKWRq", "W4hdS8kfhW", "W75JkwjnW7i", "q1hdHSoE", "4OcwFEAjHEEfOos4TCkD", "5OUB54AL6ygM55+o", "cq3cKSkxeWKLW43dJ8k9", "zmoOCmkPWQJcSHuYgCo8WPHIW50/pCoirmkTjG", "th3cG0eab8kPW51S", "ESkWtdaM", "kSkKW6DnW4quWPlcRuzsW4/cG8kgW7Osda", "xMtKUi3LIzRLPPhOT6xdVa", "44cY5O2656w+44k/6k+e5yEu6iYy5y+mwMLNW4JdHCoA", "WRdcQt95W6NdMW", "toIUS+wZI+w8KowmM+s+V+ExTmkK", "WQfmW4pcP8oY", "u8keW7y", "ytOxBsBdQ8oqW5HGt8kOW71vWOT+isS", "ytCkBWS", "WPu4sCkF", "WQRcRCkui0CyW59bWOBdQCoRWRG8W6uhWRq", "EeJdICoDhq", "C8k4xCkF", "W4hcVZz7WQDyWQuJBSo4WO/dVGRcQmkxDa", "W58Og2PLWPK", "EhP3x1K", "rCoUWP/cIwOAW4KkWOa", "z8kRuCkkW61U", "poELL+ANOoEzPctIGAe", "WOjTcNldTW", "yNylfIVcRmklkIaWbmkUCCkSWRXSW6JcNwq", "WR9Bd0ddS0/dPmk6oW", "FrRcKh1LWQVcPw/cVsFcIsVdMSosWQ1e", "bSkcW7zOcXtdJq", "WOHRW6Tszf3cN8k4j0WiWQm", "W6yxW4pcGsJdTfS", "umoMWOpdSIi", "WPrBeeZdNxxdPmk4la", "FCohjCofvSopW4z9DW", "BtWNWPldRmkuWQRdJq/cUG", "amkuq8kGqh1O", "WO7dU8kjcmkx", "DetcS04x", "amkp566Q5yQg5OM/5yIz77YO6iYs5B6D5AAr5yMH44gV", "44g05lMD5lI56lEN5y+c", "EZWNWP7dNSkqWO/dMb7cQq", "WOCXWQZdR8k2Cq", "WQVcQCksaNKyW5TbWPNdT8o/WQ0EW6eCWQVdO1VcPq", "sSocWRrqua", "W4WbW6lcKqe", "W6HNlNy", "y2jR", "WPafWRBdUeFcOmol", "WQHBeNZdK0ZdOmk6nSombG", "uSovWOZdLmowW5JcJCkDoCoiyXKJb1GPitWvWOZcJCk1", "W7ldHCoUqCoD", "umoUWR1EqSoQ", "FrRcKh1LWQ3cTMpcTIFcMshdJmobWRS", "6lAk56w557Io5PYB6l2V5P+3", "WQPkkeRdGvpdICkHlmow", "4P6hgUADLUIdLUAVKEEHLUwMGEEtJN8", "kKzndCkw", "kSkKW6DnW4qsWOhcOu1sW5/cICkqW6Ke", "tmoevCkZWR4", "CxxdVW", "8y2QU8kL5BEu5Rwg5Rch", "EmonDmkOWOS", "W6RdQGf6rCknW6a", "6lAc56A46zw/5Aw46lY65PYP", "xL/dMW", "W45VWP4", "W44MewS", "wMeAkZ/cVCkDlruDe8kX", "W45dW6f8", "cIdcQCkJW4NcRSkAWRScjCktW5Hng1FcNtxdLSkAW44", "W4jnW7P/WORcN8kMW6iIhSkMW5NcRmoAWOW", "WRRcLG9/W68", "W4dcUZbsWPLEWQe", "WR3dKJz2WOzbWPL6qSkv", "ySk4rSkgW4z8WQZcTIZcLq", "C2j1qvddTq", "W73dPHS", "WQ3cVmkwiN0", "WPRdSHmpqIJcMwq", "WR7cVIHeWRFdNtKVbmkF", "t0RcPLed", "itRPOi7LJypMIzNLI4q", "W5FcRc1SWP1PWQSKzSooWPRdLrZcPmka", "zLP0BNC", "4P+fqUELUUANIUwLTEI2So+8PG", "WRyTWRtdH38", "WP4pWQVdQeFcSW", "z1ZdHmoMFG", "W7hdJH55CMFcHSolfG", "WOtdUmkb", "W4dcUZbAWPLEWQe5DmoMWO3dQYVcRmkxy0jmmq", "77YY6lYV6z6r5Rwm", "tmoEWOddUmonW5/cPCkB", "W40yW6lcIdi", "xmolW6ldLvC", "W4SOb2nvWOBdS8k6nevaWReFiCorqaNdU8oYdG", "W691WQKfWPO", "qxnf", "W5bnW7T5WOhcLSk6W6y", "W6BdNWPXAwZcMW", "W69BW6LlWPK", "CI8iCYG", "r8kuwH4PW7xdPa", "rIurWQNdPW", "W5WwW5hdVW", "W4ldN8kPksW", "z3DqAL0", "fYxcN8kp", "W5rFWQGXWPy", "W7JdLJ1Ebq", "W7RdPXbxhmknW5JdRh1ZESopWR/dVxXP", "W41YWOiuWOdcLeNcVJW", "W7m7W47cLYK", "qK3dVuFcUbpcPmkNWP0", "W6zTW6TvWOe", "rgVdRMFcHG", "WQf8W6ZcHCoo", "BtWNWPldRmkcWRZdMbJcRmo8W5Kyb0pdQaq", "uuldNCoNxvm", "W6dcQY9dWPy", "C3xdRW", "kfVcPmoKnG", "mw4dor0", "W4iPnSk4xW", "vCoNWRL/rq", "WRZcNmkuj3Sj", "smoQWQbsESoRWQya", "wwnWufO", "776x6l6i6z2G5RA5", "CxvZqeldPHypWQvkWQJdPXFcSCkTW47cTWFcTG", "oow9LEwjQEw3REACGa", "WReFxx7cRCoLWPq+WOugia0+", "DYKmEHZdHmogW5r3", "W7rrks7dIq", "D3irpIxcTq", "bKRcS8obsq", "zJqNuJS", "WPVcSUEUJ+wjJUwLMEI0KfW", "W4eSg2L+WPW", "WOW+W4LfW58", "A3VdU8o+gJqtcCkSWPZcO8kOzW", "xvZdOuNcOHW", "W7W1fa", "wSoQWQfuACoYWRKvWOqcWRxdSKRcP8oB", "AJJcLNH5", "WOKbWRBdOhxcQmoBaSo6WOxcHSoPeG", "W4NdVCkw", "dKdcTG", "W45WirJdMa", "WQ/dJs96WO0", "WPu2q8kTW4GisCo+WOvUDa", "z3WllIBcVCk5ocaubG", "rMDxDf1Zv8oS", "W5FdPJrLmW", "WO7dTSkucSkTWR/dLq", "uLhdNCohCub5WOpcMCoFWRioW4dcLNNdNa", "WPJcTdDDW7BdKdrPr8ouowqzdCk1W7PNWRFcSCkwW70vW47dJmoEx8kfr8olWQBcSbhcKLnJWPpcVCk9CGOIWO3dOCkOWQ5MW7qidfxcOZRcVCoeW5niWOLoASoWWPjUzbVcQ3FdKvpcUSoRCuK8WOD7W57cGapdQueOWOn4W5pdJcfSFa/dGSkBWOG2ss0xWRNdNmoSWO41Be0gWOj1BmofWPP0WOuTimkRkmojkSo7oZqKi0eHDSkGW4FdQmoMW5hcTZH2W6pcU8kPFwf3nmkBWPL0W5rDWPX/b8kl", "zKb1zuddTW", "ExVdUSo4hsKdhSkdWPZcGmk/z8kG", "WPdNRy3NUki", "WRFdHXS", "ySk4rSkgW4zQWR7cSsdcLctdNceMWOJdJSkxWOZdUCo3W516rK7dRG", "brFcVq", "uJdcSLDn", "v35nAW", "rvHRuW", "zSo4v8kSWQVdUfvVdmoiWPa+W5TComoid8oHEsLAW6FdJgBdQCkoWRXOu8kCWQtcKSkSWPi", "ESoJzCk1WQdcPX4", "W5JdJqrGoq", "imkQW7i", "W7tdVSoI", "tqJcKuL4WOZcJ0ZcNb3cLxNdPCoPWODqzCkZWRxcHHLQ", "W6bvpqpdNa", "vgPlChS", "W6KhhezJW4pcOSoGgcOuW69Dj8oDlG", "W6tdMX59vg/cMW", "W4CCWR5WW6i", "xCoFWRa", "WP7dNCkCnSkK", "fcxcHCkqW7pcR8kPWQGtlCkzW4Tu", "WQ9LW7fh", "uxpcNKO", "WPHpW4zOta", "cCkysW", "Amk8wSkmW61J", "WQhcV8kb", "W4njW7XEWRtcM8kVW7a4k8kjW53cImoAWPTRWRJcH8ob", "WPNdPWu1wc7cGNBdJq", "W7vsWRCUWPW", "W5G7gq", "W6ZdVSoO", "yZG0WPVdLSkrWRG", "vwnqu2H+qSo6W5/dG8oRWR0EW4pcR8kCWOlcRSkvnmkMww3dOG", "W4LFW68", "FCoTW7C", "u3fsEMC", "umkoBIu+W6xdRSkxwqZdVYpdJG", "vt/cTNzk", "qvJdVu/cUWFcICkGWPbH", "W4jnW7P/WORcM8kRW7aNnCkvW4tcRCol", "W5/dLmkJcb0", "W5BdPSkdfWzsfsDu", "W64hW4pcIYxdOvLSW6VdKSotW53dJXnVwmoCldS", "WPWeWRFdTCk0ya", "WRZcOmkhigWTW4LtWP/dKSo8", "Dmk1vCkfW61kWRRcOZVcGYm", "W5jpWRinWR0", "qg5cmSoe", "vSo7sCkfWPO", "6lsi56wG5OMD54AR6l2c5P61", "d8opW5XolHldKc8", "E3v0F0ldTry", "v1JdVupcIrdcOSkEWPbHW7mM", "W6vwhW/dSmkiW4C+WQG", "vg7cNKmBpq", "WQLTW79LBLFcJG", "W6KAf8kprq", "rSo7WP/cGwKoW6qnWO3dKG", "W7/dRHTwh8kt", "W7ldRoEUMowjVUwKQEI1ICkE", "WQ5QW6y", "WOyhx8ktW4Oz", "5yQu5lY55RoX5RM/", "seyZoXO", "W6jhhIBdGmkUW4CKWQ0weYSzjfuXW7RcPSkjFq", "W74dW4pcOJBdKfj6W63dTmoA", "yMKqmIe", "EmoPuCkVWRhcRrq", "wfxdGConwLW", "W5T0WOiWWP3cLa", "sSoAWP3dHqu", "W4GTlvzD", "z2TOjCoijWe", "W6RdJHHGBZRdGmkcdSk1z8kbW4xdISkaWQ/cKmoRmstcVCkRWOLKWRuCrmoPw8kzy8oeWQK7", "W6ewW4pcTZFcRXmWW7FcPSknW4dcTXX5bCowldHN", "FXRcLNe", "sGO4WRtdUa", "jCkvW71pW7udW4ldSGq/", "xgBcMeWz", "WOJdVXikEW", "WQxcOSkvk2Oy", "WQfRW6Xi", "utmtEt8", "yd4rtbJdVSocW4PMASkhW6LMWPPToY4LWOi", "W78XfmkF", "W4qpW6tcNIS", "W68Xe8kvzJnPWRSDdW", "t8opn8oDuSo7W4O", "pgXKoG", "lu5xjCkp"];
      }()];
    }()];
  }();
  Iii11l = function () {
    return ilIII1;
  };
  return Iii11l();
}
;
async function doTask() {
  const iIiIII = I1iI,
    iIil1 = {
      "wOovu": function (iiilII, IIiIII) {
        return iiilII !== IIiIII;
      },
      "BocJm": iIiIII(1525, "0%so"),
      "zDqXP": function (lili, lIi1Il) {
        return lili !== lIi1Il;
      },
      "zwWqh": iIiIII(1475, "bseJ"),
      "vbEqg": function (Ii1lII, iliI11) {
        return Ii1lII === iliI11;
      },
      "jKYRP": iIiIII(1057, "il$L"),
      "fWUcU": iIiIII(1122, "2aji"),
      "kPUaL": iIiIII(641, "11dd"),
      "IbqJZ": iIiIII(1252, "FwYB"),
      "NDTfp": function (ii1iI1, ll111I) {
        return ii1iI1(ll111I);
      },
      "KwaYL": iIiIII(1675, "UNVx"),
      "yNljd": function (liIl1I, IIl111, lill) {
        return liIl1I(IIl111, lill);
      },
      "godhQ": function (Ill1lI, Ii1lI1) {
        return Ill1lI + Ii1lI1;
      },
      "bWnEO": "BROWSE_CHANNEL",
      "yWUfN": iIiIII(1125, "7%iy"),
      "xTQpr": iIiIII(708, "OSrY"),
      "cdCXG": iIiIII(1441, "oyv$"),
      "NaHMs": function (IliliI, iliI1I) {
        return IliliI * iliI1I;
      },
      "YYRjt": function (ii1iII, ll1111) {
        return ii1iII !== ll1111;
      },
      "kNGsG": iIiIII(1083, "@Kqq"),
      "kQdlg": function (liIl11, i11IIl) {
        return liIl11 + i11IIl;
      },
      "IzDxI": function (IIl11I, i11IIi) {
        return IIl11I === i11IIi;
      },
      "JtuDN": iIiIII(1694, "oyv$"),
      "Lwubb": function (Il1ii1, illII1) {
        return Il1ii1 + illII1;
      },
      "zsmph": function (Il1iii, iIiii) {
        return Il1iii * iIiii;
      },
      "rnBcc": function (IIiIIl, Il1iil) {
        return IIiIIl(Il1iil);
      },
      "wfMZk": function (iIiil, IIiIIi) {
        return iIiil + IIiIIi;
      },
      "uEMRt": function (lilI, ll111i) {
        return lilI === ll111i;
      },
      "nzYGF": function (l1Ill1, iiilI1) {
        return l1Ill1 + iiilI1;
      }
    };
  let l1IllI = ![];
  $[iIiIII(1280, "2aji")] = "", await sendRequest(iIil1[iIiIII(950, "z%%b")]);
  if (!$[iIiIII(972, "sFII")]) return;
  let lIi1Ii = $["farm_task_list"]?.["taskList"] || [];
  for (let ll111l of lIi1Ii) {
    if (iIil1[iIiIII(386, "ekwl")](iIil1["zwWqh"], iIiIII(515, "kRS["))) llIiI = iIiIII(493, "U2fK") + (Ilill[iIiIII(345, "bseJ")] || Ilili);else {
      const illIII = ll111l?.[iIiIII(1077, "TJ2U")];
      if (iIil1["vbEqg"](illIII, 3)) continue;
      const iliI1l = ll111l?.[iIiIII(900, "lc(%")];
      $["taskId"] = ll111l?.[iIiIII(486, "yNfK")], $[iIiIII(1505, "Lo*N")] = ll111l?.["taskSourceUrl"], $["taskType"] = ll111l?.[iIiIII(1253, "2Sez")], $[iIiIII(1610, "yGNi")] = ll111l?.[iIiIII(1627, "OSrY")];
      switch (illIII) {
        case 1:
          {
            switch ($[iIiIII(916, "yGNi")]) {
              case iIil1[iIiIII(1750, "SqLq")]:
              case iIil1["fWUcU"]:
                break;
              case iIiIII(1638, "dK9O"):
                break;
              case iIil1[iIiIII(1152, "yNfK")]:
                l1IllI = !![], console[iIiIII(649, "exYa")](iIiIII(1145, "oyv$") + iliI1l + "\""), $[iIiIII(1466, "UNVx")] = iIil1[iIiIII(1136, "bseJ")], await iIil1[iIiIII(1225, "U2fK")](sendRequest, iIil1[iIiIII(601, "rWnN")]), await $["wait"](iIil1[iIiIII(498, "aH6A")](parseInt, iIil1[iIiIII(390, "11dd")](Math[iIiIII(1345, "@Kqq")]() * 1000, 1000), 10));
                break;
              case iIil1["bWnEO"]:
              case iIil1[iIiIII(970, "il$L")]:
              default:
                {
                  if (iIil1["vbEqg"](iIil1["xTQpr"], "OHLlI")) {
                    if (ll111l["taskSourceUrl"]) iIiIII(766, "B%6T") !== iIil1["cdCXG"] ? (l1IllI = !![], console[iIiIII(1446, "UNVx")](iIiIII(458, "aH6A") + iliI1l + "\""), await iIil1[iIiIII(1523, "i@xn")](sendRequest, iIil1[iIiIII(1426, "0%so")]), await $["wait"](iIil1["yNljd"](parseInt, iIil1[iIiIII(323, "B%6T")](iIil1[iIiIII(1308, "Gr0r")](Math[iIiIII(1544, "$XDD")](), 500), 1000), 10))) : iil1il[iIiIII(577, "SHv]")]("" + (ilil1I["errMsg"] || i11il1["msg"]));else {
                      if (iIil1["YYRjt"](iIiIII(583, "%7#J"), "nnslI")) {
                        l1IllI = !![], await sendRequest(iIil1[iIiIII(682, "*RZC")]), await $[iIiIII(566, "yGNi")](parseInt(iIil1[iIiIII(835, "z%%b")](iIil1["NaHMs"](Math[iIiIII(1221, "ekwl")](), 500), 1000), 10));
                        const iliI1i = $[iIiIII(1341, "hfm5")]?.[iIiIII(1050, "KYtB")] || [],
                          IIl11i = iliI1i[0];
                        console[iIiIII(1019, "bseJ")]("\u53BB\u505A\u9886\u6C34\u6EF4\u4EFB\u52A1 \"" + iliI1l + "\"");
                        if (IIl11i) $["taskSourceUrl"] = IIl11i[iIiIII(1232, "[)vG")], $[iIiIII(1572, "a9Rj")] = IIl11i[iIiIII(590, "dK9O")], await sendRequest(iIiIII(1538, "oyv$")), await $["wait"](parseInt(iIil1["kQdlg"](Math[iIiIII(361, "Lo*N")]() * 500, 1000), 10));else {
                          if (iIil1[iIiIII(347, "dK9O")](iIil1[iIiIII(1447, "8O3M")], "Dkayr")) console[iIiIII(646, "2Sez")](iIiIII(877, "Gr0r"));else {
                            for (let ii1iIl = 0; ii1iIl < l1i11I[iIiIII(356, "iCdQ")]; ii1iIl++) {
                              const Ill1l1 = Iliill[ii1iIl],
                                Ilili1 = Ill1l1["nickname"];
                              iIil1["wOovu"](ii1iIl, IIII11[iIiIII(920, "KYtB")] - 1) ? I1llil += Ilili1 + "\u3001" : I1llii += "" + Ilili1;
                            }
                            IIII1I[iIiIII(686, "rWnN")]("\n\u5F53\u524D\u5DF2\u6709" + Iii111[iIiIII(1464, "@Kqq")] + iIiIII(371, "RaO3") + l1l1II), Iil1I1[iIiIII(1644, "a9Rj")][iIiIII(561, "zIDY")]("\u5DF2\u6709" + Ii1iII[iIiIII(733, "yGNi")] + iIiIII(1238, "KYtB"));
                          }
                        }
                      } else iiilil[iIiIII(476, "2Sez")] = ![], iil1li["farm_assist_init_info"] = lillIl[iIiIII(960, "oyv$")];
                    }
                    break;
                  } else lI1lll["log"]("" + iIiII[iIiIII(739, "B%6T")]?.["bizMsg"]);
                }
            }
            break;
          }
        case 2:
          {
            console[iIiIII(646, "2Sez")](iIiIII(331, "2Sez") + iliI1l + "\" \u4EFB\u52A1\u5956\u52B1"), await sendRequest(iIiIII(1217, "%7#J")), await $[iIiIII(1324, "SqLq")](parseInt(iIil1[iIiIII(1718, "WM2J")](iIil1[iIiIII(647, "bseJ")](Math["random"](), 500), 1000), 10));
            break;
          }
        default:
          console["log"](iIiIII(266, "8O3M") + ll111l[iIiIII(861, "11dd")] + iIiIII(767, "hfm5") + ll111l[iIiIII(959, "i@xn")]);
          break;
      }
    }
  }
  if (l1IllI) {
    await iIil1["rnBcc"](sendRequest, iIil1["BocJm"]), await $[iIiIII(1612, "a4Kz")](parseInt(iIil1["wfMZk"](iIil1[iIiIII(524, "2aji")](Math[iIiIII(773, "LzrV")](), 1000), 1000), 10)), lIi1Ii = $["farm_task_list"]?.[iIiIII(1452, "B%6T")] || [];
    for (let l1iiiI of lIi1Ii) {
      const Ii111l = l1iiiI["mainTitle"];
      $[iIiIII(490, "LzrV")] = l1iiiI[iIiIII(1064, "Gr0r")], $["taskType"] = l1iiiI[iIiIII(303, "@Kqq")], iIil1[iIiIII(1382, "LzrV")](l1iiiI[iIiIII(1601, "aH6A")], 2) && (console["log"](iIiIII(319, "bseJ") + Ii111l + "\" \u4EFB\u52A1\u5956\u52B1"), await sendRequest(iIiIII(973, "2Sez")), await $[iIiIII(1167, "2aji")](parseInt(iIil1[iIiIII(938, "RCrL")](Math[iIiIII(1010, "SqLq")]() * 500, 1000), 10)));
    }
    console[iIiIII(691, "sFII")]("");
  }
}
async function lotterydraw() {
  const I1lI = I1iI,
    iI11li = {
      "qTGHI": I1lI(696, "sFII"),
      "MAOiQ": "gRfAI",
      "UJvqU": I1lI(303, "@Kqq"),
      "PDdfJ": I1lI(1471, "KYtB"),
      "uYHlu": "ybfTj",
      "UpcSV": I1lI(811, "2aji"),
      "yQnXc": function (lIi11, i11II1, Ilill1) {
        return lIi11(i11II1, Ilill1);
      },
      "vjnfX": function (I111lI, l1iii1, iiilIl) {
        return I111lI(l1iii1, iiilIl);
      },
      "FIlAR": function (Il1ilI, iIliIl) {
        return Il1ilI + iIliIl;
      },
      "OnbJk": function (l1Illi, iiilIi) {
        return l1Illi > iiilIi;
      },
      "ZXlLn": function (l1Illl, Ii111I) {
        return l1Illl(Ii111I);
      },
      "pEPQG": function (iI11ll, liIl1i) {
        return iI11ll * liIl1i;
      }
    };
  $[I1lI(367, "Gr0r")] = "", await sendRequest(iI11li["qTGHI"]);
  if (!$[I1lI(1126, "WM2J")]) return;
  if ($["apTaskList"]) {
    if (I1lI(1228, "W5fK") !== iI11li[I1lI(683, "OSrY")]) {
      const liIl1l = $[I1lI(1094, "U2fK")] || [];
      for (let IIiII1 = 0; IIiII1 < liIl1l[I1lI(1117, "Lo*N")]; IIiII1++) {
        $[I1lI(1261, "aH6A")] = liIl1l[IIiII1]["id"], $[I1lI(370, "W5fK")] = liIl1l[IIiII1][iI11li[I1lI(1108, "z%%b")]], $["taskSourceUrl"] = liIl1l[IIiII1][iI11li[I1lI(1773, "i@xn")]];
        const lIi1I = liIl1l[IIiII1]["taskFinished"],
          Ii1111 = liIl1l[IIiII1]["taskShowTitle"];
        !lIi1I && $[I1lI(930, "SmzW")][I1lI(947, "rWnN")](I1lI(509, "iCdQ")) && (iI11li[I1lI(1435, "$XDD")] === I1lI(497, "OSrY") ? (IlIlll["farmHot"] = !![], IIIl1I["log"]("" + iil1ii[I1lI(1506, "TJ2U")][I1lI(665, "8O3M")])) : (console[I1lI(955, "Gr0r")](I1lI(598, "FwYB") + Ii1111 + "\""), await sendRequest(iI11li[I1lI(245, "Gr0r")]), await $["wait"](iI11li[I1lI(1107, "2aji")](parseInt, Math["random"]() * 500 + 1000, 10))));
      }
    } else liiII1[I1lI(778, "TJ2U")]("" + (IIIl1l[I1lI(944, "@Kqq")] || lllll["msg"]));
  }
  await sendRequest("wheelsHome"), await $[I1lI(550, "UNVx")](iI11li["vjnfX"](parseInt, iI11li[I1lI(850, "0%so")](Math[I1lI(304, "aH6A")]() * 1000, 2000), 10));
  if (iI11li["OnbJk"]($["lotteryChances"], 0)) {
    if (true) {
      $["wheelsLotteryHot"] = ![], console["log"](I1lI(1123, "RaO3") + ($["lotteryChances"] || 0) + I1lI(868, "exYa"));
      const I111ll = Math[I1lI(1516, "a4Kz")]($[I1lI(624, "11dd")], 3);
      for (let I1liIi = 0; I1liIi < I111ll; I1liIi++) {
        await iI11li["ZXlLn"](sendRequest, I1lI(1198, "RaO3")), await $["wait"](parseInt(iI11li[I1lI(1292, "yNfK")](iI11li["pEPQG"](Math[I1lI(892, "WM2J")](), 2000), 4000), 10));
        if ($[I1lI(1436, "$XDD")]) break;
      }
    } else IIIIli["ua"] = lllIi, lil1l["sua"] = lllIl[1], Iliii["av"] = illlii[0];
  }
}
async function getAssistRewards() {
  const iIlIl = I1iI,
    I1ii1l = {
      "UinuW": "farm_assist_init_info",
      "EcUVE": function (Ill1ll, I1liIl, I111li) {
        return Ill1ll(I1liIl, I111li);
      },
      "hmfgm": function (l11li, iIlli) {
        return l11li + iIlli;
      },
      "SXkwU": function (l11ll, Ii1ll) {
        return l11ll * Ii1ll;
      },
      "BzVMw": function (iIlll, liII11) {
        return iIlll > liII11;
      },
      "onPQj": "dWklt",
      "LNdrz": function (I1II, iiii1, l1li1I) {
        return I1II(iiii1, l1li1I);
      },
      "edxPh": function (iIlli1, I1IIIl) {
        return iIlli1 + I1IIIl;
      }
    };
  $["farm_assist_init_info_hot"] = !![], $["farm_assist_init_info"] = "", await sendRequest(I1ii1l[iIlIl(1666, "exYa")]);
  if (!$["farm_assist_init_info"] || $[iIlIl(751, "bseJ")]) return;
  await $[iIlIl(651, "hfm5")](I1ii1l[iIlIl(1370, "2aji")](parseInt, I1ii1l["hmfgm"](I1ii1l[iIlIl(1759, "yNfK")](Math[iIlIl(279, "RaO3")](), 1000), 1000), 10));
  const iIii1 = $[iIlIl(674, "RaO3")]?.[iIlIl(1323, "RaO3")]?.[iIlIl(1076, "TJ2U")] || [],
    Il1il1 = $[iIlIl(969, "SHv]")]?.[iIlIl(684, "7%iy")]?.[iIlIl(431, "UNVx")] || [];
  let Ililil = "";
  if (I1ii1l["BzVMw"](Il1il1["length"], 0)) {
    for (let il1IlI = 0; il1IlI < Il1il1[iIlIl(1634, "dK9O")]; il1IlI++) {
      const I1IIIi = Il1il1[il1IlI],
        lI11 = I1IIIi["nickname"];
      il1IlI !== Il1il1[iIlIl(967, "%7#J")] - 1 ? I1ii1l[iIlIl(1746, "@Kqq")] !== "qmwJl" ? Ililil += lI11 + "\u3001" : i1iIli[iIlIl(1321, "B%6T")]("\u2753" + i1iIll + " " + i1lliI[iIlIl(734, "bseJ")](liI1l1)) : Ililil += "" + lI11;
    }
    console[iIlIl(1473, "8O3M")](iIlIl(1456, "bLYY") + Il1il1["length"] + iIlIl(1144, "exYa") + Ililil), $[iIlIl(271, "8O3M")]["insert"]("\u5DF2\u6709" + Il1il1["length"] + iIlIl(1792, "2Sez"));
  }
  l11l1: for (let i1I111 of iIii1) {
    const l1li11 = i1I111?.[iIlIl(350, "yGNi")],
      il1Il1 = i1I111?.[iIlIl(1551, "2aji")];
    switch (i1I111?.[iIlIl(1185, "RaO3")]) {
      case 1:
        break l11l1;
      case 2:
        console[iIlIl(1472, "W5fK")](iIlIl(988, "W5fK") + l1li11 + "\u4EBA\u52A9\u529B\u5956\u52B1\u3010" + il1Il1 + "g\u6C34\u6EF4\u3011"), await sendRequest(iIlIl(491, "il$L")), await $["wait"](I1ii1l[iIlIl(810, "dK9O")](parseInt, I1ii1l[iIlIl(322, "7%iy")](Math[iIlIl(736, "lc(%")]() * 500, 1000), 10));
        break;
      case 3:
        console[iIlIl(882, "yNfK")](l1li11 + iIlIl(654, "iCdQ") + il1Il1 + "g\u6C34\u6EF4\u3011\u5DF2\u9886\u8FC7");
        break;
      default:
        {
          console[iIlIl(1012, "WM2J")]("\u672A\u77E5\u52A9\u529B\u7B49\u7EA7\u72B6\u6001\uFF1A" + i1I111?.[iIlIl(848, "11dd")]);
          break;
        }
    }
  }
}
async function goWatering() {
  const iIlIi = I1iI,
    li11II = {
      "iAmrg": iIlIi(1219, "11dd"),
      "pfoeY": iIlIi(1789, "8O3M"),
      "BubQc": iIlIi(1053, "dK9O"),
      "mZiNT": function (Ii1li, iIiIli) {
        return Ii1li / iIiIli;
      },
      "rtuTd": function (iIllI, iIiIl1) {
        return iIllI(iIiIl1);
      },
      "cYaut": function (i1I11I, Ii1lli) {
        return i1I11I * Ii1lli;
      },
      "LiGmK": function (Ii1lll, I1IIII) {
        return Ii1lll(I1IIII);
      },
      "iVsbS": function (I1I1, Ii1lI) {
        return I1I1 / Ii1lI;
      },
      "ECTBG": function (iIiIlI, liII1i) {
        return iIiIlI * liII1i;
      },
      "ComkC": function (iIiIil, iIiIii) {
        return iIiIil(iIiIii);
      },
      "sfstt": function (lI1i, i11) {
        return lI1i + i11;
      },
      "trMSh": function (Ii1llI, i1I11i) {
        return Ii1llI < i1I11i;
      },
      "VYfnu": function (lI1l, li11Il) {
        return lI1l(li11Il);
      },
      "ThUZm": function (i1I11l, IIlIl1) {
        return i1I11l * IIlIl1;
      },
      "AHNcb": function (liII1l, Ii1ll1) {
        return liII1l !== Ii1ll1;
      },
      "NGcBN": function (IIlIlI, I1III1) {
        return IIlIlI(I1III1);
      },
      "crPHU": function (iIll1, l11li1) {
        return iIll1 < l11li1;
      },
      "fbVdW": function (i1I, liII1I) {
        return i1I === liII1I;
      },
      "uzAoV": function (iIiIiI, iIlil) {
        return iIiIiI(iIlil);
      },
      "svtrk": iIlIi(1360, "OSrY"),
      "FhBOQ": function (lIiII1, iIlii, lI1I) {
        return lIiII1(iIlii, lI1I);
      }
    };
  $[iIlIi(1128, "bseJ")] = "", await sendRequest("farm_home"), $[iIlIi(761, "lc(%")] = $[iIlIi(1259, "2Sez")]?.[iIlIi(1747, "11dd")]?.[iIlIi(1477, "dK9O")] || 0, $["canFastWater"] = $["farm_home"]?.[iIlIi(296, "FwYB")]?.["canFastWater"] || ![], console[iIlIi(1764, "@Kqq")](iIlIi(1120, "8O3M") + ($[iIlIi(453, "UNVx")] || 0) + "g\uD83D\uDCA7\uFF0C" + ($[iIlIi(919, "OSrY")] ? li11II["sfstt"](iIlIi(1632, "zIDY") + (retainWater ? "\u5F00\u542F" : "\u5173\u95ED"), "]") : "\u4E0D\u80FD\u5FEB\u901F\u6D47\u6C34")), $["message"]["insert"](iIlIi(1548, "KYtB") + ($[iIlIi(759, "RCrL")] || 0) + "g");
  if ($[iIlIi(945, "z%%b")] < 10 || !$[iIlIi(1374, "7%iy")]) return;
  if (retainWater && $["canFastWater"]) {
    console["log"]("\u5F53\u524D\u5DF2\u7ECF\u8BBE\u7F6E\u5FEB\u901F\u6D47\u6C34\uFF0C\u53BB\u5FEB\u901F\u6D47\u6C34~");
    for (let I1Ii = 0; li11II[iIlIi(1187, "%7#J")](I1Ii, 50); I1Ii++) {
      $["waterType"] = 2, await li11II[iIlIi(698, "z%%b")](sendRequest, iIlIi(241, "KYtB")), await $[iIlIi(1067, "8O3M")](parseInt(li11II["sfstt"](li11II["ThUZm"](Math[iIlIi(669, "SHv]")](), 2000), 2000), 10));
      if (!$[iIlIi(1695, "i@xn")]) break;
    }
  } else {
    if (li11II["AHNcb"](iIlIi(1043, "W5fK"), iIlIi(1115, "@Kqq"))) {
      let I1Il = Math[iIlIi(1509, "sFII")](waternum, li11II[iIlIi(1720, "Lo*N")](parseInt, li11II["iVsbS"]($[iIlIi(518, "yGNi")], 10)));
      console[iIlIi(457, "dK9O")](iIlIi(429, "sFII") + (waternum || 0) + iIlIi(1621, "*RZC"));
      for (let l1li1i = 0; li11II[iIlIi(503, "SHv]")](l1li1i, I1Il); l1li1i++) {
        if (li11II["fbVdW"](iIlIi(1618, "TJ2U"), "YaEKF")) {
          $[iIlIi(1329, "[)vG")] = 1, await li11II[iIlIi(1442, "FwYB")](sendRequest, li11II[iIlIi(1227, "i@xn")]), await $[iIlIi(550, "UNVx")](li11II[iIlIi(1629, "iCdQ")](parseInt, Math[iIlIi(520, "z%%b")]() * 2000 + 2000, 10));
          if (!$[iIlIi(461, "Mg$B")]) break;
        } else {
          if (IIlil === li11II[iIlIi(253, "%7#J")] || ilI1lI === 100) switch (IIli1I) {
            case 1:
              return li11II["pfoeY"];
            case 2:
              return iIlIi(748, "U2fK");
            case 3:
              return iIlIi(1319, "a9Rj");
            case 4:
              return li11II[iIlIi(951, "SHv]")];
            case 5:
              return iIlIi(828, "[)vG");
          } else {
            const il1Ill = (100 - I1i11I)[iIlIi(1493, "yNfK")](2) + "%";
            let il1Ili = 0;
            switch (llIliI) {
              case 1:
                il1Ili = l1lIli[iIlIi(1499, "bLYY")](li11II[iIlIi(1597, "UNVx")](li11II[iIlIi(482, "kRS[")](lIIiiI, il1Ill) * 100, 333));
                return iIlIi(1017, "SHv]") + il1Ill + iIlIi(903, "7%iy") + il1Ili + "\u6B21";
              case 2:
                il1Ili = II1lil[iIlIi(353, "yGNi")](li11II[iIlIi(732, "Gr0r")](li11II[iIlIi(822, "*RZC")](li11II[iIlIi(257, "hfm5")](IIli1l, il1Ill), 100), 200));
                return iIlIi(1795, "OSrY") + il1Ill + iIlIi(329, "il$L") + il1Ili + "\u6B21";
              case 3:
                il1Ili = II1lii["ceil"](li11II[iIlIi(407, "il$L")](li11II[iIlIi(1031, "2aji")](li11II[iIlIi(239, "%7#J")](lIIii1, il1Ill), 100), 167));
                return iIlIi(318, "dK9O") + il1Ill + iIlIi(1454, "a9Rj") + il1Ili + "\u6B21";
              case 4:
                il1Ili = ll1i1[iIlIi(742, "2aji")](li11II["iVsbS"](li11II["cYaut"](li11II[iIlIi(838, "OSrY")](IIli1i, il1Ill), 1000), 37));
                return iIlIi(443, "W5fK") + il1Ill + iIlIi(329, "il$L") + il1Ili + "\u6B21";
            }
          }
        }
      }
    } else I1l11I[iIlIi(1170, "a9Rj")](Ilil1l[iIlIi(842, "bLYY")]?.[iIlIi(824, "KYtB")]);
  }
  $[iIlIi(1537, "iCdQ")][iIlIi(1214, "LzrV")](iIlIi(1051, "kRS[") + ($[iIlIi(759, "RCrL")] || 0) + "g");
}
async function awarddetail() {
  const iIl111 = I1iI,
    IIlIli = {
      "SAPfv": function (l11liI, li11Ii, lIiIII) {
        return l11liI(li11Ii, lIiIII);
      },
      "cSirz": function (i1i, I1Il1l) {
        return i1i === I1Il1l;
      },
      "TGWMS": function (I1Il1i, i1l) {
        return I1Il1i === i1l;
      }
    };
  $["farm_award_detail"] = "", await sendRequest("farm_award_detail"), await $[iIl111(566, "yGNi")](IIlIli["SAPfv"](parseInt, Math[iIl111(1460, "dK9O")]() * 500 + 500, 10)), $[iIl111(1530, "hfm5")] = $[iIl111(1443, "OSrY")]?.[iIl111(1531, "aH6A")] || [];
  let IIlIll = [];
  for (let IlIiII of $[iIl111(1111, "7%iy")]) {
    const iIliI = IlIiII[iIl111(284, "oyv$")] || 0,
      i1IlII = IlIiII[iIl111(1757, "B%6T")] || 0,
      ilIii1 = IIlIli[iIl111(254, "bseJ")](i1IlII, 1) ? iIl111(268, "2Sez") : IIlIli["cSirz"](i1IlII, 2) ? iIl111(1268, "ekwl") : "\u672A\u77E5",
      ll1III = IlIiII[iIl111(357, "SmzW")],
      ll1II1 = IlIiII[iIl111(308, "zIDY")];
    switch (iIliI) {
      case 1:
        IIlIll[iIl111(752, "dK9O")](ilIii1 + iIl111(631, "ekwl") + ll1III), $["message"][iIl111(1690, "W5fK")]("\u79CD\u690D\u7684\u6C34\u679C\u5956\u54C1[\u5DF2\u9886\u53D6]:" + ll1III + iIl111(1335, "Lo*N")), await notify[iIl111(979, "0%so")]($[iIl111(1739, "7%iy")] + "\u5956\u54C1\u901A\u77E5", iIl111(1365, "sFII") + $[iIl111(851, "SHv]")] + "\u3011" + $["UserName"] + iIl111(958, "SqLq") + ilIii1 + "][\u5DF2\u9886\u53D6]:" + ll1III + ",\u8BF7\u5C3D\u5FEB\u53BB\u4F7F\u7528~\n\n");
        break;
      case 2:
        IIlIll["push"](ilIii1 + "[\u5DF2\u4F7F\u7528]:" + ll1III);
        break;
      case 3:
        IIlIll[iIl111(1770, "Mg$B")](ilIii1 + iIl111(1735, "bseJ") + ll1III);
        break;
      case 4:
        IIlIll[iIl111(1168, "RCrL")](ilIii1 + iIl111(1248, "RCrL") + ll1II1);
        break;
      default:
        {
          if (iIl111(1095, "FwYB") === iIl111(1203, "2aji")) llIIil[iIl111(1068, "z%%b")]("\u2753" + llIIii + " " + Ii1I1i[iIl111(1513, "Gr0r")](llIIlI));else {
            IIlIll[iIl111(978, "SHv]")]("\u672A\u77E5\u52A9\u529B\u5956\u52B1\u72B6\u6001\uFF1A" + iIliI);
            break;
          }
        }
    }
  }
  if (IIlIll[iIl111(425, "Mg$B")] > 0) {
    if (IIlIli["TGWMS"]("PVkvI", iIl111(1432, "2Sez"))) this[iIl111(1683, "8O3M")][iIl111(1142, "kRS[")](lI111I["ua"], IlilI["fp"]);else {
      const l11lil = IIlIll[iIl111(694, "a4Kz")](0, 3);
      console[iIl111(464, "*RZC")](iIl111(918, "11dd") + l11lil[iIl111(1567, "TJ2U")]("\n"));
    }
  }
}
function getGrowthWord(iIllli, iIlll1) {
  const i11lil = I1iI,
    ilIiiI = {
      "fbSNE": function (I1Il1I, IIlIil) {
        return I1Il1I === IIlIil;
      },
      "cxPBq": "100",
      "AElXX": i11lil(917, "exYa"),
      "ILdzu": i11lil(731, "W5fK"),
      "BaSXv": function (l11llI, i1IlIi) {
        return l11llI - i1IlIi;
      },
      "ZqtHJ": function (i1IlIl, ll1IIi) {
        return i1IlIl / ll1IIi;
      },
      "YChmq": function (IlIiI1, ll1IIl) {
        return IlIiI1 * ll1IIl;
      },
      "AaRyr": function (l11ll1, iIlllI) {
        return l11ll1 * iIlllI;
      },
      "HYyrK": function (iIli1, iIllii) {
        return iIli1(iIllii);
      },
      "vIgif": function (iIllil, l11lli) {
        return iIllil * l11lli;
      }
    };
  if (ilIiiI[i11lil(678, "Lo*N")](iIlll1, ilIiiI["cxPBq"]) || iIlll1 === 100) switch (iIllli) {
    case 1:
      return ilIiiI[i11lil(939, "Gr0r")];
    case 2:
      return i11lil(1161, "%7#J");
    case 3:
      return i11lil(1606, "rWnN");
    case 4:
      return ilIiiI[i11lil(554, "Lo*N")];
    case 5:
      return "\u679C\u6811\u6210\u719F\u4E86";
  } else {
    const I1Il11 = ilIiiI["BaSXv"](100, iIlll1)[i11lil(511, "8O3M")](2) + "%";
    let IlIiIl = 0;
    switch (iIllli) {
      case 1:
        IlIiIl = Math[i11lil(1137, "2Sez")](ilIiiI[i11lil(1092, "rWnN")](ilIiiI[i11lil(1346, "2Sez")](parseFloat(I1Il11), 100), 333));
        return i11lil(1389, "LzrV") + I1Il11 + i11lil(1036, "a4Kz") + IlIiIl + "\u6B21";
      case 2:
        IlIiIl = Math["ceil"](ilIiiI["AaRyr"](ilIiiI["HYyrK"](parseFloat, I1Il11), 100) / 200);
        return "\u8DDD\u79BB\u5F00\u82B1\u8FD8\u6709" + I1Il11 + i11lil(688, "SmzW") + IlIiIl + "\u6B21";
      case 3:
        IlIiIl = Math[i11lil(1191, "WM2J")](ilIiiI[i11lil(487, "RaO3")](parseFloat(I1Il11) * 100, 167));
        return i11lil(1379, "kRS[") + I1Il11 + "\uFF0C\u8FD8\u9700\u6D47" + IlIiIl + "\u6B21";
      case 4:
        IlIiIl = Math[i11lil(415, "LzrV")](ilIiiI[i11lil(1369, "B%6T")](ilIiiI["HYyrK"](parseFloat, I1Il11), 1000) / 37);
        return i11lil(1535, "rWnN") + I1Il11 + "\uFF0C\u8FD8\u9700\u6D47" + IlIiIl + "\u6B21";
    }
  }
}
async function handleResponse(iIiIll, iIlliI) {
  const iilI1I = I1iI,
    IlIiIi = {
      "IhdfI": function (IIlIi1, i1IIi1) {
        return IIlIi1 - i1IIi1;
      },
      "yaFqE": function (IIlIiI, l11lll) {
        return IIlIiI / l11lll;
      },
      "CEomm": function (i1iiI1, ll1l1I) {
        return i1iiI1 / ll1l1I;
      },
      "lIBpS": function (iIilI1, i1IIiI) {
        return iIilI1 * i1IIiI;
      },
      "lWKFE": function (lI1i1I, l111II) {
        return lI1i1I(l111II);
      },
      "sRhMR": function (IiIII1, I1II1) {
        return IiIII1 * I1II1;
      },
      "epjOe": function (lIil1i, lIil1l) {
        return lIil1i + lIil1l;
      },
      "jqduP": function (l1II1i, lili11) {
        return l1II1i * lili11;
      },
      "jloZi": iilI1I(238, "OSrY"),
      "qCiQa": iilI1I(1098, "a4Kz"),
      "FxJAO": iilI1I(248, "B%6T"),
      "jMrwT": iilI1I(1669, "Lo*N"),
      "UNqHI": iilI1I(1256, "Lo*N"),
      "kdNHo": function (lIllIi, iIi11l) {
        return lIllIi == iIi11l;
      },
      "sqpFj": function (lIllIl, iIi11i) {
        return lIllIl * iIi11i;
      },
      "hHRvK": function (ii11i1, ll1l1l) {
        return ii11i1 * ll1l1l;
      },
      "SCYVD": iilI1I(814, "il$L"),
      "MVXGW": iilI1I(744, "dK9O"),
      "YFnAs": "appId",
      "BehNh": iilI1I(837, "oyv$"),
      "edXXW": iilI1I(1030, "7%iy"),
      "QJiAb": iilI1I(821, "lc(%"),
      "JkGTo": function (l1II11, iIl1Ii) {
        return l1II11 === iIl1Ii;
      },
      "UkbKd": "pJsbT",
      "BHvof": function (ll1l1i, iI1iI1) {
        return ll1l1i !== iI1iI1;
      },
      "iIxXF": iilI1I(1383, "zIDY"),
      "AWmKK": function (i1IIii, i1IIil) {
        return i1IIii === i1IIil;
      },
      "HcWhL": iilI1I(1060, "aH6A"),
      "Moajt": "farm_plant_tree",
      "YURXC": function (il111l, iIl1Il) {
        return il111l === iIl1Il;
      },
      "knAOb": iilI1I(1767, "LzrV"),
      "UhOFW": iilI1I(772, "*RZC"),
      "PgpuY": iilI1I(306, "z%%b"),
      "MbniK": function (il111i, iI1iII) {
        return il111i !== iI1iII;
      },
      "MyfJX": "tSfZU",
      "ENFOQ": iilI1I(1400, "aH6A"),
      "UTeSD": function (l111Ii, lI1i11) {
        return l111Ii === lI1i11;
      },
      "KiDev": "mNvOq",
      "zPPZr": "kaEFB",
      "OiVgq": function (lili1I, i1iiII) {
        return lili1I === i1iiII;
      },
      "vJzQA": "qVjYr",
      "NHTwt": iilI1I(1129, "RaO3"),
      "RdiPv": "farm_task_list",
      "KmQFy": iilI1I(1209, "oyv$"),
      "touDD": "JgyzY",
      "TMYFM": iilI1I(354, "[)vG"),
      "HXizn": function (l111Il, I1III) {
        return l111Il === I1III;
      },
      "GpWMC": function (l1II1I, iiliI1) {
        return l1II1I === iiliI1;
      },
      "SNdUf": iilI1I(943, "RCrL"),
      "UCBYl": iilI1I(440, "OSrY"),
      "wvMDF": iilI1I(1614, "SqLq"),
      "tBXyS": function (iIi11I, iiii11) {
        return iIi11I === iiii11;
      },
      "iljFs": iilI1I(941, "exYa"),
      "ARYLM": iilI1I(1021, "exYa"),
      "EIwyZ": function (iIl1II, il1lIi) {
        return iIl1II === il1lIi;
      },
      "XnVrx": iilI1I(846, "8O3M"),
      "akdkv": function (Ili1, ii11iI) {
        return Ili1 === ii11iI;
      },
      "AdXzD": "> \u4EFB\u52A1\u5B8C\u6210",
      "bnaSi": iilI1I(1707, "LzrV"),
      "pHfqp": iilI1I(878, "kRS["),
      "sQOAx": function (i1IIl1, I1IIl) {
        return i1IIl1 !== I1IIl;
      },
      "mrtVH": function (i1iiIi, iiliII) {
        return i1iiIi === iiliII;
      },
      "AqPYN": iilI1I(473, "OSrY"),
      "tcHoq": iilI1I(954, "$XDD"),
      "ZIrdd": function (i1iiIl, I11llI) {
        return i1iiIl === I11llI;
      },
      "fYyJN": iilI1I(1397, "rWnN"),
      "cUrAG": iilI1I(1353, "i@xn"),
      "oxNXV": iilI1I(856, "OSrY"),
      "fSeZF": function (I1IIi, iiii1I) {
        return I1IIi !== iiii1I;
      },
      "SWxOO": "rhjCc",
      "SKCNM": function (lIlIi1, l1II1l) {
        return lIlIi1 === l1II1l;
      },
      "zYyPm": "fXsEA",
      "hfoZz": iilI1I(1427, "yGNi"),
      "ltDOg": function (i1IIlI, ii11il) {
        return i1IIlI === ii11il;
      },
      "zFRvu": iilI1I(777, "Mg$B"),
      "uJnMj": "apsDoTask",
      "CsQWJ": function (il1lII, iIi111) {
        return il1lII === iIi111;
      },
      "HvRnu": function (ii11ii, ll1l11) {
        return ii11ii !== ll1l11;
      },
      "YyVFp": iilI1I(1233, "Mg$B"),
      "yfzDk": iilI1I(302, "ekwl"),
      "uxuun": iilI1I(1089, "z%%b")
    };
  try {
    switch (iIiIll) {
      case IlIiIi["QJiAb"]:
        if (IlIiIi[iilI1I(1643, "iCdQ")](iIlliI[iilI1I(1392, "@Kqq")], 0) && iIlliI[iilI1I(299, "bseJ")]?.[iilI1I(1245, "LzrV")] === 0) $[iilI1I(906, "yNfK")] = iIlliI["data"], $["farmHot"] = ![];else {
          if (iIlliI[iilI1I(1506, "TJ2U")]?.["bizMsg"]) {
            if (IlIiIi["UkbKd"] === iilI1I(1409, "iCdQ")) $[iilI1I(283, "2aji")] = iIlliI[iilI1I(1247, "KYtB")], console[iilI1I(882, "yNfK")](iilI1I(1303, "z%%b") + iIlliI[iilI1I(1322, "W5fK")][iilI1I(657, "dK9O")] + "\uFF08\u72B6\u6001\u7801" + iIlliI[iilI1I(510, "Lo*N")]?.[iilI1I(557, "zIDY")] + "\uFF09"), $[iilI1I(1693, "yGNi")] = !![];else {
              const il1lI1 = IlIiIi[iilI1I(622, "WM2J")](100, IliI1i)[iilI1I(511, "8O3M")](2) + "%";
              let i111li = 0;
              switch (ll1ii) {
                case 1:
                  i111li = ll1li[iilI1I(415, "LzrV")](IlIiIi[iilI1I(1239, "B%6T")](Illl1I(il1lI1) * 100, 333));
                  return iilI1I(980, "Gr0r") + il1lI1 + iilI1I(1417, "SHv]") + i111li + "\u6B21";
                case 2:
                  i111li = lliiiI["ceil"](IlIiIi[iilI1I(1211, "$XDD")](lilil(il1lI1) * 100, 200));
                  return iilI1I(389, "KYtB") + il1lI1 + "\uFF0C\u8FD8\u9700\u6D47" + i111li + "\u6B21";
                case 3:
                  i111li = ll1ll[iilI1I(1230, "2aji")](IlIiIi[iilI1I(1532, "*RZC")](IlIiIi[iilI1I(495, "oyv$")](Illl11, il1lI1), 100) / 167);
                  return "\u8DDD\u79BB\u7ED3\u679C\u8FD8\u6709" + il1lI1 + iilI1I(735, "yGNi") + i111li + "\u6B21";
                case 4:
                  i111li = ii1lI[iilI1I(929, "il$L")](IlIiIi["yaFqE"](IlIiIi[iilI1I(1376, "a4Kz")](IlIiIi["lWKFE"](I1ilIl, il1lI1), 1000), 37));
                  return iilI1I(1650, "SHv]") + il1lI1 + iilI1I(444, "WM2J") + i111li + "\u6B21";
              }
            }
          } else iIlliI["errMsg"] || iIlliI["msg"] ? IlIiIi[iilI1I(1384, "yNfK")](iilI1I(855, "oyv$"), iilI1I(1210, "7%iy")) ? (console[iilI1I(808, "$XDD")]("" + (iIlliI[iilI1I(633, "zIDY")] || iIlliI["msg"])), $[iilI1I(1678, "SHv]")] = !![]) : illIii["log"]("" + (ii1il1[iilI1I(564, "2aji")] || lI1llI[iilI1I(1243, "bLYY")])) : console[iilI1I(1318, "yGNi")]("\u2753" + iIiIll + " " + JSON[iilI1I(1414, "U2fK")](iIlliI));
        }
        break;
      case IlIiIi[iilI1I(1617, "hfm5")]:
        if (IlIiIi["JkGTo"](iIlliI[iilI1I(1315, "RCrL")], 0) && IlIiIi[iilI1I(879, "Lo*N")](iIlliI[iilI1I(739, "B%6T")]?.["bizCode"], 0)) $[iilI1I(912, "kRS[")] = iIlliI[iilI1I(512, "iCdQ")]?.[iilI1I(1785, "exYa")];else {
          if (iIlliI[iilI1I(1745, "zIDY")]?.[iilI1I(1705, "Lo*N")]) iilI1I(921, "i@xn") === "ffXpI" ? console[iilI1I(1148, "Mg$B")]("" + iIlliI[iilI1I(1298, "8O3M")]?.[iilI1I(1741, "bLYY")]) : Iil1i1[iilI1I(526, "hfm5")]("" + (IIii11[iilI1I(633, "zIDY")] || iliIl1[iilI1I(600, "rWnN")] || Ii1il1["message"]));else iIlliI["errMsg"] || iIlliI["msg"] ? iilI1I(1118, "RaO3") !== IlIiIi[iilI1I(833, "hfm5")] ? l1l1i1[iilI1I(276, "W5fK")] = i1iiI[iilI1I(311, "11dd")] : console[iilI1I(1764, "@Kqq")]("" + (iIlliI[iilI1I(398, "yGNi")] || iIlliI[iilI1I(430, "LzrV")])) : console[iilI1I(464, "*RZC")]("\u2753" + iIiIll + " " + JSON[iilI1I(1596, "[)vG")](iIlliI));
        }
        break;
      case IlIiIi["Moajt"]:
        if (iIlliI["code"] === 0 && IlIiIi[iilI1I(1130, "il$L")](iIlliI[iilI1I(1275, "RCrL")]?.["bizCode"], 0)) $["farmHot"] = ![], console[iilI1I(369, "LzrV")]("\u2705 \u79CD\u690D\u6210\u529F\n"), $[iilI1I(305, "yGNi")][iilI1I(905, "WM2J")](iilI1I(1052, "*RZC"));else {
          if (iIlliI[iilI1I(299, "bseJ")]?.[iilI1I(1056, "zIDY")]) IlIiIi[iilI1I(378, "z%%b")](IlIiIi["knAOb"], IlIiIi["UhOFW"]) ? (console[iilI1I(602, "KYtB")](iilI1I(763, "Gr0r") + iIlliI[iilI1I(343, "2aji")]?.["bizMsg"] + "\n"), $[iilI1I(871, "oyv$")][iilI1I(1249, "RaO3")](IlIiIi["PgpuY"])) : (Iilll1["t"] = ll11I[iilI1I(1664, "sFII")](), iIi1I["t"] = liIIl["t"]);else {
            if (iIlliI[iilI1I(825, "RaO3")]) {
              if (IlIiIi["MbniK"](iilI1I(1014, "kRS["), "IITiB")) console[iilI1I(1235, "FwYB")]("\u274C \u79CD\u690D\u5931\u8D25\uFF1A" + iIlliI[iilI1I(1578, "@Kqq")] + "\n"), $[iilI1I(825, "RaO3")]["insert"](iilI1I(1048, "i@xn"));else {
                let llIiII = iilI1I(1386, "TJ2U") + IlI1Il + "g\uFF0C" + l1il1l(liIil, 100);
                if (IllI1I[iilI1I(1510, "aH6A")]) llIiII += "\uFF0C\u5956\u52B1\u3010" + liIii[iilI1I(531, "%7#J")]("\u3001") + "\u3011";
                II1ll1["log"](llIiII);
              }
            } else iilI1I(904, "$XDD") !== IlIiIi[iilI1I(466, "bseJ")] ? console["log"]("\u2753" + iIiIll + " " + JSON[iilI1I(839, "yNfK")](iIlliI)) : (delete llIIi1["data"], delete iI1IlI[iilI1I(337, "W5fK")]["Content-Type"]);
          }
        }
        break;
      case IlIiIi[iilI1I(278, "a9Rj")]:
        if (iIlliI[iilI1I(1636, "yNfK")] === 0 && IlIiIi["UTeSD"](iIlliI[iilI1I(1561, "i@xn")]?.[iilI1I(1719, "0%so")], 0)) {
          const lIl111 = iIlliI[iilI1I(1787, "UNVx")]?.[iilI1I(1323, "RaO3")],
            {
              currentProcess: Ilil,
              updateStage: i1IIli,
              treeFullStage: lI111,
              finished: iiliIl,
              waterNum: IiIl1I,
              bottleWater: i1IIll,
              stagePrize = null
            } = lIl111;
          $[iilI1I(922, "[)vG")] = i1IIll;
          let iIiIi1 = stagePrize?.[iilI1I(617, "iCdQ")](ii11l1 => ii11l1[iilI1I(1195, "bseJ")] + "\u6C34\u6EF4") || [];
          if (i1IIli) {
            if (IlIiIi["MbniK"](IlIiIi[iilI1I(1285, "kRS[")], IlIiIi[iilI1I(1023, "oyv$")])) return IlIiIi["epjOe"](IiIiI, iill1I["floor"](IlIiIi[iilI1I(1005, "[)vG")](Illi1[iilI1I(753, "iCdQ")](), IlIiIi["IhdfI"](l1iiIl + 1, lIIi1i))));else {
              let li1lii = iilI1I(1032, "lc(%") + IiIl1I + "g\uFF0C" + getGrowthWord(lI111, 100);
              if (iIiIi1[iilI1I(1737, "LzrV")]) li1lii += iilI1I(679, "WM2J") + iIiIi1[iilI1I(1038, "Lo*N")]("\u3001") + "\u3011";
              console["log"](li1lii);
            }
          } else "ntPzg" === IlIiIi["zPPZr"] ? lI1l11[iilI1I(1764, "@Kqq")]("" + (II11l[iilI1I(1639, "0%so")] || II11i["msg"] || iI1Iii["message"])) : console[iilI1I(816, "ekwl")](iilI1I(1609, "oyv$") + IiIl1I + "g\uFF0C" + getGrowthWord(lI111, Ilil));
          (iiliIl || lI111 === 5) && ($[iilI1I(1476, "ekwl")] = ![], console[iilI1I(709, "[)vG")]("\n\uD83C\uDF89 \u679C\u6811\u6210\u719F\u4E86~"), await notify["sendNotify"]($[iilI1I(1072, "ekwl")] + iilI1I(1326, "7%iy"), "\u3010\u4EAC\u4E1C\u8D26\u53F7" + $["index"] + "\u3011" + $["UserName"] + iilI1I(1646, "SmzW")));
        } else {
          if (iIlliI[iilI1I(1334, "rWnN")] || iIlliI["msg"] || iIlliI[iilI1I(1733, "SqLq")]) {
            if (IlIiIi[iilI1I(1721, "WM2J")](IlIiIi[iilI1I(1504, "RCrL")], iilI1I(1026, "sFII"))) console["log"]("" + (iIlliI[iilI1I(1780, "bLYY")] || iIlliI["msg"] || iIlliI[iilI1I(1254, "2Sez")]));else {
              let ilI1l = lilII1["data"]?.["result"]?.["waterRainPrize"]?.["map"](I1l11 => "" + I1l11[iilI1I(1113, "7%iy")] + I1l11[iilI1I(579, "yGNi")]);
              iill1["log"]("> \u9886\u53D6\u6210\u529F\uFF0C\u83B7\u5F97\u3010" + ilI1l[iilI1I(465, "sFII")]("\u3001") + "\u3011");
            }
          } else iIlliI["data"]?.[iilI1I(664, "Mg$B")] ? iilI1I(1462, "yGNi") !== IlIiIi[iilI1I(1659, "z%%b")] ? (IiiI1[iilI1I(1155, "%7#J")][IlIiIi[iilI1I(1672, "Mg$B")]] = iilI1I(1304, "OSrY") + lilII, IIIiI[iilI1I(789, "RCrL")][iilI1I(565, "0%so")] = "https://lotterydraw-new.jd.com", iii1i1["headers"][IlIiIi["qCiQa"]] = IlIiIi["FxJAO"]) : (console["log"](iIlliI[iilI1I(1749, "7%iy")]?.["bizMsg"]), ["\u6210\u719F", iilI1I(830, "B%6T")][iilI1I(721, "OSrY")](lIiIIi => iIlliI[iilI1I(909, "yNfK")]["bizMsg"][iilI1I(405, "8O3M")](lIiIIi)) && ($[iilI1I(1788, "RaO3")] = ![])) : console["log"]("\u2753" + iIiIll + " " + JSON["stringify"](iIlliI));
        }
        break;
      case IlIiIi["RdiPv"]:
        if (iIlliI["code"] === 0 && iIlliI["data"]?.["bizCode"] === 0) iilI1I(1264, "@Kqq") !== IlIiIi["KmQFy"] ? (lliii1[iilI1I(1244, "ekwl")] = Iiii1["data"], lIIili["farmHot"] = ![]) : $[iilI1I(940, "TJ2U")] = iIlliI["data"]?.[iilI1I(1029, "sFII")];else {
          if (iIlliI[iilI1I(584, "SHv]")]?.[iilI1I(1656, "aH6A")]) IlIiIi[iilI1I(352, "SmzW")] !== "OHfLs" ? console[iilI1I(369, "LzrV")]("" + iIlliI[iilI1I(1745, "zIDY")]?.[iilI1I(629, "0%so")]) : (l1l11i[iilI1I(1235, "FwYB")]("" + (l1iIl[iilI1I(729, "W5fK")] || illIll[iilI1I(316, "Lo*N")])), iIli1I["farmHot"] = !![]);else iIlliI[iilI1I(1079, "OSrY")] || iIlliI["msg"] ? console["log"]("" + (iIlliI[iilI1I(1401, "iCdQ")] || iIlliI[iilI1I(1511, "hfm5")])) : console[iilI1I(1170, "a9Rj")]("\u2753" + iIiIll + " " + JSON["stringify"](iIlliI));
        }
        break;
      case IlIiIi[iilI1I(1218, "i@xn")]:
        if (iIlliI[iilI1I(1574, "LzrV")] === 0 && IlIiIi[iilI1I(442, "11dd")](iIlliI["data"]?.[iilI1I(1062, "z%%b")], 0)) $[iilI1I(1481, "SqLq")] = iIlliI[iilI1I(585, "il$L")]?.[iilI1I(555, "oyv$")];else {
          if (IlIiIi["GpWMC"](iIlliI["data"]?.["bizCode"], 6004)) $["farmHot"] = !![], console[iilI1I(1472, "W5fK")]("" + iIlliI[iilI1I(328, "lc(%")]["bizMsg"]);else {
            if (iIlliI[iilI1I(1561, "i@xn")]?.[iilI1I(936, "2aji")]) IlIiIi[iilI1I(863, "il$L")] === IlIiIi[iilI1I(685, "sFII")] ? Ii1ili[iilI1I(602, "KYtB")](iI1Ii1[iilI1I(1172, "dK9O")]?.["bizMsg"]) : console[iilI1I(1473, "8O3M")]("" + iIlliI["data"]?.[iilI1I(1668, "$XDD")]);else iIlliI[iilI1I(393, "hfm5")] || iIlliI["msg"] ? console["log"]("" + (iIlliI[iilI1I(398, "yGNi")] || iIlliI["msg"])) : console[iilI1I(416, "a4Kz")]("\u2753" + iIiIll + " " + JSON[iilI1I(255, "SHv]")](iIlliI));
          }
        }
        break;
      case iilI1I(1698, "Gr0r"):
        if (iIlliI[iilI1I(847, "bLYY")] === 0 && IlIiIi[iilI1I(889, "RaO3")](iIlliI[iilI1I(1688, "[)vG")]?.[iilI1I(1313, "%7#J")], 0)) $[iilI1I(1338, "yGNi")] = iIlliI[iilI1I(581, "OSrY")]?.[iilI1I(841, "iCdQ")];else {
          if (iIlliI[iilI1I(585, "il$L")]?.[iilI1I(591, "bLYY")] === 6004) $["farmHot"] = !![], console["log"]("" + iIlliI["data"][iilI1I(836, "ekwl")]);else {
            if (iIlliI[iilI1I(1787, "UNVx")]?.[iilI1I(527, "rWnN")]) console[iilI1I(1193, "%7#J")]("" + iIlliI[iilI1I(1749, "7%iy")]?.["bizMsg"]);else iIlliI[iilI1I(1201, "B%6T")] || iIlliI[iilI1I(1740, "U2fK")] ? console["log"]("" + (iIlliI["errMsg"] || iIlliI["msg"])) : console[iilI1I(1019, "bseJ")]("\u2753" + iIiIll + " " + JSON["stringify"](iIlliI));
          }
        }
        break;
      case IlIiIi[iilI1I(381, "RCrL")]:
        if (IlIiIi[iilI1I(800, "a4Kz")](iIlliI[iilI1I(408, "UNVx")], 0) && IlIiIi[iilI1I(1562, "OSrY")](iIlliI[iilI1I(311, "11dd")]?.["bizCode"], 0)) IlIiIi[iilI1I(1055, "ekwl")](iilI1I(614, "SmzW"), IlIiIi[iilI1I(1450, "B%6T")]) ? iili1[iilI1I(649, "exYa")](iilI1I(843, "FwYB") + II11ii + " " + Iil1iI[iilI1I(1439, "oyv$")](II11il)) : ($[iilI1I(272, "rWnN")] = ![], $["farm_assist_init_info"] = iIlliI[iilI1I(581, "OSrY")]);else {
          if (iIlliI["data"]?.[iilI1I(936, "2aji")]) {} else iIlliI[iilI1I(517, "UNVx")] || iIlliI["msg"] ? console[iilI1I(1415, "RCrL")]("" + (iIlliI["errMsg"] || iIlliI["msg"])) : console[iilI1I(1148, "Mg$B")]("\u2753" + iIiIll + " " + JSON[iilI1I(1260, "a9Rj")](iIlliI));
        }
        break;
      case IlIiIi[iilI1I(289, "lc(%")]:
        if (IlIiIi["EIwyZ"](iIlliI[iilI1I(1605, "il$L")], 0) && iIlliI[iilI1I(739, "B%6T")]?.["bizCode"] === 0) console[iilI1I(1193, "%7#J")]("> \u9886\u53D6\u6210\u529F");else {
          if (iIlliI["data"]?.["bizMsg"]) console[iilI1I(826, "0%so")]("" + iIlliI[iilI1I(1020, "SmzW")]?.["bizMsg"]);else iIlliI[iilI1I(385, "%7#J")] || iIlliI[iilI1I(1066, "dK9O")] ? IlIiIi[iilI1I(1132, "@Kqq")](IlIiIi["XnVrx"], iilI1I(891, "hfm5")) ? console["log"]("" + (iIlliI["errMsg"] || iIlliI["msg"])) : I1iilI[iilI1I(1593, "SmzW")](iilI1I(348, "yNfK") + (Ii1II1[iilI1I(1670, "hfm5")] || lilili)) : console["log"]("\u2753" + iIiIll + " " + JSON["stringify"](iIlliI));
        }
        break;
      case iilI1I(727, "bseJ"):
      case iilI1I(275, "dK9O"):
        if (iIlliI["code"] === 0 && iIlliI["data"]?.[iilI1I(1265, "sFII")] === 0) IlIiIi[iilI1I(644, "SHv]")]("XUWTE", "XUWTE") ? console["log"](IlIiIi[iilI1I(1533, "exYa")]) : IlI1l1[liIliI] = llii1I[iiIiIi];else {
          if (iIlliI[iilI1I(1620, "yGNi")]?.[iilI1I(787, "B%6T")] === 6004) $[iilI1I(1278, "W5fK")] = !![], console[iilI1I(1222, "11dd")]("> \u4EFB\u52A1\u5931\u8D25 " + iIlliI[iilI1I(1717, "kRS[")][iilI1I(1615, "il$L")]);else {
            if (iIlliI["data"]?.[iilI1I(558, "a9Rj")]) console[iilI1I(1635, "oyv$")]("> \u4EFB\u52A1\u5931\u8D25 " + iIlliI["data"][iilI1I(785, "kRS[")]);else {
              if (iIlliI["errMsg"] || iIlliI[iilI1I(1034, "i@xn")]) console[iilI1I(1096, "7%iy")](iilI1I(1332, "Lo*N") + (iIlliI[iilI1I(1074, "lc(%")] || iIlliI["msg"]));else {
                if (IlIiIi[iilI1I(801, "kRS[")](IlIiIi[iilI1I(586, "z%%b")], iilI1I(1521, "bLYY"))) {
                  var li1li1 = IlIiIi["lIBpS"](IiIlI[iilI1I(520, "z%%b")](), IlIiIi[iilI1I(844, "zIDY")](iIlI1i[iilI1I(1103, "U2fK")], iII1Il)) | 0;
                  IIIliI += iII1Ii[li1li1], iIlI1l[li1li1] = llIill[IlIiIi["IhdfI"](IlIiIi[iilI1I(844, "zIDY")](l1IIii[iilI1I(920, "KYtB")], lIIi1I), 1)];
                } else console["log"](iilI1I(1274, "RCrL") + iIiIll + " " + JSON[iilI1I(580, "kRS[")](iIlliI));
              }
            }
          }
        }
        break;
      case iilI1I(546, "RCrL"):
        if (IlIiIi[iilI1I(675, "OSrY")](iIlliI["code"], 0) && IlIiIi["GpWMC"](iIlliI[iilI1I(1787, "UNVx")]?.["bizCode"], 0)) {
          if (IlIiIi[iilI1I(1769, "lc(%")]("gGANu", IlIiIi[iilI1I(293, "zIDY")])) lIIiII[iilI1I(457, "dK9O")]("" + (i1iIlI["errMsg"] || li111["msg"] || liI1lI["message"]));else {
            let ii11li = iIlliI[iilI1I(343, "2aji")]?.[iilI1I(426, "bseJ")]?.[iilI1I(756, "il$L")]?.[iilI1I(656, "WM2J")](il1lIl => "" + il1lIl[iilI1I(1133, "RCrL")] + (award_map[il1lIl[iilI1I(312, "[)vG")]] || "[type=" + awardType + "]"));
            console[iilI1I(1318, "yGNi")](iilI1I(935, "FwYB") + ii11li[iilI1I(395, "OSrY")]("\u3001") + "\u3011");
          }
        } else {
          if (iIlliI[iilI1I(1726, "oyv$")] || iIlliI["msg"]) console[iilI1I(709, "[)vG")](iilI1I(463, "hfm5") + (iIlliI["errMsg"] || iIlliI["msg"]));else iIlliI[iilI1I(1570, "a9Rj")]?.[iilI1I(237, "TJ2U")] ? console[iilI1I(778, "TJ2U")](iilI1I(1018, "7%iy") + iIlliI[iilI1I(1745, "zIDY")]?.["bizMsg"]) : IlIiIi[iilI1I(411, "KYtB")](iilI1I(1584, "yNfK"), iilI1I(392, "Gr0r")) ? console[iilI1I(1202, "kRS[")](iilI1I(572, "rWnN") + iIiIll + " " + JSON["stringify"](iIlliI)) : iliIil[iilI1I(369, "LzrV")](iliIii[iilI1I(285, "aH6A")]?.[iilI1I(1004, "B%6T")]);
        }
        break;
      case iilI1I(1207, "SmzW"):
        if (IlIiIi[iilI1I(650, "yNfK")](iIlliI[iilI1I(782, "zIDY")], 0) && iIlliI[iilI1I(1298, "8O3M")]?.[iilI1I(1640, "11dd")] === 0) IlIiIi[iilI1I(764, "TJ2U")](IlIiIi[iilI1I(852, "0%so")], iilI1I(703, "WM2J")) ? $[iilI1I(1550, "%7#J")] = iIlliI[iilI1I(1570, "a9Rj")] : (this["_algoKey"] = llIl1i[iilI1I(1546, "TJ2U")][iilI1I(1430, "2aji")]["parse"](IlIiIi[iilI1I(1085, "sFII")]), this[iilI1I(488, "2Sez")] = llIl1l[iilI1I(995, "oyv$")]["Utf8"][iilI1I(681, "dK9O")](IlIiIi["UNqHI"]), this[iilI1I(448, "KYtB")] = {
          4.2: {}
        }, this[iilI1I(1744, "FwYB")] = {
          4.2: {}
        }, this[iilI1I(1683, "8O3M")] = new IiiII(), this["_latestAppVersionData"] = {
          "build": Iiil["getLatestAppBuildVersion"](),
          "version": IIIli[iilI1I(689, "U2fK")]()
        }, this["_latestIOSVersion"] = ii1i1[iilI1I(1455, "iCdQ")]());else {
          if (iIlliI[iilI1I(1580, "il$L")] || iIlliI[iilI1I(264, "z%%b")] || iIlliI[iilI1I(1537, "iCdQ")]) console["log"]("" + (iIlliI[iilI1I(1555, "*RZC")] || iIlliI["msg"] || iIlliI[iilI1I(797, "sFII")]));else iIlliI["data"]?.[iilI1I(1157, "SqLq")] ? console[iilI1I(706, "i@xn")](iIlliI[iilI1I(286, "Gr0r")]?.["bizMsg"]) : console[iilI1I(798, "bLYY")]("\u2753" + iIiIll + " " + JSON["stringify"](iIlliI));
        }
        break;
      case IlIiIi["tcHoq"]:
        if (iIlliI[iilI1I(1340, "ekwl")] === 0 && IlIiIi[iilI1I(344, "Lo*N")](iIlliI["data"]?.[iilI1I(1541, "TJ2U")], 0)) {} else {
          if (iIlliI[iilI1I(661, "aH6A")] || iIlliI[iilI1I(610, "bseJ")] || iIlliI[iilI1I(499, "[)vG")]) {
            if (IlIiIi[iilI1I(1616, "2Sez")] === IlIiIi[iilI1I(834, "a4Kz")]) console["log"]("" + (iIlliI["errMsg"] || iIlliI["msg"] || iIlliI[iilI1I(611, "exYa")]));else {
              if (IlIiIi[iilI1I(1588, "a4Kz")](i1lii, "x")) IIlI11 += iIIll1[iilI1I(937, "8O3M")](llIIII["floor"](IlIiIi[iilI1I(794, "[)vG")](ilI11I[iilI1I(884, "*RZC")](), ili1I[iilI1I(1189, "*RZC")])));else Ili1II == "X" ? iilIIl += i1Iili["charAt"](i1Iill[iilI1I(1722, "8O3M")](IlIiIi["hHRvK"](l1IiI[iilI1I(818, "SmzW")](), l1lill[iilI1I(1377, "B%6T")])))[iilI1I(915, "oyv$")]() : i1li1 += iIIllI;
            }
          } else iIlliI["data"]?.[iilI1I(1157, "SqLq")] ? console["log"](iIlliI[iilI1I(510, "Lo*N")]?.[iilI1I(629, "0%so")]) : console[iilI1I(1170, "a9Rj")]("\u2753" + iIiIll + " " + JSON[iilI1I(1596, "[)vG")](iIlliI));
        }
        break;
      case IlIiIi[iilI1I(655, "0%so")]:
        if (iIlliI["code"] === 0 && iIlliI[iilI1I(409, "hfm5")]?.["bizCode"] === 0) {
          let lIl11l = iIlliI[iilI1I(343, "2aji")]?.[iilI1I(1226, "Mg$B")]?.[iilI1I(908, "2aji")]?.[iilI1I(1194, "7%iy")](iiii1i => "" + iiii1i[iilI1I(616, "aH6A")] + iiii1i["prizeDesc"]);
          console[iilI1I(1495, "zIDY")]("> \u9886\u53D6\u6210\u529F\uFF0C\u83B7\u5F97\u3010" + lIl11l["join"]("\u3001") + "\u3011");
        } else {
          if (iIlliI[iilI1I(529, "[)vG")] || iIlliI["msg"] || iIlliI[iilI1I(262, "il$L")]) console["log"]("" + (iIlliI[iilI1I(896, "7%iy")] || iIlliI[iilI1I(335, "11dd")] || iIlliI["message"]));else iIlliI[iilI1I(680, "a4Kz")]?.[iilI1I(597, "%7#J")] ? console[iilI1I(1135, "OSrY")](iIlliI[iilI1I(1745, "zIDY")]?.[iilI1I(1738, "exYa")]) : console[iilI1I(526, "hfm5")]("\u2753" + iIiIll + " " + JSON[iilI1I(255, "SHv]")](iIlliI));
        }
        break;
      case "dongDongFarmSignHome":
        if (iIlliI[iilI1I(857, "Gr0r")] === 0 && iIlliI[iilI1I(433, "%7#J")]) IlIiIi["oxNXV"] === iilI1I(452, "Gr0r") ? $[iilI1I(796, "SHv]")] = iIlliI[iilI1I(1561, "i@xn")] : Iiilli[iilI1I(691, "sFII")](iilI1I(1381, "7%iy") + IIlIi + iilI1I(472, "LzrV") + (ili11i[iilI1I(271, "8O3M")] || iiIi1l));else {
          if (iIlliI[iilI1I(398, "yGNi")] || iIlliI["msg"] || iIlliI[iilI1I(925, "i@xn")]) IlIiIi["fSeZF"](IlIiIi[iilI1I(562, "%7#J")], iilI1I(1119, "RaO3")) ? console[iilI1I(1321, "B%6T")]("" + (iIlliI[iilI1I(1183, "a4Kz")] || iIlliI["msg"] || iIlliI["message"])) : (lI11I1[iilI1I(635, "a9Rj")] = ![], l1il11[iilI1I(1019, "bseJ")]("\u2705 \u79CD\u690D\u6210\u529F\n"), IiI1[iilI1I(1284, "7%iy")][iilI1I(587, "U2fK")](iilI1I(934, "LzrV")));else iIlliI[iilI1I(1749, "7%iy")]?.["bizMsg"] ? IlIiIi[iilI1I(1508, "TJ2U")](IlIiIi[iilI1I(1438, "2aji")], IlIiIi[iilI1I(1763, "yNfK")]) ? console["log"](iIlliI[iilI1I(1506, "TJ2U")]?.["bizMsg"]) : lIli1i[iilI1I(1318, "yGNi")]("> \u4EFB\u52A1\u5931\u8D25 " + IIIII1 + " " + I1lIlI[iilI1I(1527, "W5fK")](ii1ill)) : console[iilI1I(1302, "aH6A")]("\u2753" + iIiIll + " " + JSON[iilI1I(734, "bseJ")](iIlliI));
        }
        break;
      case iilI1I(571, "*RZC"):
        if (iIlliI[iilI1I(847, "bLYY")] === 0 && iIlliI[iilI1I(584, "SHv]")]) console["log"](iilI1I(1364, "11dd") + iIlliI[iilI1I(311, "11dd")]?.[iilI1I(1408, "lc(%")] + "\u3011");else {
          if (iIlliI[iilI1I(633, "zIDY")]) $[iilI1I(298, "sFII")] = !![], console["log"](iilI1I(1463, "W5fK") + iIlliI["errMsg"]);else iIlliI[iilI1I(1184, "sFII")]?.[iilI1I(1615, "il$L")] ? console[iilI1I(416, "a4Kz")](iilI1I(1545, "hfm5") + iIlliI["data"]?.[iilI1I(597, "%7#J")]) : iilI1I(621, "RCrL") === IlIiIi[iilI1I(605, "LzrV")] ? i1i1Ii[iilI1I(709, "[)vG")]("\u2753" + lllii + " " + iI11Ii[iilI1I(364, "WM2J")](iIII1l)) : console[iilI1I(1170, "a9Rj")]("> \u7B7E\u5230\u5931\u8D25 " + iIiIll + " " + JSON[iilI1I(1260, "a9Rj")](iIlliI));
        }
        break;
      case "wheelsHome":
        if (IlIiIi["ltDOg"](iIlliI[iilI1I(1289, "2aji")], 0) && iIlliI[iilI1I(299, "bseJ")]) $[iilI1I(1016, "dK9O")] = iIlliI?.[iilI1I(1561, "i@xn")]?.[iilI1I(533, "LzrV")];else {
          if (iIlliI[iilI1I(606, "KYtB")] || iIlliI[iilI1I(307, "a4Kz")] || iIlliI[iilI1I(345, "bseJ")]) iilI1I(394, "exYa") === iilI1I(1723, "rWnN") ? ill11i[iilI1I(778, "TJ2U")]("\u2753" + lllill + " " + ill11l[iilI1I(1347, "il$L")](I1lIiI)) : console["log"]("" + (iIlliI[iilI1I(1201, "B%6T")] || iIlliI[iilI1I(820, "sFII")] || iIlliI[iilI1I(1271, "zIDY")]));else iIlliI[iilI1I(1611, "*RZC")]?.["bizMsg"] ? console["log"](iIlliI[iilI1I(911, "$XDD")]?.[iilI1I(382, "yGNi")]) : console[iilI1I(457, "dK9O")]("\u2753" + iIiIll + " " + JSON["stringify"](iIlliI));
        }
        break;
      case iilI1I(845, "dK9O"):
        if (iIlliI["code"] === 0 && iIlliI[iilI1I(680, "a4Kz")]) {
          if (IlIiIi[iilI1I(990, "zIDY")](IlIiIi[iilI1I(1526, "W5fK")], IlIiIi["zFRvu"])) $[iilI1I(1380, "7%iy")] = iIlliI?.[iilI1I(962, "Mg$B")];else {
            let il1Iil = illIi1["data"]?.["result"]?.[iilI1I(1352, "7%iy")]?.[iilI1I(1761, "bseJ")](ii11ll => "" + ii11ll[iilI1I(1714, "i@xn")] + (i1l1iI[ii11ll[iilI1I(1665, "SmzW")]] || iilI1I(1007, "aH6A") + liil1l + "]"));
            lI1lil[iilI1I(1318, "yGNi")](iilI1I(693, "KYtB") + il1Iil["join"]("\u3001") + "\u3011");
          }
        } else {
          if (iIlliI[iilI1I(1444, "SqLq")] || iIlliI["msg"] || iIlliI["message"]) console[iilI1I(649, "exYa")]("" + (iIlliI[iilI1I(1603, "11dd")] || iIlliI[iilI1I(1269, "iCdQ")] || iIlliI["message"]));else {
            if (iIlliI[iilI1I(1184, "sFII")]?.["bizMsg"]) console[iilI1I(1321, "B%6T")](iIlliI[iilI1I(680, "a4Kz")]?.[iilI1I(1774, "bseJ")]);else {
              if ("kMuNb" !== iilI1I(1357, "11dd")) console["log"]("\u2753" + iIiIll + " " + JSON[iilI1I(1791, "lc(%")](iIlliI));else switch (lliilI) {
                case 1:
                  return iilI1I(853, "hfm5");
                case 2:
                  return IlIiIi["SCYVD"];
                case 3:
                  return IlIiIi[iilI1I(1297, "UNVx")];
                case 4:
                  return "\u679C\u6811\u7ED3\u679C\u4E86";
                case 5:
                  return iilI1I(660, "W5fK");
              }
            }
          }
        }
        break;
      case IlIiIi[iilI1I(1336, "FwYB")]:
        if (IlIiIi[iilI1I(952, "aH6A")](iIlliI[iilI1I(642, "WM2J")], 0) && iIlliI[iilI1I(433, "%7#J")]) IlIiIi[iilI1I(1687, "%7#J")]("LESJJ", IlIiIi[iilI1I(1449, "a9Rj")]) ? (lIII11["log"](iilI1I(1410, "2aji") + IiilI[iilI1I(584, "SHv]")]?.[iilI1I(237, "TJ2U")] + "\n"), ii1I11[iilI1I(630, "kRS[")][iilI1I(1566, "hfm5")](iilI1I(341, "[)vG"))) : console[iilI1I(1446, "UNVx")](iilI1I(379, "sFII"));else {
          if (iIlliI["errMsg"] || iIlliI[iilI1I(1337, "SHv]")] || iIlliI[iilI1I(812, "z%%b")]) console["log"]("" + (iIlliI["errMsg"] || iIlliI["msg"] || iIlliI[iilI1I(1373, "KYtB")]));else {
            if (iIlliI["data"]?.[iilI1I(665, "8O3M")]) {
              if (IlIiIi["HvRnu"](iilI1I(983, "7%iy"), iilI1I(552, "iCdQ"))) console[iilI1I(816, "ekwl")](iIlliI[iilI1I(1611, "*RZC")]?.["bizMsg"]);else {
                const iI1iIl = [IlIiIi[iilI1I(615, "aH6A")], iilI1I(870, "zIDY"), IlIiIi[iilI1I(899, "SqLq")], IlIiIi[iilI1I(1557, "@Kqq")]],
                  lili1i = iI1iIl[iilI1I(1587, "oyv$")](iI1Ii => !i1lIl1[iI1Ii]);
                if (lili1i["length"] > 0) return liIli1[iilI1I(1193, "%7#J")](iilI1I(1011, "Gr0r") + lili1i["join"](", ")), IIIlIl;
              }
            } else console["log"]("\u2753" + iIiIll + " " + JSON[iilI1I(653, "B%6T")](iIlliI));
          }
        }
        break;
      case "wheelsLottery":
        if (IlIiIi[iilI1I(410, "rWnN")](iIlliI["code"], 0) && iIlliI[iilI1I(960, "oyv$")]) {
          let IiIIIl = iIlliI[iilI1I(260, "FwYB")]?.[iilI1I(1223, "$XDD")];
          switch (IiIIIl) {
            case 0:
            case null:
              console[iilI1I(798, "bLYY")](iilI1I(1796, "Mg$B"));
              break;
            case 1:
            case 2:
              console[iilI1I(1472, "W5fK")](iilI1I(1667, "OSrY") + iIlliI[iilI1I(1570, "a9Rj")]?.["prizeName"]);
              break;
            case 18:
              console[iilI1I(1222, "11dd")](iilI1I(1166, "ekwl") + iIlliI[iilI1I(343, "2aji")]?.["prizeName"]["replace"]("\u6C34\u6EF4", "") + "\uD83D\uDCA7");
              break;
            default:
              console[iilI1I(1235, "FwYB")]("> \u62BD\u5956\u83B7\u5F97 " + iIlliI["data"]?.[iilI1I(1458, "yGNi")]);
              return;
          }
        } else {
          if (iIlliI[iilI1I(349, "8O3M")] || iIlliI["msg"] || iIlliI[iilI1I(630, "kRS[")]) {
            if (IlIiIi["yfzDk"] !== IlIiIi[iilI1I(1178, "Mg$B")]) console[iilI1I(416, "a4Kz")]("" + (iIlliI["errMsg"] || iIlliI[iilI1I(523, "@Kqq")] || iIlliI[iilI1I(1242, "SmzW")]));else return i1lIlI[iilI1I(526, "hfm5")](iilI1I(1291, "W5fK") + l1lliI["join"](", ")), I1I1iI;
          } else iIlliI[iilI1I(351, "WM2J")]?.[iilI1I(715, "a4Kz")] ? iilI1I(567, "B%6T") !== iilI1I(1177, "i@xn") ? i1i11l[iilI1I(1199, "exYa")] = i1i11i[iilI1I(739, "B%6T")] : console[iilI1I(1446, "UNVx")](iIlliI["data"]?.["bizMsg"]) : console[iilI1I(882, "yNfK")]("\u2753" + iIiIll + " " + JSON["stringify"](iIlliI));
        }
        break;
    }
  } catch (iI1Il) {
    console["log"](iilI1I(545, "bseJ") + iIiIll + iilI1I(472, "LzrV") + (iI1Il["message"] || iI1Il));
  }
}
async function sendRequest(i111il) {
  const i11lii = I1iI,
    i111ii = {
      "lwoyv": "farm_home",
      "MULaP": "c57f6",
      "RVyMI": i11lii(537, "8O3M"),
      "qZYFz": i11lii(450, "11dd"),
      "kOsvw": i11lii(1712, "il$L"),
      "tTCqM": i11lii(1743, "7%iy"),
      "XzBbK": i11lii(1754, "aH6A"),
      "cwGNj": i11lii(1396, "0%so"),
      "lfOmF": "farm_water",
      "kEGIT": i11lii(1692, "zIDY"),
      "MqNqK": "ttt7",
      "tVQuq": "farm_assist_init_info",
      "wkugy": i11lii(690, "11dd"),
      "VvMjx": i11lii(755, "SHv]"),
      "GukUn": i11lii(445, "KYtB"),
      "hSneE": i11lii(570, "SmzW"),
      "iOFHR": "base64",
      "uterc": "farm_task_receive_award",
      "DzUOv": i11lii(1487, "aH6A"),
      "JWLAw": i11lii(1035, "WM2J"),
      "rMWzm": i11lii(604, "yNfK"),
      "OFUfz": i11lii(1461, "8O3M"),
      "VVyBw": i11lii(1732, "RCrL"),
      "KTGSr": i11lii(1003, "SHv]"),
      "AOWlS": i11lii(784, "RaO3"),
      "jCOcU": i11lii(636, "FwYB"),
      "YxNkM": i11lii(745, "11dd"),
      "MxDVT": i11lii(1331, "zIDY"),
      "SlkLP": i11lii(413, "rWnN"),
      "IKPGw": i11lii(1626, "LzrV"),
      "pbolX": i11lii(1236, "Gr0r"),
      "FJtCR": i11lii(1399, "bseJ"),
      "zEkvr": i11lii(1015, "LzrV"),
      "VhkiL": i11lii(832, "2Sez"),
      "kCmQk": i11lii(634, "WM2J"),
      "ujsVX": i11lii(1290, "a9Rj"),
      "mdfZj": i11lii(1367, "SmzW"),
      "ExZDr": i11lii(1563, "zIDY"),
      "erPEA": function (li1ll1, iI1II) {
        return li1ll1 !== iI1II;
      },
      "wjSUM": "Ywdcp",
      "jYXLx": "gzip, deflate, br",
      "fjxrl": i11lii(1255, "SHv]"),
      "DRlUd": i11lii(1405, "rWnN"),
      "pzRtT": "api.m.jd.com",
      "CCJSm": i11lii(628, "aH6A"),
      "pBdMJ": i11lii(676, "RaO3"),
      "EtnAc": i11lii(528, "@Kqq"),
      "eYsZT": i11lii(1772, "KYtB"),
      "wsWSt": i11lii(1355, "TJ2U"),
      "eogJg": function (lIil1I, IiIIII) {
        return lIil1I < IiIIII;
      },
      "WsdMf": "OOedE",
      "kzSGo": function (i111iI, lIllII) {
        return i111iI === lIllII;
      },
      "JIeIl": function (IIilIl, IIilIi) {
        return IIilIl !== IIilIi;
      },
      "WCCSN": function (l1Iiii, l1Iiil) {
        return l1Iiii >= l1Iiil;
      },
      "jkNEY": function (I1li1I, IIiII) {
        return I1li1I === IIiII;
      },
      "ndOvZ": i11lii(718, "UNVx"),
      "qhajP": i11lii(560, "%7#J"),
      "QQxvE": function (iiiI, I1li11) {
        return iiiI !== I1li11;
      },
      "zoTmF": i11lii(658, "rWnN")
    };
  if ($["runEnd"]) return;
  let lI11i = "",
    ilI11 = null,
    li1llI = null,
    lIil11 = i11lii(762, "W5fK"),
    iIilII = {},
    lIlI1 = {};
  switch (i111il) {
    case i111ii["lwoyv"]:
      lIlI1 = {
        "appId": i111ii[i11lii(1595, "UNVx")],
        "functionId": i11lii(1027, "%7#J"),
        "appid": i111ii[i11lii(1697, "@Kqq")],
        "clientVersion": common["getLatestAppVersion"](),
        "client": i11lii(1403, "hfm5"),
        "body": {
          "version": 3
        },
        "version": i111ii[i11lii(288, "hfm5")],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(309, "SmzW")](lIlI1), lI11i = i111ii[i11lii(1608, "exYa")], ilI11 = iIilII[i11lii(1543, "il$L")];
      break;
    case i111ii[i11lii(596, "ekwl")]:
      lIlI1 = {
        "appId": i111ii[i11lii(259, "hfm5")],
        "functionId": i111ii[i11lii(1028, "exYa")],
        "appid": i111ii[i11lii(573, "11dd")],
        "clientVersion": common[i11lii(540, "kRS[")](),
        "client": i111ii[i11lii(1762, "lc(%")],
        "body": {
          "version": 3
        },
        "version": i111ii[i11lii(1257, "LzrV")],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2["getH5st"](lIlI1), lI11i = i111ii["kOsvw"], ilI11 = iIilII[i11lii(1736, "[)vG")];
      break;
    case i11lii(749, "il$L"):
      lIlI1 = {
        "appId": i111ii[i11lii(1312, "rWnN")],
        "functionId": i111ii["cwGNj"],
        "appid": "signed_wh5",
        "clientVersion": common[i11lii(1512, "0%so")](),
        "client": i111ii[i11lii(1267, "Gr0r")],
        "body": {
          "version": 3,
          "uid": $["plantSkuUid"]
        },
        "version": i11lii(326, "sFII"),
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(991, "bseJ")](lIlI1), lI11i = i11lii(1576, "2Sez"), ilI11 = iIilII[i11lii(236, "i@xn")];
      break;
    case i111ii[i11lii(1266, "SmzW")]:
      lIlI1 = {
        "appId": i111ii[i11lii(890, "OSrY")],
        "functionId": i11lii(419, "kRS["),
        "appid": i11lii(671, "zIDY"),
        "clientVersion": common[i11lii(1351, "dK9O")](),
        "client": "apple",
        "body": {
          "version": 3,
          "waterType": $["waterType"],
          "babelChannel": i111ii[i11lii(987, "a9Rj")],
          "lbsSwitch": ![]
        },
        "version": i111ii[i11lii(449, "$XDD")],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(1790, "exYa")](lIlI1), lI11i = i11lii(1084, "KYtB"), ilI11 = iIilII["paramsData"];
      break;
    case i111ii[i11lii(1406, "[)vG")]:
      lIlI1 = {
        "appId": i11lii(966, "UNVx"),
        "functionId": i11lii(522, "bseJ"),
        "appid": i111ii["RVyMI"],
        "clientVersion": common[i11lii(1569, "yGNi")](),
        "client": i111ii["XzBbK"],
        "body": {
          "version": 3,
          "channel": 0
        },
        "version": i11lii(981, "exYa"),
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(1037, "7%iy")](lIlI1), lI11i = i111ii[i11lii(363, "*RZC")], ilI11 = iIilII[i11lii(1366, "OSrY")];
      break;
    case "farm_task_list":
      lIlI1 = {
        "appId": i11lii(500, "SqLq"),
        "functionId": i11lii(754, "FwYB"),
        "appid": i111ii[i11lii(492, "SmzW")],
        "clientVersion": common["getLatestAppVersion"](),
        "client": i11lii(1080, "SqLq"),
        "body": {
          "version": 3,
          "channel": 0,
          "babelChannel": "ttt7",
          "lbsSwitch": ![]
        },
        "version": i111ii[i11lii(1655, "sFII")],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(1216, "RaO3")](lIlI1), lI11i = i11lii(1114, "SqLq"), ilI11 = iIilII["paramsData"];
      break;
    case i11lii(359, "W5fK"):
      lIlI1 = {
        "appId": i111ii[i11lii(926, "WM2J")],
        "functionId": i11lii(1075, "z%%b"),
        "appid": i111ii[i11lii(662, "aH6A")],
        "clientVersion": common[i11lii(540, "kRS[")](),
        "client": i111ii[i11lii(478, "yNfK")],
        "body": {
          "version": 3
        },
        "version": i11lii(467, "zIDY"),
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(948, "bLYY")](lIlI1), lI11i = i111ii[i11lii(387, "yGNi")], ilI11 = iIilII["paramsData"];
      break;
    case i111ii[i11lii(1724, "%7#J")]:
      lIlI1 = {
        "appId": i111ii[i11lii(1549, "dK9O")],
        "functionId": i111ii[i11lii(627, "lc(%")],
        "appid": i111ii[i11lii(1013, "il$L")],
        "clientVersion": common[i11lii(435, "exYa")](),
        "client": i11lii(910, "11dd"),
        "body": {
          "version": 3
        },
        "version": i11lii(281, "SHv]"),
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(1196, "dK9O")](lIlI1), lI11i = i111ii[i11lii(368, "Mg$B")], ilI11 = iIilII[i11lii(1543, "il$L")];
      break;
    case i111ii["VvMjx"]:
      lIlI1 = {
        "appId": i11lii(883, "Gr0r"),
        "functionId": "farm_task_detail",
        "appid": "signed_wh5",
        "clientVersion": common[i11lii(673, "z%%b")](),
        "client": i11lii(910, "11dd"),
        "body": {
          "version": 3,
          "taskType": $["taskType"],
          "taskId": $[i11lii(815, "11dd")],
          "channel": 0
        },
        "version": i111ii["qZYFz"],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(447, "RCrL")](lIlI1), lI11i = i11lii(1305, "sFII"), ilI11 = iIilII[i11lii(1524, "oyv$")];
      break;
    case "farm_award_detail":
      lIil11 = i111ii["GukUn"], lI11i = i111ii[i11lii(719, "aH6A")], li1llI = {
        "functionId": i11lii(1661, "7%iy"),
        "body": JSON[i11lii(1139, "yGNi")]({
          "version": 3,
          "type": 1
        }),
        "t": Date[i11lii(687, "il$L")](),
        "appid": i11lii(525, "0%so"),
        "client": i11lii(1046, "Mg$B"),
        "clientVersion": common["getLatestAppVersion"]()
      };
      break;
    case i11lii(1660, "SHv]"):
      lIlI1 = {
        "appId": i11lii(1465, "*RZC"),
        "functionId": i11lii(406, "KYtB"),
        "appid": i111ii[i11lii(421, "7%iy")],
        "clientVersion": common[i11lii(315, "Gr0r")](),
        "client": i11lii(1713, "kRS["),
        "body": {
          "version": 3,
          "taskType": $[i11lii(1424, "0%so")],
          "taskId": $[i11lii(1033, "ekwl")],
          "taskInsert": $["taskInsert"],
          "itemId": Buffer[i11lii(1112, "SHv]")]($["taskSourceUrl"], i111ii[i11lii(519, "2aji")])[i11lii(1418, "WM2J")](i111ii[i11lii(244, "U2fK")]),
          "channel": 0
        },
        "version": "4.2",
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(1790, "exYa")](lIlI1), lI11i = "https://api.m.jd.com/client.action", ilI11 = iIilII[i11lii(258, "TJ2U")];
      break;
    case i111ii[i11lii(1657, "hfm5")]:
      lIlI1 = {
        "appId": "33e0f",
        "functionId": i111ii["uterc"],
        "appid": "signed_wh5",
        "clientVersion": common[i11lii(1416, "lc(%")](),
        "client": i11lii(984, "$XDD"),
        "body": {
          "version": 3,
          "taskType": $["taskType"],
          "taskId": $["taskId"],
          "channel": 0
        },
        "version": i111ii[i11lii(324, "yGNi")],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(865, "i@xn")](lIlI1), lI11i = "https://api.m.jd.com/client.action", ilI11 = iIilII["paramsData"];
      break;
    case i111ii[i11lii(1419, "2aji")]:
      lIlI1 = {
        "appId": i111ii["JWLAw"],
        "functionId": i11lii(875, "Gr0r"),
        "appid": i111ii["RVyMI"],
        "clientVersion": common[i11lii(1299, "11dd")](),
        "client": "apple",
        "body": {
          "version": 3
        },
        "version": i111ii["qZYFz"],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(447, "RCrL")](lIlI1), lI11i = i11lii(1559, "U2fK"), ilI11 = iIilII["paramsData"];
      break;
    case i111ii[i11lii(1575, "LzrV")]:
      lIlI1 = {
        "appId": i111ii[i11lii(1591, "rWnN")],
        "functionId": i11lii(1295, "[)vG"),
        "appid": i111ii["VVyBw"],
        "clientVersion": common[i11lii(297, "RaO3")](),
        "client": "apple",
        "body": {
          "linkId": sign_linkId
        },
        "version": i111ii[i11lii(1514, "*RZC")],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st[i11lii(1388, "$XDD")](lIlI1), lI11i = i111ii[i11lii(699, "SmzW")], ilI11 = iIilII[i11lii(913, "8O3M")];
      break;
    case i111ii[i11lii(893, "LzrV")]:
      lIlI1 = {
        "appId": i11lii(1448, "yGNi"),
        "functionId": i11lii(592, "2aji"),
        "appid": i111ii[i11lii(1604, "OSrY")],
        "clientVersion": common[i11lii(540, "kRS[")](),
        "client": "apple",
        "body": {
          "linkId": sign_linkId
        },
        "version": i111ii[i11lii(291, "Mg$B")],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st["getH5st"](lIlI1), lI11i = i11lii(1197, "Mg$B"), ilI11 = iIilII[i11lii(506, "2aji")];
      break;
    case i111ii["wkugy"]:
      lIlI1 = {
        "appId": "c57f6",
        "functionId": i111ii["wkugy"],
        "appid": i11lii(964, "Lo*N"),
        "clientVersion": common[i11lii(1368, "hfm5")](),
        "client": i11lii(460, "Gr0r"),
        "body": {
          "version": 3
        },
        "version": i111ii[i11lii(449, "$XDD")],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2["getH5st"](lIlI1), lI11i = i11lii(1492, "yNfK"), ilI11 = iIilII[i11lii(849, "rWnN")];
      break;
    case i111ii[i11lii(1725, "hfm5")]:
      lIlI1 = {
        "appId": i11lii(1568, "bLYY"),
        "functionId": i11lii(949, "a9Rj"),
        "appid": i11lii(489, "kRS["),
        "clientVersion": common[i11lii(1528, "2aji")](),
        "client": i111ii[i11lii(1175, "0%so")],
        "body": {
          "version": 3,
          "token": $[i11lii(1706, "LzrV")]
        },
        "version": i11lii(1488, "oyv$"),
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(280, "2Sez")](lIlI1), lI11i = i111ii["kOsvw"], ilI11 = iIilII[i11lii(1138, "U2fK")];
      break;
    case i111ii[i11lii(1429, "OSrY")]:
      lIlI1 = {
        "appId": i11lii(780, "KYtB"),
        "functionId": i111ii["MxDVT"],
        "appid": i111ii[i11lii(623, "KYtB")],
        "clientVersion": common["getLatestAppVersion"](),
        "client": i111ii[i11lii(1175, "0%so")],
        "body": {
          "version": 3,
          "token": $["curRoundToken"],
          "bcc": 48,
          "scc": 0
        },
        "version": "4.2",
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st2[i11lii(750, "lc(%")](lIlI1), lI11i = i11lii(1751, "hfm5"), ilI11 = iIilII[i11lii(290, "iCdQ")];
      break;
    case i111ii[i11lii(1413, "SqLq")]:
      lIlI1 = {
        "appId": i11lii(1502, "0%so"),
        "functionId": i111ii[i11lii(1647, "$XDD")],
        "appid": "activities_platform",
        "clientVersion": common[i11lii(1630, "WM2J")](),
        "client": i11lii(1779, "WM2J"),
        "body": {
          "linkId": draw_linkId
        },
        "version": i111ii[i11lii(1689, "KYtB")],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st[i11lii(948, "bLYY")](lIlI1), lI11i = "http://api.m.jd.com/api", ilI11 = iIilII["paramsData"];
      break;
    case i111ii[i11lii(1489, "i@xn")]:
      lIlI1 = {
        "appId": i11lii(1420, "11dd"),
        "functionId": i111ii["IKPGw"],
        "appid": i11lii(375, "z%%b"),
        "clientVersion": common["getLatestAppVersion"](),
        "client": i111ii[i11lii(1147, "yNfK")],
        "body": {
          "linkId": draw_linkId
        },
        "version": i111ii[i11lii(898, "FwYB")],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st["getH5st"](lIlI1), lI11i = i11lii(1577, "OSrY"), ilI11 = iIilII[i11lii(516, "zIDY")];
      break;
    case i11lii(1146, "B%6T"):
      lIil11 = "GET", lI11i = i111ii[i11lii(372, "yNfK")], li1llI = {
        "functionId": i111ii["FJtCR"],
        "body": JSON[i11lii(993, "8O3M")]({
          "linkId": draw_linkId
        }),
        "t": Date[i11lii(376, "rWnN")](),
        "appid": i11lii(1040, "i@xn"),
        "client": i11lii(338, "FwYB"),
        "clientVersion": common[i11lii(297, "RaO3")]()
      };
      break;
    case "apsDoTask":
      lIlI1 = {
        "appId": i111ii[i11lii(423, "dK9O")],
        "functionId": i111ii[i11lii(716, "a4Kz")],
        "appid": i111ii[i11lii(720, "a9Rj")],
        "clientVersion": common[i11lii(1351, "dK9O")](),
        "client": i11lii(1277, "i@xn"),
        "body": {
          "taskType": $[i11lii(1478, "bLYY")],
          "taskId": $["taskId"],
          "channel": 4,
          "checkVersion": !![],
          "linkId": draw_linkId,
          "itemId": $[i11lii(1087, "2aji")]
        },
        "version": i111ii[i11lii(287, "$XDD")],
        "ua": $["UA"],
        "t": !![]
      }, iIilII = await H5st["getH5st"](lIlI1), lI11i = i111ii["AOWlS"], ilI11 = iIilII[i11lii(1138, "U2fK")];
      break;
    default:
      console[i11lii(602, "KYtB")]("\u274C \u672A\u77E5\u8BF7\u6C42 " + i111il);
      return;
  }
  const lIllI1 = {
    "wqDefault": i111ii["kCmQk"],
    "rfs": "0000",
    "cthr": "1",
    "loginType": "",
    "loginWQBiz": i111ii[i11lii(1311, "LzrV")],
    "openudid": $["UUID"],
    "uuid": $["UUID"],
    "build": common[i11lii(1518, "bLYY")](),
    "screen": i11lii(775, "2Sez"),
    "networkType": i11lii(1001, "a4Kz"),
    "d_brand": i111ii[i11lii(1158, "oyv$")],
    "d_model": i111ii["ExZDr"],
    "lang": "zh_CN",
    "osVersion": common[i11lii(1455, "iCdQ")](),
    "partner": ""
  };
  ilI11 && Object[i11lii(391, "il$L")](ilI11, lIllI1);
  li1llI && (i111ii["erPEA"]("jgGwI", i111ii[i11lii(638, "i@xn")]) ? Object[i11lii(652, "$XDD")](li1llI, lIllI1) : llIlIl["log"]("\u2753" + II11I + " " + il1i1["stringify"](lIIiIi)));
  const Ill1 = {
    "url": lI11i,
    "method": lIil11,
    "headers": {
      "Accept": i11lii(1240, "2Sez"),
      "Accept-Encoding": i111ii[i11lii(1434, "*RZC")],
      "Accept-Language": i111ii["fjxrl"],
      "Connection": i111ii[i11lii(869, "FwYB")],
      "Content-Type": i11lii(1073, "UNVx"),
      "Cookie": cookie,
      "Host": i111ii[i11lii(805, "11dd")],
      "Referer": i11lii(1560, "2aji"),
      "X-Referer-Page": i11lii(1642, "Mg$B"),
      "Origin": "https://h5.m.jd.com",
      "x-rp-client": i11lii(717, "zIDY"),
      "User-Agent": $["UA"]
    },
    "params": li1llI,
    "data": ilI11,
    "timeout": 30000,
    "httpsTlsOptions": [i11lii(547, "Mg$B"), i11lii(1104, "il$L")][i11lii(1124, "SmzW")](i111il) ? common["useAppTls"]() : null
  };
  [i111ii["SlkLP"], i11lii(1539, "%7#J"), i111ii[i11lii(1330, "z%%b")], i111ii[i11lii(1590, "yGNi")]]["includes"](i111il) && (Ill1[i11lii(1517, "OSrY")][i11lii(400, "%7#J")] = "https://lotterydraw-new.jd.com/?id=" + draw_linkId, Ill1["headers"][i11lii(1619, "WM2J")] = i111ii[i11lii(705, "dK9O")], Ill1["headers"][i111ii[i11lii(738, "bLYY")]] = i111ii["EtnAc"]);
  lIil11 === i111ii[i11lii(1445, "lc(%")] && ("oZuPT" !== i111ii[i11lii(399, "*RZC")] ? (l11iI1["ua"] = IliiI, lI111i[i11lii(760, "Lo*N")] = I1lIII[1], liIlll["av"] = I1iI1I[0]) : (delete Ill1[i11lii(803, "ekwl")], delete Ill1[i11lii(1583, "FwYB")][i111ii["wsWSt"]]));
  const lI1i1i = 1;
  let il1IiI = 0,
    il1Ii1 = null,
    lI1i1l = ![];
  while (i111ii[i11lii(1316, "[)vG")](il1IiI, lI1i1i)) {
    il1IiI > 0 && (await $[i11lii(1343, "aH6A")](1000));
    const iI1iI = await common[i11lii(632, "[)vG")](Ill1);
    if (!iI1iI["success"]) {
      if (i11lii(1286, "dK9O") === i111ii[i11lii(1637, "B%6T")]) IIIii[i11lii(1644, "a9Rj")][i11lii(790, "rWnN")](iI111i);else {
        il1Ii1 = "\uD83D\uDEAB " + i111il + i11lii(274, "OSrY") + iI1iI["error"], il1IiI++;
        iI1iI["status"] && i111ii[i11lii(1263, "7%iy")](iI1iI["status"], 403) && ["wheelsLottery"]["includes"](i111il) && (i111ii[i11lii(1192, "0%so")]("ewakU", i11lii(270, "2aji")) ? il1il[i11lii(1495, "zIDY")](Il1i1i["data"]?.[i11lii(1262, "LzrV")]) : $[i11lii(1613, "z%%b")] = !![]);
        continue;
      }
    }
    if (!iI1iI[i11lii(1589, "@Kqq")]) {
      il1Ii1 = i11lii(1729, "[)vG") + i111il + i11lii(424, "dK9O"), il1IiI++;
      continue;
    }
    await handleResponse(i111il, iI1iI[i11lii(585, "il$L")]), lI1i1l = ![];
    break;
  }
  i111ii[i11lii(1685, "$XDD")](il1IiI, lI1i1i) && (i111ii["jkNEY"](i111ii[i11lii(325, "@Kqq")], i111ii[i11lii(563, "SmzW")]) ? ill1I1["wheelsLotteryHot"] = !![] : (console[i11lii(1235, "FwYB")](il1Ii1), lI1i1l && (i111ii["QQxvE"](i111ii[i11lii(417, "2aji")], i111ii[i11lii(986, "bseJ")]) ? lilIi[i11lii(1378, "i@xn")] = l1l11I["data"]?.[i11lii(1058, "yNfK")] : ($[i11lii(786, "RaO3")] = !![], $[i11lii(1644, "a9Rj")] && $["message"][i11lii(1099, "iCdQ")](il1Ii1)))));
}
class H5st42 {
  constructor() {
    const I1Iii1 = I1iI,
      l1IiiI = {
        "TotCf": I1Iii1(1701, "U2fK")
      },
      II1iI1 = I1Iii1(1044, "zIDY")["split"]("|");
    let iI1i1 = 0;
    while (!![]) {
      switch (II1iI1[iI1i1++]) {
        case "0":
          this["_fpMaps"] = new Map();
          continue;
        case "1":
          this[I1Iii1(477, "a4Kz")] = {
            4.2: {}
          };
          continue;
        case "2":
          this[I1Iii1(809, "SqLq")] = CryptoJS[I1Iii1(548, "*RZC")][I1Iii1(730, "yGNi")]["parse"](l1IiiI[I1Iii1(713, "il$L")]);
          continue;
        case "3":
          this["_ivKey"] = CryptoJS[I1Iii1(549, "kRS[")]["Utf8"]["parse"](I1Iii1(1106, "RCrL"));
          continue;
        case "4":
          this[I1Iii1(953, "11dd")] = {
            4.2: {}
          };
          continue;
        case "5":
          this[I1Iii1(977, "B%6T")] = {
            "build": common[I1Iii1(310, "lc(%")](),
            "version": common[I1Iii1(1153, "il$L")]()
          };
          continue;
        case "6":
          this[I1Iii1(1662, "lc(%")] = common[I1Iii1(439, "LzrV")]();
          continue;
      }
      break;
    }
  }
  async ["getH5st"](il11Il) {
    const iiI1II = I1iI,
      IIiI1 = {
        "rJwqj": function (il11Ii, li1Ii1) {
          return il11Ii === li1Ii1;
        },
        "xZobr": function (i1ii11, iii1) {
          return i1ii11 !== iii1;
        },
        "XuHxO": "appId",
        "OZMmV": "appid",
        "XAHzx": iiI1II(985, "bLYY"),
        "kXqWF": function (ill1i, ill1l) {
          return ill1i > ill1l;
        },
        "VqfkC": iiI1II(965, "Gr0r"),
        "jYcDD": iiI1II(1699, "zIDY"),
        "VTJgl": function (iiIIi1, i1liI1) {
          return iiIIi1 || i1liI1;
        },
        "KDKSs": function (l1IilI, ll1I1i) {
          return l1IilI && ll1I1i;
        },
        "NEhTc": iiI1II(256, "[)vG")
      };
    let II1iII = Object["assign"]({}, il11Il, {
      "h5st": "",
      "params": "",
      "paramsData": {}
    });
    try {
      if (IIiI1[iiI1II(1542, "a9Rj")](iiI1II(1156, "sFII"), iiI1II(1160, "il$L"))) llIIl1[iiI1II(294, "a9Rj")](ill1Il, i1lll1);else {
        if (!(typeof il11Il === iiI1II(1071, "U2fK") && IIiI1[iiI1II(1453, "2Sez")](il11Il, null))) return console["log"]("\u274C getH5st \u4F20\u5165\u53C2\u6570\u6709\u8BEF"), II1iII;else {
          const IIilII = [IIiI1["XuHxO"], IIiI1[iiI1II(574, "@Kqq")], IIiI1[iiI1II(1680, "i@xn")], iiI1II(741, "0%so")],
            l1Iil1 = IIilII[iiI1II(881, "11dd")](IIiIl => !il11Il[IIiIl]);
          if (IIiI1["kXqWF"](l1Iil1["length"], 0)) {
            if (IIiI1[iiI1II(404, "iCdQ")] === IIiI1[iiI1II(301, "lc(%")]) iIli1i[iiI1II(461, "Mg$B")] = ![];else return console[iiI1II(1193, "%7#J")](iiI1II(1679, "exYa") + l1Iil1[iiI1II(534, "U2fK")](", ")), II1iII;
          }
        }
        il11Il[iiI1II(475, "WM2J")] = iiI1II(747, "@Kqq");
        const ll1I1l = this[iiI1II(807, "oyv$")](il11Il),
          {
            appid: iilI,
            body: IIilI1,
            client: li1Il1,
            clientVersion: i1ii1I,
            functionId: iil1
          } = il11Il;
        let iiIIiI = this[iiI1II(946, "zIDY")][ll1I1l["version"]][ll1I1l["appId"]],
          i1liII = this[iiI1II(1358, "7%iy")][ll1I1l[iiI1II(1208, "KYtB")]][ll1I1l[iiI1II(887, "SmzW")]];
        if (IIiI1["VTJgl"](!iiIIiI, !i1liII)) {
          const IIiIi = await this[iiI1II(1393, "dK9O")](ll1I1l);
          iiIIiI = IIiIi["token"], i1liII = IIiIi["algo"], this[iiI1II(902, "bseJ")][ll1I1l[iiI1II(1553, "yNfK")]][ll1I1l["appId"]] = iiIIiI, this[iiI1II(1731, "a4Kz")][ll1I1l[iiI1II(261, "B%6T")]][ll1I1l[iiI1II(1008, "W5fK")]] = i1liII;
        }
        if (IIiI1[iiI1II(1188, "%7#J")](!iiIIiI, !i1liII)) return II1iII;
        const ilII1i = {
          "appid": iilI,
          "body": IIilI1,
          "client": li1Il1,
          "clientVersion": i1ii1I,
          "functionId": iil1
        };
        il11Il?.["t"] && typeof il11Il["t"] === IIiI1[iiI1II(1756, "SqLq")] ? (il11Il["t"] = Date["now"](), ilII1i["t"] = il11Il["t"]) : il11Il["t"] = "";
        if (!ilII1i[iiI1II(1086, "OSrY")]) delete ilII1i["client"];
        if (!ilII1i[iiI1II(1205, "iCdQ")]) delete ilII1i["clientVersion"];
        const ill1I = this[iiI1II(1294, "Lo*N")](ilII1i, iiIIiI, i1liII, ll1I1l),
          ilII1l = {
            "functionId": iil1,
            "body": JSON[iiI1II(1260, "a9Rj")](IIilI1),
            "t": "",
            "appid": iilI,
            "client": "",
            "clientVersion": "",
            "h5st": ill1I?.[iiI1II(866, "iCdQ")] || ""
          };
        for (const i1ii1i of ["t", iiI1II(1200, "a9Rj"), iiI1II(982, "$XDD")]) {
          iiI1II(1565, "Gr0r") !== iiI1II(1174, "RaO3") ? iI1li1[iiI1II(686, "rWnN")]("" + (lllii1[iiI1II(398, "yGNi")] || liIli[iiI1II(235, "TJ2U")] || liIll["message"])) : il11Il[i1ii1i] ? ilII1l[i1ii1i] = il11Il[i1ii1i] : delete ilII1l[i1ii1i];
        }
        Object["assign"](II1iII, {
          "h5st": ill1I?.["h5st"] || "",
          "params": querystring[iiI1II(1513, "Gr0r")](ilII1l),
          "paramsData": ilII1l
        });
      }
    } catch (iiil) {
      console["log"](iiI1II(859, "dK9O") + (iiil[iiI1II(1573, "Mg$B")] || iiil));
    }
    return II1iII;
  }
  [I1iI(992, "11dd")](li1Iil) {
    const iIl11I = I1iI,
      ill11 = {
        "dbliT": function (iiIIil, iiIIii) {
          return iiIIil !== iiIIii;
        },
        "eciPq": iIl11I(1165, "8O3M"),
        "vQFIp": function (i1liIi, i1liIl) {
          return i1liIi > i1liIl;
        },
        "UzeCk": function (IiIill, li1Iii) {
          return IiIill > li1Iii;
        },
        "GyIUJ": function (lIII1, llIi11) {
          return lIII1 === llIi11;
        },
        "RfMzD": "GkxTo",
        "oqygd": function (IIi11I, iiIIlI) {
          return IIi11I > iiIIlI;
        },
        "igTiP": function (IIl1II, iill) {
          return IIl1II !== iill;
        },
        "gYWVK": iIl11I(888, "Gr0r"),
        "xaFns": "MludL"
      },
      i1ii1l = {
        "version": "",
        "appId": li1Iil?.[iIl11I(1134, "yGNi")] || "",
        "fv": "",
        "fp": "",
        "ua": "",
        "sua": "",
        "av": "",
        "url": "",
        "og": "",
        "referer": li1Iil?.[iIl11I(1784, "OSrY")] || "",
        "pin": li1Iil?.[iIl11I(894, "iCdQ")] || "",
        "cookie": li1Iil?.[iIl11I(1765, "SmzW")] || ""
      };
    if (li1Iil?.["ua"]) {
      if (ill11[iIl11I(1586, "W5fK")](iIl11I(1165, "8O3M"), ill11[iIl11I(854, "yGNi")])) lllI1i[iIl11I(464, "*RZC")](iIl11I(1407, "UNVx"));else {
        let llIi1I = li1Iil["ua"],
          lIlIii = llIi1I[iIl11I(1592, "sFII")](/^[\s\S]*?\(([\s\S]*?)\)/),
          li1Ili = llIi1I[iIl11I(441, "kRS[")](/(?<=\/)[0-9]\.0[^'"\n]+/g);
        ill11["vQFIp"](lIlIii?.[iIl11I(1377, "B%6T")], 0) && ill11[iIl11I(1728, "yNfK")](li1Ili?.["length"], 0) && (ill11[iIl11I(588, "7%iy")](ill11["RfMzD"], ill11[iIl11I(397, "KYtB")]) ? (i1ii1l["ua"] = llIi1I, i1ii1l[iIl11I(578, "2aji")] = lIlIii[1], i1ii1l["av"] = li1Ili[0]) : i11iI1["log"](Iii1II));
      }
    }
    if (!i1ii1l["ua"]) {
      let Ili1li = this["_genUA"](),
        lIlIil = Ili1li[iIl11I(468, "a4Kz")](/^[\s\S]*?\(([\s\S]*?)\)/),
        I11lii = Ili1li["match"](/(?<=\/)[0-9]\.0[^'"\n]+/g);
      ill11[iIl11I(544, "LzrV")](lIlIil?.["length"], 0) && ill11[iIl11I(1078, "2aji")](I11lii?.[iIl11I(779, "OSrY")], 0) && (ill11[iIl11I(776, "Mg$B")]("gHzdk", "hnnpI") ? (i1ii1l["ua"] = Ili1li, i1ii1l["sua"] = lIlIil[1], i1ii1l["av"] = I11lii[0]) : (ilil1l[iIl11I(330, "bseJ")] = !![], illlIi[iIl11I(526, "hfm5")]("" + I1lIii["data"][iIl11I(715, "a4Kz")])));
    }
    i1ii1l[iIl11I(740, "[)vG")] = "4.2", i1ii1l["fv"] = ill11[iIl11I(1224, "bLYY")], i1ii1l["fp"] = this[iIl11I(494, "a4Kz")][iIl11I(1468, "a9Rj")](i1ii1l["ua"]) || "";
    !i1ii1l["fp"] && (i1ii1l["fp"] = this["_makeFp"](), i1ii1l["ua"]["startsWith"]("jd") && this["_fpMaps"][iIl11I(923, "hfm5")](i1ii1l["ua"], i1ii1l["fp"]));
    if (li1Iil?.[iIl11I(976, "$XDD")]) {
      if (ill11[iIl11I(1149, "7%iy")] !== iIl11I(1534, "yNfK")) try {
        const Ili1ll = new URL(li1Iil[iIl11I(976, "$XDD")]);
        i1ii1l[iIl11I(961, "%7#J")] = Ili1ll[iIl11I(1775, "SmzW")], i1ii1l["og"] = Ili1ll[iIl11I(1540, "[)vG")];
      } catch {} else lI1li1["farm_task_list"] = iI11II[iIl11I(1275, "RCrL")]?.["result"];
    }
    return i1ii1l;
  }
  async ["_requestAlgo"](l1Iili) {
    const lIiii1 = I1iI,
      IIi11l = {
        "LudsR": lIiii1(1100, "B%6T"),
        "XoAYA": lIiii1(582, "UNVx"),
        "xsYxu": lIiii1(1282, "UNVx"),
        "sWAFt": "cactus.jd.com",
        "NaxPD": function (l1Iill, iiiiIi) {
          return l1Iill < iiiiIi;
        },
        "ZbMvJ": function (iiiiIl, IIi11i) {
          return iiiiIl === IIi11i;
        },
        "qCthC": lIiii1(396, "2Sez"),
        "kHptU": function (iiIIli, iili) {
          return iiIIli && iili;
        },
        "TSWSX": lIiii1(1300, "rWnN")
      };
    try {
      const IIl1Ii = this[lIiii1(873, "ekwl")](l1Iili);
      let ilIIl = this[lIiii1(339, "bseJ")](JSON[lIiii1(252, "SmzW")](IIl1Ii, null, 2), this[lIiii1(380, "iCdQ")]);
      const I11ll1 = {
          "version": l1Iili[lIiii1(1760, "SqLq")],
          "fp": l1Iili["fp"],
          "appId": l1Iili[lIiii1(484, "a4Kz")],
          "timestamp": Date["now"](),
          "platform": "web",
          "expandParams": ilIIl,
          "fv": l1Iili["fv"]
        },
        lIIII = {
          "url": "https://cactus.jd.com/request_algo?g_ty=ajax",
          "method": IIi11l[lIiii1(864, "z%%b")],
          "headers": {
            "Content-Type": IIi11l[lIiii1(459, "iCdQ")],
            "Origin": IIi11l[lIiii1(1163, "W5fK")],
            "Host": IIi11l[lIiii1(613, "oyv$")],
            "Accept": lIiii1(1520, "kRS["),
            "User-Agent": l1Iili?.["ua"] || lIiii1(1482, "rWnN")
          },
          "data": I11ll1,
          "proxy": null,
          "timeout": 60000,
          "debug": ![]
        };
      let li1IlI = 0,
        iiI1i = null;
      const iiI1l = 1;
      while (IIi11l[lIiii1(246, "i@xn")](li1IlI, iiI1l)) {
        if (IIi11l["ZbMvJ"](lIiii1(374, "oyv$"), lIiii1(1599, "hfm5"))) {
          const Ili1lI = await common["request"](lIIII);
          if (!Ili1lI["success"]) {
            iiI1i = "\u274C getH5st request_algo \u8BF7\u6C42\u5931\u8D25 \u279C " + Ili1lI[lIiii1(728, "bLYY")], li1IlI++;
            continue;
          }
          if (!Ili1lI[lIiii1(1491, "2Sez")]) {
            iiI1i = "\uD83D\uDEAB getH5st request_algo \u8BF7\u6C42\u5931\u8D25 \u279C \u65E0\u54CD\u5E94\u6570\u636E", li1IlI++;
            continue;
          }
          try {
            const lIlIl1 = Ili1lI[lIiii1(1371, "RaO3")];
            if (lIlIl1?.[lIiii1(1172, "dK9O")] && lIlIl1?.["data"]?.["result"]) {
              if ("HZYjd" === IIi11l[lIiii1(1470, "i@xn")]) {
                const ilIIi = lIlIl1[lIiii1(510, "Lo*N")][lIiii1(1029, "sFII")]?.[lIiii1(619, "8O3M")],
                  IiII1l = lIlIl1["data"]["result"]?.["tk"];
                if (IIi11l["kHptU"](ilIIi, IiII1l)) return {
                  "token": IiII1l,
                  "algo": ilIIi
                };
              } else llIll[lIiii1(1446, "UNVx")]("" + (il1iII["errMsg"] || iilli[lIiii1(316, "Lo*N")] || IlllIl[lIiii1(1607, "WM2J")]));
            }
            iiI1i = "\uD83D\uDEAB getH5st request_algo \u8BF7\u6C42\u5F02\u5E38 \u279C " + JSON["stringify"](lIlIl1);
          } catch (Ii11Ii) {
            iiI1i = lIiii1(1116, "KYtB") + (Ii11Ii[lIiii1(1151, "*RZC")] || Ii11Ii);
          }
          li1IlI++;
        } else Il1i1I[lIiii1(1318, "yGNi")]("> \u7B7E\u5230\u5931\u8D25 " + Ii1iii[lIiii1(1688, "[)vG")]?.[lIiii1(1755, "i@xn")]);
      }
      li1IlI >= iiI1l && console["log"](iiI1i);
    } catch (lIlIlI) {
      IIi11l[lIiii1(437, "rWnN")] === IIi11l[lIiii1(501, "8O3M")] ? console[lIiii1(602, "KYtB")](lIiii1(1663, "Mg$B") + (lIlIlI[lIiii1(1042, "$XDD")] || lIlIlI)) : Ill11I[lIiii1(1019, "bseJ")]("\u2753" + I1il1i + " " + IliIIi[lIiii1(1437, "*RZC")](lI1l1i));
    }
    return {
      "token": "",
      "algo": ""
    };
  }
  ["_getExpandParamsData"](I1li1l) {
    const iIlII = I1iI,
      I11li1 = {
        "UFsWe": "zh-CN",
        "LOIZd": iIlII(1081, "ekwl"),
        "nHROl": iIlII(1361, "sFII")
      };
    return {
      "wc": 0,
      "wd": 0,
      "l": I11li1[iIlII(989, "*RZC")],
      "ls": I11li1["LOIZd"],
      "ml": 0,
      "pl": 0,
      "av": I1li1l["av"],
      "ua": I1li1l["ua"],
      "sua": I1li1l[iIlII(620, "exYa")],
      "pp": I1li1l[iIlII(321, "SHv]")] ? {
        "p1": I1li1l[iIlII(513, "[)vG")],
        "p2": I1li1l[iIlII(1391, "*RZC")]
      } : {},
      "extend": {
        "pm": 0,
        "wd": 0,
        "l": 0,
        "ls": 2,
        "wk": 0,
        "bu1": iIlII(327, "2Sez")
      },
      "pp1": I1li1l[iIlII(513, "[)vG")] ? "" : I1li1l["cookie"],
      "pm": {
        "ps": "prompt",
        "np": I11li1[iIlII(607, "WM2J")]
      },
      "w": 400,
      "h": 700,
      "ow": 400,
      "oh": 700,
      "url": I1li1l[iIlII(1372, "iCdQ")],
      "og": I1li1l["og"],
      "pr": 1.25,
      "re": I1li1l[iIlII(1602, "Lo*N")],
      "random": this[iIlII(804, "FwYB")](10),
      "referer": I1li1l[iIlII(1704, "exYa")],
      "v": I1li1l["fv"],
      "ai": I1li1l[iIlII(1279, "U2fK")],
      "fp": I1li1l["fp"]
    };
  }
  [I1iI(1359, "Mg$B")](lIIIi, iiI1I, lIIIl, ilIII) {
    const iIiII1 = I1iI,
      IiII1I = {
        "ULqyf": iIiII1(746, "KYtB"),
        "GDHxa": "CDwWR",
        "hYAPM": iIiII1(1306, "FwYB"),
        "cCGst": function (IIl1I1, I1li1i) {
          return IIl1I1(I1li1i);
        },
        "VFQsr": function (IIi111, Ii11II) {
          return IIi111 + Ii11II;
        },
        "oJqAq": function (iiI11, lIlIli) {
          return iiI11(lIlIli);
        },
        "dsQHC": function (ilII1, lIlIll, l111I1, IiII11, I11liI, ilIilI) {
          return ilII1(lIlIll, l111I1, IiII11, I11liI, ilIilI);
        },
        "TvJcz": "9.9.9",
        "xvjlG": iIiII1(1500, "@Kqq"),
        "XIAcW": function (iIlIl1, lli1iI) {
          return iIlIl1 !== lli1iI;
        },
        "VnPLr": iIiII1(1696, "ekwl"),
        "exzOm": "FQJlD"
      };
    try {
      const I1II1I = ilIII["version"],
        iI1I = Date[iIiII1(1385, "UNVx")](),
        liIiiI = new Date(iI1I),
        l11Iii = "" + liIiiI["getFullYear"]() + IiII1I[iIiII1(1287, "8O3M")](String, IiII1I[iIiII1(1309, "SqLq")](liIiiI[iIiII1(1181, "a9Rj")](), 1))[iIiII1(1766, "B%6T")](2, "0") + String(liIiiI[iIiII1(1398, "lc(%")]())[iIiII1(667, "KYtB")](2, "0") + String(liIiiI[iIiII1(1758, "11dd")]())["padStart"](2, "0") + IiII1I["oJqAq"](String, liIiiI["getMinutes"]())[iIiII1(1404, "Gr0r")](2, "0") + String(liIiiI[iIiII1(722, "*RZC")]())[iIiII1(542, "TJ2U")](2, "0") + IiII1I[iIiII1(401, "bLYY")](String, liIiiI[iIiII1(446, "i@xn")]())[iIiII1(1065, "oyv$")](3, "0");
      let IIllii = Object["entries"](lIIIi)["map"](([iIlIlI, lIl11]) => {
          const I1l1 = iIiII1;
          return iIlIlI === IiII1I[I1l1(282, "aH6A")] && (IiII1I["GDHxa"] !== IiII1I[I1l1(265, "SHv]")] ? lIl11 = CryptoJS[I1l1(1045, "*RZC")](JSON["stringify"](lIl11))["toString"]() : liiI11[I1l1(1593, "SmzW")]("\u2753" + ililI1 + " " + IIii1i["stringify"](i1ili))), {
            "key": iIlIlI,
            "value": lIl11
          };
        }),
        IIllil = "",
        Il1l1I = "";
      const lIII = IIllii[iIiII1(1727, "kRS[")](ilIill => ilIill[iIiII1(1776, "ekwl")] + ":" + ilIill["value"])[iIiII1(1600, "hfm5")]("&"),
        iI11 = new Function(iIiII1(1628, "zIDY")[iIiII1(1171, "zIDY")](lIIIl))();
      let liIii1 = l11Iii;
      liIii1 += "74";
      let Iili11;
      Iili11 = IiII1I[iIiII1(1498, "%7#J")](iI11, iiI1I, ilIII["fp"], liIii1, ilIII["appId"], CryptoJS)[iIiII1(874, "hfm5")]() || "", IIllil = CryptoJS["SHA256"](""[iIiII1(819, "W5fK")](Iili11)[iIiII1(723, "a4Kz")](lIII)[iIiII1(532, "rWnN")](Iili11))[iIiII1(456, "U2fK")]();
      let I111II = {};
      I111II = {
        "sua": ilIII[iIiII1(901, "WM2J")],
        "pp": ilIII[iIiII1(1317, "hfm5")] ? {
          "p1": ilIII[iIiII1(1164, "Lo*N")],
          "p2": ilIII[iIiII1(894, "iCdQ")]
        } : {},
        "extend": {
          "pm": 0,
          "wd": 0,
          "l": 0,
          "ls": 2,
          "wk": 0,
          "bu1": IiII1I["TvJcz"]
        },
        "random": this[iIiII1(250, "KYtB")](10),
        "referer": ilIII[iIiII1(559, "z%%b")],
        "v": ilIII["fv"],
        "fp": ilIII["fp"]
      }, Il1l1I = this[iIiII1(700, "lc(%")](JSON[iIiII1(1513, "Gr0r")](I111II, null, 2), CryptoJS[iIiII1(1091, "dK9O")][iIiII1(1430, "2aji")][iIiII1(1070, "UNVx")](IiII1I[iIiII1(806, "8O3M")]));
      const lII1 = [""[iIiII1(1272, "7%iy")](l11Iii), ""[iIiII1(1700, "aH6A")](ilIII["fp"]), ""["concat"](ilIII[iIiII1(887, "SmzW")]), ""["concat"](iiI1I), ""["concat"](IIllil), ""["concat"](I1II1I), ""[iIiII1(1412, "KYtB")](iI1I), ""["concat"](Il1l1I)][iIiII1(1394, "0%so")](";");
      return {
        "_stk": IIllii[iIiII1(1049, "SqLq")](Il1l1l => Il1l1l[iIiII1(1486, "bseJ")])[iIiII1(1204, "7%iy")](","),
        "_ste": 1,
        "h5st": lII1
      };
    } catch (iIlIil) {
      IiII1I["XIAcW"](IiII1I[iIiII1(273, "exYa")], IiII1I[iIiII1(502, "yGNi")]) ? console["log"](iIiII1(1768, "11dd") + (iIlIil["message"] || iIlIil)) : iiillI[iIiII1(646, "2Sez")](iIiII1(314, "i@xn"));
    }
    return {
      "_stk": "",
      "_ste": 0,
      "h5st": ""
    };
  }
  [I1iI(895, "%7#J")](Il1l1i, I1II11) {
    const Il11I1 = I1iI,
      iI1 = CryptoJS["enc"][Il11I1(768, "[)vG")][Il11I1(355, "SqLq")](Il1l1i),
      I111Il = CryptoJS[Il11I1(1390, "UNVx")][Il11I1(1105, "aH6A")](iI1, I1II11, {
        "iv": this["_ivKey"],
        "mode": CryptoJS[Il11I1(1006, "KYtB")][Il11I1(858, "zIDY")],
        "padding": CryptoJS[Il11I1(1276, "Mg$B")][Il11I1(569, "dK9O")]
      });
    return CryptoJS["enc"][Il11I1(1009, "@Kqq")][Il11I1(963, "7%iy")](CryptoJS[Il11I1(1503, "WM2J")][Il11I1(612, "Mg$B")][Il11I1(355, "SqLq")](I111Il[Il11I1(608, "W5fK")]()));
  }
  ["_makeRandomStr"](lIl1I = 32, I111Ii = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const i11liI = I1iI,
      IIlllI = {
        "bbaYy": function (lli1i1, IIlli1) {
          return lli1i1 * IIlli1;
        }
      },
      l11Iil = I111Ii[i11liI(507, "7%iy")];
    let Iili1I = "";
    for (let ilIiii = 0; ilIiii < lIl1I; ilIiii++) {
      true ? Iili1I += I111Ii[i11liI(1220, "iCdQ")](Math[i11liI(625, "lc(%")](IIlllI[i11liI(1102, "W5fK")](Math[i11liI(1281, "FwYB")](), l11Iil))) : li1[i11liI(1148, "Mg$B")]("\u2753" + illIl1 + " " + l1llII[i11liI(1596, "[)vG")](IilIll));
    }
    return Iili1I;
  }
  [I1iI(1702, "z%%b")]() {
    const iilI11 = I1iI,
      iII = {
        "rrTqR": function (liIiil, l11Il1) {
          return liIiil !== l11Il1;
        },
        "meuQl": "xbjMG",
        "pwEeV": function (Iili1i, IIiIli) {
          return Iili1i * IIiIli;
        },
        "WnmJY": function (lIl1l, iIlIii) {
          return lIl1l == iIlIii;
        },
        "MumuF": iilI11(1328, "yNfK"),
        "IWvYE": function (iiI111, lIi111) {
          return iiI111 / lIi111;
        }
      };
    function l11IlI(iIlIi1 = iilI11(1000, "Mg$B"), IIiIll = "0123456789abcdef") {
      const lIiiiI = iilI11,
        iIi = {
          "rvcbP": function (liIiii, l11Ill, IIlliI) {
            return liIiii(l11Ill, IIlliI);
          }
        };
      let iI1i = "";
      for (let ilIil1 of iIlIi1) {
        if (ilIil1 == "x") iII["rrTqR"](lIiiiI(994, "11dd"), iII[lIiiiI(1241, "aH6A")]) ? iI1i += IIiIll[lIiiiI(886, "U2fK")](Math[lIiiiI(1362, "RCrL")](iII[lIiiiI(1459, "%7#J")](Math["random"](), IIiIll[lIiiiI(1634, "dK9O")]))) : lI1ll1["log"](lIiiiI(672, "FwYB") + (iIiI1[lIiiiI(998, "TJ2U")] || liil1I["msg"]));else iII["WnmJY"](ilIil1, "X") ? iII["rrTqR"](lIiiiI(1127, "zIDY"), lIiiiI(1159, "yNfK")) ? iI1i += IIiIll[lIiiiI(576, "SHv]")](Math[lIiiiI(471, "0%so")](Math["random"]() * IIiIll["length"]))[lIiiiI(924, "$XDD")]() : IllI11["log"]("\uD83D\uDEBF \u5DF2\u6D47\u6C34" + l1llIi + "g\uFF0C" + iIi[lIiiiI(1307, "ekwl")](II1llI, i11I11, l1llIl)) : iI1i += ilIil1;
      }
      return iI1i;
    }
    const lIIl = l11IlI(),
      lIl1i = ["jdapp", "iPhone", this[iilI11(455, "a9Rj")][iilI11(1024, "iCdQ")], "", iilI11(1182, "FwYB") + lIIl, iilI11(295, "bLYY"), iilI11(618, "exYa") + this[iilI11(974, "2aji")][iilI11(1711, "lc(%")], iII[iilI11(1293, "il$L")], iilI11(403, "exYa"), iilI11(428, "Lo*N") + Math[iilI11(1339, "yGNi")](iII[iilI11(1350, "7%iy")](Date["now"](), 1000)) + iilI11(1215, "UNVx"), iilI11(792, "LzrV") + this[iilI11(1234, "zIDY")][iilI11(594, "z%%b")](".", "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "supportJDSHWK/1", ""],
      Iili1l = lIl1i[iilI11(1507, "[)vG")](";");
    return Iili1l;
  }
  [I1iI(795, "SHv]")]() {
    const iiI1Il = I1iI,
      I111I1 = {
        "wJiSW": function (l11iI, IIiIil) {
          return l11iI === IIiIil;
        },
        "gLEYf": iiI1Il(1237, "lc(%"),
        "JEXFd": function (lli1ll, IIiIii) {
          return lli1ll * IIiIii;
        },
        "fHZCS": function (liIill, lli1li) {
          return liIill - lli1li;
        },
        "gzohk": function (ll1I, Ii1lii) {
          return ll1I < Ii1lii;
        },
        "VWHtu": function (lii11, liIili) {
          return lii11 - liIili;
        },
        "JVMSG": function (Ii1lil, ll11) {
          return Ii1lil > ll11;
        },
        "eXndG": function (lliI1, iiI11l) {
          return lliI1 === iiI11l;
        },
        "BmHNm": iiI1Il(1653, "iCdQ"),
        "KMqLY": function (iiI11i, Il1II1) {
          return iiI11i + Il1II1;
        },
        "rbmBH": iiI1Il(1771, "FwYB"),
        "RyySg": function (iiilI, Il1IIi) {
          return iiilI - Il1IIi;
        },
        "MmSYo": function (IIiIl1, ilII11, l11ii) {
          return IIiIl1(ilII11, l11ii);
        }
      };
    function iIl(Il1IIl, l11il) {
      const iiI1Ii = iiI1Il;
      if (I111I1["wJiSW"](iiI1Ii(340, "z%%b"), I111I1["gLEYf"])) IIliIi[iiI1Ii(707, "il$L")](IllIiI["data"]?.[iiI1Ii(300, "lc(%")]);else return Il1IIl + Math[iiI1Ii(336, "ekwl")](I111I1["JEXFd"](Math[iiI1Ii(436, "TJ2U")](), I111I1["fHZCS"](l11il + 1, Il1IIl)));
    }
    function lIIi(Ii1liI, liIilI) {
      const Il1i1 = iiI1Il;
      for (var Ii1li1 = [], iiil1 = 0; I111I1[Il1i1(1552, "dK9O")](iiil1, Ii1liI[Il1i1(1681, "z%%b")]); iiil1++) {
        var liIil1 = Ii1liI[iiil1];
        if (iIl(0, I111I1["fHZCS"](Ii1liI[Il1i1(1467, "oyv$")] - iiil1, 1)) < liIilI - Ii1li1[Il1i1(1737, "LzrV")] && (Ii1li1["push"](liIil1), Ii1li1["length"] == liIilI)) break;
      }
      for (var IIiIlI = "", ilII1I = 0; ilII1I < Ii1li1[Il1i1(1598, "zIDY")]; ilII1I += 1) {
        var iiIlI1 = Math[Il1i1(669, "SHv]")]() * I111I1[Il1i1(514, "ekwl")](Ii1li1["length"], ilII1I) | 0;
        IIiIlI += Ii1li1[iiIlI1], Ii1li1[iiIlI1] = Ii1li1[I111I1[Il1i1(1684, "TJ2U")](Ii1li1[Il1i1(362, "11dd")] - ilII1I, 1)];
      }
      return IIiIlI;
    }
    function l11Ili(lli1l1, lii1l) {
      const IlIiii = iiI1Il,
        lii1i = {
          "pxdkq": function (l1Iii1, IIiIi1) {
            const IlIiil = iii1II;
            return I111I1[IlIiil(1474, "%7#J")](l1Iii1, IIiIi1);
          }
        };
      if (IlIiii(1431, "W5fK") === IlIiii(1090, "SmzW")) {
        let iiiii = this[IlIiii(876, "LzrV")](),
          iiiil = iiiii[IlIiii(1131, "WM2J")](/^[\s\S]*?\(([\s\S]*?)\)/),
          iiIlII = iiiii[IlIiii(1652, "2Sez")](/(?<=\/)[0-9]\.0[^'"\n]+/g);
        lii1i[IlIiii(1671, "FwYB")](iiiil?.[IlIiii(1176, "FwYB")], 0) && iiIlII?.[IlIiii(1783, "exYa")] > 0 && (Iliil["ua"] = iiiii, I1lIIl[IlIiii(1423, "bLYY")] = iiiil[1], l1ilI1["av"] = iiIlII[0]);
      } else {
        for (var lliIl = 0; I111I1[IlIiii(1564, "[)vG")](lliIl, lii1l[IlIiii(765, "kRS[")]); lliIl += 1) {
          if (I111I1[IlIiii(1778, "2aji")]("cEEkq", IlIiii(666, "exYa"))) {
            var lliIi = lli1l1[IlIiii(1213, "hfm5")](lii1l[lliIl]);
            -1 !== lliIi && (lli1l1 = lli1l1[IlIiii(840, "FwYB")](lii1l[lliIl], ""));
          } else I1llIl["log"]("> \u7B7E\u5230\u6210\u529F\uFF0C\u83B7\u5F97\u5956\u52B1\u3010" + i1iii[IlIiii(1561, "i@xn")]?.[IlIiii(1041, "Gr0r")] + "\u3011");
        }
        return lli1l1;
      }
    }
    var iiill = iiI1Il(530, "i@xn"),
      iiI11I = lIIi(iiill, 4),
      llIi1i = iIl(0, 9),
      llIi1l = l11Ili(iiill, iiI11I),
      l11i1 = {};
    l11i1[iiI1Il(885, "iCdQ")] = llIi1i, l11i1[I111I1[iiI1Il(1649, "2Sez")]] = llIi1l;
    var iIl = I111I1["KMqLY"](I111I1[iiI1Il(1411, "KYtB")](this[iiI1Il(914, "yNfK")](l11i1[I111I1[iiI1Il(1150, "B%6T")]], l11i1[iiI1Il(813, "2Sez")]), iiI11I) + this[iiI1Il(1093, "LzrV")](I111I1[iiI1Il(1579, "8O3M")](12, llIi1i) - 1, llIi1l), llIi1i),
      lIi11I = iIl[iiI1Il(695, "exYa")](""),
      iiili = lIi11I[iiI1Il(317, "TJ2U")](0, 14),
      iIlIiI = lIi11I[iiI1Il(867, "RaO3")](14),
      Il1III = [];
    while (I111I1["JVMSG"](iiili[iiI1Il(1598, "zIDY")], 0)) {
      Il1III["push"](I111I1["RyySg"](35, I111I1[iiI1Il(1571, "2aji")](parseInt, iiili["pop"](), 36))[iiI1Il(862, "aH6A")](36));
    }
    return Il1III = Il1III[iiI1Il(1272, "7%iy")](iIlIiI), Il1III[iiI1Il(1748, "dK9O")]("");
  }
}
const H5st2 = new H5st42();
var version_ = "jsjiami.com.v7";
// prettier-ignore
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}