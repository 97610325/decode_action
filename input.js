/**
 * @author 小寒寒
 * @name CK移动
 * @team 红灯区
 * @version 1.0.4
 * @description 指定pin移动到指定位置，命令 ck移动 pin 位置 ，ck向前 pin ，ck向后 pin，ck位置 pin
 * @rule ^CK(移动) ([^\s\n]+) (\d+)$
 * @rule ^ck(移动) ([^\s\n]+) (\d+)$
 * @rule ^CK(向前|向后) ([^\s\n]+)$
 * @rule ^ck(向前|向后) ([^\s\n]+)$
 * @rule ^ck(位置) ([^\s\n]+)$
 * @rule ^CK(位置) ([^\s\n]+)$
 * @priority 1000
 * @admin true
 * @disable false
 * @public false
 * @authentication true
 * @classification ["青龙"]
 */

const QlMod = require('../红灯区/mod/AmQlMod');
const AmTool = require('../红灯区/mod/AmTool');
/** Code Encryption Block[419fd178b7a37c9eae7b7426c4a04203f5f502784ecfb5aec20d23d78e2e72e32c2b22d2103c6fb449d3a8497a6b9e0092606e0c580204ee4e03d64ccdc8aa8db8f96e05a92c7590fcd32098e13a47358e69260687bd98801d7c894233557e36af8ce2398e5da821528fd42015332a30e0f0a1a96d9684335a541d0099817f0ee8b12b4f6fdc33c08034877cf2d5ab70d0e2e4faf76a5be8e36e8d90c3852e1249f27003d96ae61e8b7f056f2fe55723ef2e9296098bd061d1b5df492dcced563612c9327cddd230abeb5138ae9eef91b08d153d9fe1181d132ace73292a0072c822d6287a5972fffc0d8892fde5be55d2015afa4e58c8e7cc287ecd83b7681877a43d75c93a323171805337da5a0f3fcb11b92ef17311cd05253a319163f55434a11f31e1609559dbbe34be9b0465c6b42ffa369d79fa262a4e654ba7a8ae4f73acf73c8f77742aabe0286c3202bf8298223b3487baae0b9d926725b444a194a035fc581d9c0dd7849ea43698b94dc80154a385619911868754961e58d11f75111e53b0949a8c0dc2d4bb1975917aa20f097a724e47dfd3f0d65fc7f548044daaf01b5b37e58c78691a7a94cbb88967278d1efeb12320894e2a3a83c0eafa175ffe72d857a182ed099f1e8528458e2685bb21fd0208e1f3001f02823bd78ef2a45d24df543775291e058b99daa3129b51681e5ff0681e54a6594e7aabcd8260a6429c331872e58c89902a77c708361042971526d9d40eae401e5b5124e7b93c6963b46931632de1c908e011af55bbebcdbcf1df03a0a3cb93aa1b53ad868b694784dff606d50b5c6c996670b2b47e82a7ac047d36836afbe311733511d4a418b549976af201105c83b32e7ae7fb5ed8f917476da7dfe1b901c8f01945699954676f418486e581be37af3b800e57d4e1ef9fceff8b4aa6a6dc4d4822c4fc55565e5c558584e48c30c4db6b74213e69b0ce6515d06ab359c159c9b9f26504fc53d3fd7c3ba054713ef96ddefacbac34b5b28b57b90d9b272f377fae803629db82a3791d1570de7863c75054720cf3f5dac656961e604e4f0ba356da3f63eee00bb04628880c6f33fca1c7734377e3d244e918114aec5238d479c572e930b3d365993d075a2a6def96f4f6aac15e774c679e4eacc7e5acd91d82d7646f312f080416d1819bf1e357d72afa52081542af5d40af7d6eebe9fac587fe3a3e4e70b8dc2ea51f53f1eebe72a85063c4a3934741699bb44ee2e42442048904d9f314653b4f51942972ebefa427e38ec8b909a9723e0343cfc006613c40e2ce9c815eb9112bf692af3ca9387f056ca166420b703a38915e7b0659d198083d033dc44288391a92913ecbb89261aef714d76aed469afee31247c4aafcedc82833b66c42aee0e8b47ed82d95178fd77a720e6b114bb6664c258ca948636fdba1e3b5f1c498f11d55acd6c4796c2594d36ed67834932b9b39c1247e4761b60367468a375ff244272ca522f4c5e0e98e81759a3a783dfa96f4aa4469c2e0838cebbd974ed1bc0b05167574bf85a52448412959245906efaf1842fddbb09b729a32a856afef4eaae6fb253158c049e4f7410ac0001d2cbe3e0b59db263b389bd79efb26a82ef283ae1de54fde10e1406285ff4258d465c91adbd3ba3b86c70e62d3f1f370876d493d6d8f41560b3240c0f2e8eb8ec23d5385f40538a0ec92e85b166b76f709fc72290f485c8dcc11688c8be0a31842f112d45a24c6ff1c41beb5dd009a26f58d59c5d0a9a7181e9e73cb523df303c36099e733e2870af842d9bca262aed9539c56f36034f8ce921f846fe1a9d841f6d11bbef1b2870d252c1afe7dcfbb16f9443b9a5ce541c5b32dfc75a7fbfe0912fb89f2b57e1e76a4e5dc540ab41a966359d4105da947bc023d3f02b60bd356c6575ef23bee3a64ef59817b5bdc006932ab5a920c51b0fdb32825994e3b1bca892b1835629f655cce262893592451d21d0ad73eef1fd1cc98f19755328ebe4716b2dda28543d245706e0655924ea256b77e60b4fbddf3649a0cfc155c10b2f151c97fd539d24a621ec6237b0d6fe9cfe3a880d6a2a32674b78660b210e956965d9649ee19741523b9fe6973caf59fd1a7253c8edb0be75e7506ebbb4831d462f0ec9a2ec862a79fac66a541f29354b77dba3a39c4266e39417528d787235aba112724bfdd25f6bfd059ad8919693011f775f88a288031ba54f84bc177066f6bde2708c2810c3f8f1f21122673fd5fa59c060c923d0cbfb5017303e3dd792afec98ae18df6025e7d287af530802edab8d8599e76aee9f21a56c3e5cec532abf1bad0b00050c32de95ee78c0d18ed0029a4e0b77d8fcbc232f8e997e27713155003e0d5ac65e227507d300ebab61740bdd61f7469cee76f1b68136a1eea9bb34b9fcac8630737d0b483e62355a8a15816c8a5bb0234f616624e789bf46159f603ef2d59880c0400836e04cf420af8c2a3e9a6f3d4d7ed11e4b56b4943aa9b76aec56cf358958201b0dcdbf612a49b99d434e260b254692fd71ce9ad38c06aebe85c224266ebe348e7d1a7a492cf64678f880cd27f1f9673b205f3aae3292a99a73ccd9fb417b222fedfc0fe38a4cbdd4b836e2c10195bb449a728360d4c8cd7fa971169ca10c842ac60766ff7022f4bc891d994fdad7db6f5ae56ca8ba4eb7ccf96bd03a4c7e276c9866ca1aa58ec37d33d7f14ee957edd8bdf3e5f3f6aa2d01f2427c90b6b5f2a050cfd61e15ba694c730597175b1a21920eff3708b1e23590ee22f53b83db35deabc5d9c1de7a1529fe96771123494ee9714c5e5e463ca55040d72cc3d134207307ee4800a9ca44d1ce8a52937b17c19273e14e24260a941500c9e141c72c1983b8cf0db7564a7aa90517347d1a6e3becb394992c11f6542c174b3046268f604d128e3ecb2af5408633d7f0ecc6467e40522d4c2927c3de8172222afdfa6016778aecd5c36818a3425e40ef6da36cbf9add300361730920bcd8db956df071b47cd52909b7db48c79c14b25ee26dfea364f0bc5f07dcd29dc6ef23cf0e677b883c174b5e90fd8ab4e9a33141dbc5fc2cb14c4570b839c9ca6e06813682b434043e51e68be5ff55a1d7e1abd0ef7c10810930a0721135b689b388672f1fc29b2e3e382221797a1e0b783607c4a9002295da1d450a4c3fa14fd6e82b09bf9a52f793772f75f5bc111279cef79a48bc35c2d91f71fd0309d9d798a4a4289e9eeb43777053b1550b434cff48598d357fb68fe5971cd92c9ce26e1190d57379b811349b88c5484549511184161f8e7237a576d2e5b66977c66bf345eec84887c1b752e912f30dbecfe75bb9c36d4154f5279382ee1e7cf6493c15bd26cba80de0a06c3a4b3200390c56f2fd0e3b3f94d3ffb38ab607dfd5ab86e92f71cf82ab5fd63f8dd5ba531bfbb3380f5424aaa5dc25c003921fec690e5815eab3a9c81b9bb3f9f2af0a441ee9898047d6b7b2e0945488fa06a662ab750c8a67cbda9ccc2d98c926b550a4b2dabb35547392c54e88ea60ed038f84253864dc63a9f359dd9e5a84f59ce5e7a4ea470c4a14d360ce08fa668fd3a0b4d6c74504e72e8561b923092b6e25fa41f047d6cac0a2b0fcac4779a8d37e7c319edc48c4957a7fc18228c986423e9fca20fea9183fbbcbbcb678a45e4b06e3c962bad98eba71aa2a78869079b5ae110b90d38d3c9d37dc36a8f44aba2277de031b30007b3d74eaddfeb27700c931e823b058ab455a9c626179100c234aad6ec5433b25e3364df2f9128572464e7f74bcbbcdc630fdf518606ba284bfe702d33d40c9dabbe012766f8fa6c8afeaf9b607dceae9cf273b15eacd15eb710d7ab3b294ad5241a7c13b9c54126d18f8534e011ebf71062e16a372f287f5fc38aeea0f5a74149f3ba1f8fbc11a9cf208a2a5b0fe20058fe1d6e39fe77d4b026cff1950322c5b655fd4edcecd06ef6a9188906031de9c34184ed10497bb0db9f39e258410d17653933446191be5abc69b541c809b70c0f18516402a45720fa22c4840dbcf740a3ee5b222a15987b969f4adc39a712be570914528e2d964f80c5ff499bcd22536703579c6f248cc72e0c5b90a31af44cc0e8eefb22ef0d2158aea9f3c181cc5f3dda309941cce0825176c63b76bd3b459371640b8708f45e59977d538db05dac42b81f616906e5056635d0d1e70913928b1df6f46594f462243f2b898b2930e99c153057b5069313510f3a42a71a6dc8fd8e6cd005a2d62b7d8aa70a0d5a93f26a0b7bc1074c382453431023484b995d58b6914db8a2effec92c7af5f0a50adc1a95de623e7bfda66d542a51ce6a25571e97f662d0cde3f718326f8176ebafedefa7d2e2d98fbaa4317d2da2093f44df53d30662f24b9490662b5932e15881528bd9280f158e] */
