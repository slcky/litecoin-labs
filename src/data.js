// data.js

import Papa from 'papaparse';

const csvData = `Asset #,Inscription #,Image,Background,Body,Eyes,Eyewear,Headwear,Mouth,Outerwear,Rarity,Rank,Rank Value,Item #
1,642,https://litecoin.earlyordies.com/content/f2b6adf7b2d0f128fb14817ff37f5f36e9176b17571e20c49871875553f937b4i0,Shiny Red Litecoin,Ape,Purple Eyes,Glasses,Purple Hair,Normal,None,205.5188,#2,2,PUNK 1
2,643,https://litecoin.earlyordies.com/content/1ae451bcb166f64068afac48f1a52de73c1e25412eb544582dc2edda2b50f863i0,Pink Litecoin,Martian Ape,Blue Eye Shadow,Cool Shades,Cowboy Hat,Normal,None,170.5188,#9,9,PUNK 2
3,644,https://litecoin.earlyordies.com/content/d7f8a20dced73a87933a8db1518faac91a87fff926906fd8093c4b14cedbb2bbi0,Purple Litecoin,Orc Alien,Laser Eyes,Big Shades,Pink Wig Cap,Normal,None,99.86662,#44,44,PUNK 3
4,645,https://litecoin.earlyordies.com/content/f86a86cf5a9986e0d3aad524b39440462a6801b198e5f1cf48e30b0269063334i0,Lite Green Litecoin,Alien Ape,Blue Eyes,Eye Mask,Party Hat,Normal,None,194.8045,#3,3,PUNK 4
5,646,https://litecoin.earlyordies.com/content/183dde0a51b2716591d5c1b5ce81f1e51d5cd8704855603766fc5399c5d8d1aci0,Gray Litecoin,Male,Laser Eyes,None,Red Hair,Smile,None,136.5117,#22,22,PUNK 5
6,647,https://litecoin.earlyordies.com/content/caf88cf2c4c8cd373acc8524b8efa98d24aaaaab36bcd6c6506077850ff669d8i0,Orange Litecoin,Female,Green Eyes,Eye Mask,Green Hair,Lipstick,None,91.74466,#53,53,PUNK 6
7,648,https://litecoin.earlyordies.com/content/035e3640b266a3dd62802605a802df66fc6acbdb590a504cc5f8c2196e53b0a1i0,Yellow Litecoin,Female,Green Eye Shadow,Cool Shades,Pipe,Lipstick,None,94.12562,#48,48,PUNK 7
8,649,https://litecoin.earlyordies.com/content/a7dac1f3469a084c1c32ae7b0f65aaec9325841f0fc8f2651c3ebe0e499a7bb5i0,Yellow Litecoin,Orc Alien,Punk Eyes,Sunglasses,Yamaka,Normal,None,153.0188,#13,13,PUNK 8
9,650,https://litecoin.earlyordies.com/content/b191006f721482e1d97a063f0f7a004944867b73592f7b19c9ee8a5ab14db6e3i0,White Litecoin,Male,Laser Eyes,None,Mohawk,Smile,None,86.51174,#63,63,PUNK 9
10,651,https://litecoin.earlyordies.com/content/e15e7f12a1b67d34a8e5672d0fa91bcccc6c43a4439cf605287aaf368b3b6ceci0,White Litecoin,Orc Ape,Laser Eyes,Eye Patch,Clown Nose,Normal,None,97.36662,#34,34,PUNK 10
11,669,https://litecoin.earlyordies.com/content/dffbc5042b35cacfdb5c1e6a98ab7ab801bc5cd1bfaf93cce9f3680356063026i0,Lite Blue Litecoin,Orc Ape,Green Eye Shadow,Glasses,Mohawk Thin,Normal,None,88.13784,#58,58,PUNK 11
12,670,https://litecoin.earlyordies.com/content/08b6bf0729ef096a97551787e9710dc7613aec44191336884e17603148752e1fi0,Purple Litecoin,Alien Ape,Laser Eyes,VR,None,Normal,GLITCH,63.95852,#91,91,PUNK 12
13,671,https://litecoin.earlyordies.com/content/26a6feda4086ca165b6d83900548fac137d203062c5561ff78bae32a18e2542ei0,Blue Litecoin,Male,Laser Eyes,Cool Shades,Headband,Smile,GLITCH,83.17367,#68,68,PUNK 13
14,672,https://litecoin.earlyordies.com/content/23835ee8c46d3fda44d85e6ad2a0bdb38638502e367d8af4a3d37f0e9f226756i0,Orange Litecoin,Male,Laser Eyes Gold,Sunglasses,None,Smile,GLITCH,45.80127,#99,99,PUNK 14
15,673,https://litecoin.earlyordies.com/content/ebc07ae334fbd2753a32550dd28341af90c2219885b401a529307ed8f093fd17i0,Blue Litecoin,Alien Ape,Punk Eyes,Blue Lite Glasses,None,Normal,None,137.3535,#21,21,PUNK 15
16,674,https://litecoin.earlyordies.com/content/332b1dbc6578ed4372fb5891233203716a0d6b54d95bca7a2d76e90323a508efi0,Blue Litecoin,Ape,Punk Eyes,Sunglasses,None,Normal,None,60.68686,#94,94,PUNK 16
17,675,https://litecoin.earlyordies.com/content/7adff31bd13d3583842c4d6bb48c280858250a706301412d64cc6bdd1ff65c76i0,Lite Green Litecoin,Martian Ape,Punk Eyes,3D Glasses,CuteHair,Normal,None,153.0188,#14,14,PUNK 17
18,676,https://litecoin.earlyordies.com/content/097c75cc30bfe10228aa0df6435ff6438102dc5f47a0a6e7dd574f68bfc170a7i0,Gold Litecoin,Male,Purple Eyes,Eye Mask,Beanie,Smile,None,100.6163,#41,41,PUNK 18
19,677,https://litecoin.earlyordies.com/content/8c6fafb571385c7f33ece982946e9f1a722b838c91e472b94fcae58ad649bef5i0,Gray Litecoin,Male,Punk Eyes,Sunglasses,Pink Wig Cap,Smile,None,72.99725,#83,83,PUNK 19
20,678,https://litecoin.earlyordies.com/content/f2eea57ffa618128244333043063e4c21daa178e356faf79f893c9133b887f3ei0,White Litecoin,Orc Alien Female,Punk Eyes,Cool Shades,Earring,Smile,None,76.14943,#79,79,PUNK 20
21,696,https://litecoin.earlyordies.com/content/18bcf9cb89cd40c2b0421a58845a209b98803c8f3ac1e3dc747b28085418d2e2i0,Orange Litecoin,Orc Alien Female,Laser Eyes,Eye Mask,None,Smile,None,53.16532,#95,95,PUNK 21
22,697,https://litecoin.earlyordies.com/content/46c1a748547cb50d46f3c9ff5eaa40e147b081930703094e001189237034c150i0,Lite Green Litecoin,Male,Laser Eyes Gold,None,Tuque,Smile,None,66.70937,#90,90,PUNK 22
23,698,https://litecoin.earlyordies.com/content/077b524f2ebeb872b128f1da65c352f4b3d7bed6188cb01ef26ccaba317af5c6i0,Platinum Litecoin,Male,Laser Eyes Gold,Welding Goggles,Blonde Hair,Smile,None,63.49509,#93,93,PUNK 23
24,699,https://litecoin.earlyordies.com/content/353dceb8138bbc9ef232a984a2d903dda6b39ecba339115f88aaad3469015cfei0,Gray Litecoin,Orc Alien Female,Laser Eyes,None,Cigarette,Smile,None,94.66392,#51,51,PUNK 24
25,700,https://litecoin.earlyordies.com/content/4952c417bebd6d4642ca497259819fcb8be60e35e4ab662993f1b04c165e8feai0,Biege Background,Female,Laser Eyes,None,Blonde Hair,Lipstick,None,140.1401,#20,20,PUNK 25
26,701,https://litecoin.earlyordies.com/content/68072f9ec41fa67072e878d9634716590411ec493a4915afd90ab0bf19572bbci0,Stone Litecoin,Female,Punk Eyes,3D Glasses,Clown Nose,Lipstick,None,114.1256,#29,29,PUNK 26
27,702,https://litecoin.earlyordies.com/content/281eed0b78d6eba9775b9c2493d420eae18309619917402fe7049da389cd9e64i0,Stone Litecoin,Female,Laser Eyes Gold,Eye Mask Lens,None,Lipstick,None,108.7201,#31,31,PUNK 27
28,703,https://litecoin.earlyordies.com/content/48887c8427cda17b1c7eda1fa88a2980d884bd173ab5962af445ba1ef5813a6fi0,White Litecoin,Alien Ape,Laser Eyes Gold,None,None,Normal,None,48.4466,#96,96,PUNK 28
29,704,https://litecoin.earlyordies.com/content/3595efc6c41ee1c35e8d115070f686998fe8c6f11417e460f1f719355038c8e0i0,Yellow Litecoin,Male,Laser Eyes Gold,Tanning Glasses,Black Hair,Smile,GLITCH,84.91892,#62,62,PUNK 29
30,705,https://litecoin.earlyordies.com/content/60f137a86bcc10bb55d45ceff8a10405a0c1da778c5de3b8a3c010464e6b8b5ai0,White Litecoin,Male,Punk Eyes,Big Shades,Earring,Smile,None,67.99725,#87,87,PUNK 30
31,722,https://litecoin.earlyordies.com/content/da7719ca8aa0f2e8ff6db1f2376bd71bbb092850a7ef618f96c7aad916233ccdi0,Purple Litecoin,Orc Alien Female,Green Eyes,Glasses,Sombrero,Smile,None,117.8161,#28,28,PUNK 31
32,723,https://litecoin.earlyordies.com/content/c88f79bc70e6cf98a9afe5e9ab1ac16f1cad0a289404217cbba0811b260d4c60i0,Pink Litecoin,Orc Alien Female,Laser Eyes Gold,Tanning Glasses,Brown Hair,Smile,None,90.69488,#56,56,PUNK 32
33,724,https://litecoin.earlyordies.com/content/443aff7f6f57f1400e172d3d939777a24b1113c34eb4fc830b6a239f5a18f831i0,Pink Litecoin,Male,Laser Eyes,None,Mohawk,Smile,None,83.17841,#67,67,PUNK 33
34,725,https://litecoin.earlyordies.com/content/b2cffd511a6196b315113b029c0d5eabd2c7b1fefa68af1ae5bdca4ed0766c1ai0,Blue Litecoin,Alien,Punk Eyes,Big Shades,Fedora,Normal,None,104.8045,#36,36,PUNK 34
35,726,https://litecoin.earlyordies.com/content/f9a50ff2c2271ea30f90f97529a669d97e55b26b5499ca868d2b4bd0190b5963i0,Gold Litecoin,Female,Laser Eyes Gold,Glasses,Beanie,Lipstick,None,74.5044,#81,81,PUNK 35
36,727,https://litecoin.earlyordies.com/content/38336032dbf461dde47aeec842faa1dc2412514ac2e1a6d7e44105408b3bcbf8i0,Gold Litecoin,Male,Punk Eyes,3D Glasses,Flower Crown,Smile,None,143.8306,#19,19,PUNK 36
37,728,https://litecoin.earlyordies.com/content/814229b8f446b89ceff8ae7ab4a0a6e2252de4e5841c68702c5ad2bc49f54730i0,Green Litecoin,Male,Laser Eyes,None,None,Smile,GLITCH,45.60365,#100,100,PUNK 37
38,729,https://litecoin.earlyordies.com/content/53ffdee5dd96e15ba965891b133bf09afeea487c129c924d02dcf21a0c12f164i0,Yellow Litecoin,Zombie,Laser Eyes Gold,Sunglasses,Mohawk Thin,Smile,None,76.64726,#76,76,PUNK 38
39,730,https://litecoin.earlyordies.com/content/e8ded8ea51f899a4282bbe23ddd0cd739568be55ea798b8f2d4fceb66f2251f5i0,Green Litecoin,Martian,Purple Eyes,None,Brown Hair,Normal,GLITCH,117.895,#26,26,PUNK 39
40,731,https://litecoin.earlyordies.com/content/75c897868ba4b7afe357d0334e9cbc8afe18db6632dc0527ec1ee184a40855fci0,Red Litecoin,Female,Punk Eyes,Tanning Glasses,Blonde Hair,Lipstick,None,67.45895,#88,88,PUNK 40
41,733,https://litecoin.earlyordies.com/content/06c1f181ab2b4b4af84433759d4f44ae018965d5cc1477ba4e010139982791a3i0,Sky Blue Litecoin,Alien Female,Laser Eyes Gold,Sunglasses,Mohawk Red,Smile,None,191.5282,#4,4,PUNK 41
42,734,https://litecoin.earlyordies.com/content/8e0b19ec85e896af201b9de85bacedebc2693b8078df37f8a833f17941d2c1fei0,Blue Litecoin,Zombie,Blue Eye Shadow,Glasses,Green Hair,Smile,None,83.88752,#65,65,PUNK 42
43,735,https://litecoin.earlyordies.com/content/4ae69510ed28772a53b4e8379aeac43ae4c5e46fb9e9c0735550e08e5ea9808bi0,Lite Blue Litecoin,Martian Female,Laser Eyes,3D Glasses,Black Beard,Brown Lipstick,None,177.283,#6,6,PUNK 43
44,736,https://litecoin.earlyordies.com/content/f72f665fd872147570e8d568d0b788c19b994f255295ef74a386e55791c25e79i0,Shamrock Litecoin,Alien Female,Punk Eyes,None,Blonde Hair,Smile,None,102.8161,#38,38,PUNK 44
45,737,https://litecoin.earlyordies.com/content/fb13a5f39eccee876433c81d0404037f1a3aff3bca4e840e8a4d6f256dcc880ai0,Shiny Red Litecoin,Alien Female,Laser Eyes Gold,None,Black Hair,Smile,None,104.0282,#37,37,PUNK 45
46,738,https://litecoin.earlyordies.com/content/610c994448af7399b8e101eb36ad075444fa7d29868949d4ad3e9ba244d4a3b9i0,Purple Litecoin,Male,Laser Eyes,None,Black Beard,Brown Lipstick,None,75.67841,#80,80,PUNK 46
47,739,https://litecoin.earlyordies.com/content/26698c27815f2b7a9ecca99208bd9c746a2af91aabdb7ba91b4a51da84ea4ecci0,Green Litecoin,Ape,Laser Eyes,None,None,Purple Lipstick,None,90.54627,#55,55,PUNK 47
48,740,https://litecoin.earlyordies.com/content/14a106d98e010b2f17bf0b01c8c2310fae004c177c4a0aa24460d713d36e437ci0,Stone Litecoin,Alien Ape,Punk Eyes,Sunglasses,Earring,Normal,None,78.85213,#73,73,PUNK 48
49,741,https://litecoin.earlyordies.com/content/d202e08ef0dcaa527401970043524449430423743668ae5b14d2fb9b98f3ca43i0,Red Litecoin,Female,Punk Eyes,VR,Earring,Lipstick,None,67.45895,#89,89,PUNK 49
50,742,https://litecoin.earlyordies.com/content/a2d36d3b77f81752d036aae9b06527e7fc25db90a2f594b82251593796b6c229i0,Gray Litecoin,Female,Laser Eyes Gold,None,None,Lipstick,None,49.55342,#97,97,PUNK 50
51,744,https://litecoin.earlyordies.com/content/44846a9a7a8459e085888f976dfaaa2407ad9fe13d7674b115e02fb61df709c7i0,Shamrock Litecoin,Orc Ape,Laser Eyes,Sunglasses,White Hair,Normal,None,109.8666,#30,30,PUNK 51
52,745,https://litecoin.earlyordies.com/content/3c4c1a6102aa7a9c8c45a4bb16b2b7e71eddca9a114624861fb4a541257c271ai0,Lite Blue Litecoin,Orc Ape,Punk Eyes,3D Glasses,Headband,Normal,GLITCH,83.84739,#64,64,PUNK 52
53,746,https://litecoin.earlyordies.com/content/68295c40f978b85d2af6cc2440395dd689715c9d757ba64ac706624a47235d7ai0,Lite Blue Litecoin,Martian Ape,Laser Eyes Gold,None,Cute Hair,Normal,None,93.51663,#52,52,PUNK 53
54,747,https://litecoin.earlyordies.com/content/6d010e7fb19211f9068b77d57b82a4336d0585cd8a99bd91d3170d3a3c9ff5f1i0,Lite Green Litecoin,Male,Laser Eyes Gold,None,None,Purple Lipstick,None,70.09173,#85,85,PUNK 54
55,748,https://litecoin.earlyordies.com/content/c2d0f84bf97c0feddc2ed1b34259d9550eb86faa72266fb3d1925f8558d01f65i0,Lite Blue Litecoin,Male,Punk Eyes,Tanning Glasses,Cute Hair,Smile,None,95.6163,#49,49,PUNK 55
56,749,https://litecoin.earlyordies.com/content/cb31ec16869e17fb4c1a981eb764a48c4cce9ff64d8a0ae87e62be1e11b04969i0,Red Litecoin,Martian Ape,Blue Eye Shadow,None,Pipe,Normal,None,87.18546,#59,59,PUNK 56
57,750,https://litecoin.earlyordies.com/content/587540e8e7cd0816547c6936e608631adae668d13f4972f3ed019c8817654d6ai0,Gold Litecoin,Orc Ape,Blue-Gray Eyes,Welding Goggles,Mutton Chops,Normal,None,148.1378,#16,16,PUNK 57
58,751,https://litecoin.earlyordies.com/content/b773b7b88f1827b545feadf0165107cb23c7d58519b78efc515c1fb1b3dc1c2fi0,Green Litecoin,Male,Laser Eyes Gold,Welding Goggles,Brown Hair,Smile,GLITCH,83.3713,#66,66,PUNK 58
59,752,https://litecoin.earlyordies.com/content/1a793112888f46367f6b73ea87815ab1c3fa4173c9cf26b69f3e154cf860da29i0,Red Litecoin,Male,Dark Green Eyes,Welding Goggles,Fedora,Smile,None,118.1163,#27,27,PUNK 59
60,753,https://litecoin.earlyordies.com/content/0beeb912c1b9a3ca4544cba7635b29307fdedeea116fb97f4aab30fe27219833i0,Yellow Litecoin,Martian,Blue Eye Shadow,None,None,Normal,None,63.06781,#92,92,PUNK 60
61,757,https://litecoin.earlyordies.com/content/d477af27e387c960591422a811641748cd99d015bc0f54979688b4719ef4eb36i0,Purple Litecoin,Female,Green Eye Shadow,Eye Patch,Beanie,Lipstick,None,89.95895,#57,57,PUNK 61
62,758,https://litecoin.earlyordies.com/content/ca277355c37e7fcee1a8386a77f5ecbed328975450bfd06ee54ca1709a7ec42ei0,Blue Litecoin,Alien Ape,Punk Eyes,3D Glasses,Mohawk Brown,Normal,None,93.97118,#50,50,PUNK 62
63,759,https://litecoin.earlyordies.com/content/4018a826f7970dede83f69f5a184477b42b64f4aa041a6fa7b612d25a443c0f1i0,Orange Litecoin,Zombie,Punk Eyes,Welding Goggles,Bandana,Smile,None,148.0542,#17,17,PUNK 63
64,760,https://litecoin.earlyordies.com/content/25e1d5ddcf882053abf71504cedb362c1b02340e19683b319490278e89e74007i0,Faint Purple Litecoin,Orc Ape,Green Eye Shadow,None,Tyrolean,Normal,None,184.6855,#5,5,PUNK 64
65,761,https://litecoin.earlyordies.com/content/2cab849804f1075c2992fcd396f4becba6478854e1cb1c571ad71b6f215bc3d6i0,Deep Blue Litecoin,Orc Ape,Laser Eyes,Cool Shades,Earring,Normal,None,104.8666,#35,35,PUNK 65
66,762,https://litecoin.earlyordies.com/content/d072571824b5f85d5839f262e55ee7679fcbc7996cd09af1e3737039c6aad06ai0,Platinum Litecoin,Alien,Laser Eyes Gold,None,Orange Hair,Normal,GLITCH,172.4405,#8,8,PUNK 66
67,763,https://litecoin.earlyordies.com/content/497a688ab3667fc97b1be00863c58b3673da2ab156dea1ba9b5769fe68eb1169i0,Platinum Litecoin,Female,Green Eyes,Eye Mask,None,Hot Lipstick,None,172.9842,#7,7,PUNK 67
68,764,https://litecoin.earlyordies.com/content/f4ed962636a2510afe20565ebfc22c1576cda91b44e287f3c4868fb1c247c8e8i0,Faint Purple Litecoin,Martian,Laser Eyes,None,Sombrero,Normal,None,132.3666,#23,23,PUNK 68
69,765,https://litecoin.earlyordies.com/content/7274ada1f7b82c7b090723c39266bc823e45a371dabcfb1f83d6a09448c7303di0,Gray Litecoin,Orc Alien Female,Laser Eyes,None,Pink Wig Cap,Smile,None,77.99725,#78,78,PUNK 69
70,766,https://litecoin.earlyordies.com/content/44046b9a2265520ff75dfd21741736c40ba67d64977758d0183f14c8979e8dcdi0,Red Litecoin,Zombie,Laser Eyes Gold,Eye Patch,Mustache,Smile,None,101.6473,#39,39,PUNK 70
71,772,https://litecoin.earlyordies.com/content/db90ac18f0d8645440c945c1709c08226992c5a8cb300912212a8f3a3bb02619i0,Purple Litecoin,Female,Green Eye Shadow,Eye Patch,Blonde Hair,Lipstick,None,81.62562,#70,70,PUNK 71
72,773,https://litecoin.earlyordies.com/content/93d0d44db7d3b6667fb19c90e548134e009ad42e32fc3879e80c5e32305ad1a4i0,Shiny Red Litecoin,Martian Ape,Blue-Gray Eyes,Welding Goggles,Stuble,Brown Lipstick,None,235.4351,#1,1,PUNK 72
73,774,https://litecoin.earlyordies.com/content/da0a49d4ef1f3ea608c59655504aec17ff3776589478184ea235356c2b321206i0,Pink Litecoin,Martian Ape,Laser Eyes,Eye Mask,Black Beard,Brown Lipstick,None,98.1163,#46,46,PUNK 73
74,775,https://litecoin.earlyordies.com/content/892de400e6526da7f43693b9f62bf50e717f9f5e355932ec3df04c60a62f5054i0,Lite Green Litecoin,Orc Alien,Punk Eyes,Big Shades,Pipe,Normal,None,98.85213,#45,45,PUNK 74
75,776,https://litecoin.earlyordies.com/content/e4ed77343308860827c69681232ba427bdd807a3db71bcb8c9c181f089f87358i0,Sky Blue Litecoin,Female,Blue Eye Shadow,Tanning Glasses,Cap,Lipstick,None,151.6256,#15,15,PUNK 75
76,777,https://litecoin.earlyordies.com/content/d99b7293c9ec9a12d87f16b565d6ead53e86ea0b7a61f6c5ad7ed08205a912cbi0,Orange Litecoin,Male,Punk Eyes,VR,Tuque,Smile,None,73.83058,#82,82,PUNK 76
77,778,https://litecoin.earlyordies.com/content/a166594915a5dc57a3993660120145a8a401678b1cbddb395d20a823bf00605ai0,Green Litecoin,Male,Punk Eyes,Sunglasses,White Hair,Smile,None,69.66392,#86,86,PUNK 77
78,779,https://litecoin.earlyordies.com/content/23e7b1b01b939c0dd501e93c6b3d8050b58a4e4f8328a93ac5c46f69910157eei0,Platinum Litecoin,Martian,Punk Eyes,VR,None,Purple Lipstick,None,100.3651,#40,40,PUNK 78
79,780,https://litecoin.earlyordies.com/content/c080b12c2d6fd01663727d6c02904640f704cb40b248b4eca6a485cc3470e466i0,Green Litecoin,Zombie,Punk Eyes,Eye Patch,Green Hair,Smile,None,79.60181,#74,74,PUNK 79
80,781,https://litecoin.earlyordies.com/content/cf6ec9a0d727008b5e4f48216da281a25030c836fd52e3d8464124042ada41f3i0,White Litecoin,Alien,Punk Eyes,VR,Net,Normal,None,127.1855,#24,24,PUNK 80
81,789,https://litecoin.earlyordies.com/content/e7cc470e7238abc81e6413bf3dc68da76a0f00a0a034b7c5639082f27fc2bce4i0,Brown Litecoin,Orc Ape,Green Eyes,Eye Mask,Blonde Hair,Normal,None,119.8045,#25,25,PUNK 81
82,790,https://litecoin.earlyordies.com/content/bb1d3da7400109b18aa1897aa729c9898e1690359d713f9b1310e1b4b5220e6bi0,Lite Green Litecoin,Alien Female,Laser Eyes,None,Beanie,Smile,None,78.83058,#75,75,PUNK 82
83,791,https://litecoin.earlyordies.com/content/334dfc7ee77e307f28d5ae17a1769f10ca69f5bcc01f2e65e9ce19bd9631bc2fi0,Blue Litecoin,Alien Ape,Laser Eyes,Glasses,None,Normal,None,48.36802,#98,98,PUNK 83
84,792,https://litecoin.earlyordies.com/content/26739706de7450f3c673f39b6094921a74a2f8648da8878d305fe7563494ac42i0,Pink Litecoin,Ape,Punk Eyes,Sunglasses,Mohawk Brown,Normal,None,107.1855,#33,33,PUNK 84
85,793,https://litecoin.earlyordies.com/content/7240007cb1690d04c4d9453eb0b822f1052ac0ec7f9ba9f6be31ad630ef03a52i0,Platinum Litecoin,Alien Ape,Laser Eyes,Glasses,Tuque,Normal,None,81.53329,#69,69,PUNK 85
86,794,https://litecoin.earlyordies.com/content/c1de8e63299d277dcfec39c5d3104986208efb87de111c536f70737c48c6e480i0,Pink Litecoin,Alien Ape,Punk Eyes,3D Glasses,Cigarette,Normal,None,96.35213,#47,47,PUNK 86
87,795,https://litecoin.earlyordies.com/content/0ee969e2c8ba5838e06f8180a7be525886977130de653159645ce4e83112f68di0,Red Litecoin,Zombie,Punk Eyes,Big Shades,Mutton Chops,Smile,None,100.4351,#42,42,PUNK 87
88,796,https://litecoin.earlyordies.com/content/69f018ac0c67a323f593a85020d5a8963cecd60916d63200c11825d77b326900i0,Red Litecoin,Martian,Punk Eyes,Sunglasses,White Hair,Normal,None,81.35213,#71,71,PUNK 88
89,797,https://litecoin.earlyordies.com/content/cedadc64498f81420994c97d7b9a01e9a31c57146f03b514f89fbc7a75d238c0i0,Gold Litecoin,Female,Blue Eye Shadow,Glasses,Brown Beard,Lipstick,None,161.6256,#12,12,PUNK 89
90,798,https://litecoin.earlyordies.com/content/77412dce88f5a2010646d09bffb97fdc5134c58e37f16cc665b4c872853bc911i0,Faint Blue Litcoin,Male,Punk Eyes,3D Glasses,Headband,Smile,GLITCH,163.7068,#11,11,PUNK 90
91,825,https://litecoin.earlyordies.com/content/f94ee7a6c0afe1b6d250c2e34fabc847fbdb23e93a01f98dc6400b491142679fi0,Brown Litecoin,Alien Ape,Blue Eyes,Glasses,Black Beard,Brown Lipstick,None,166.1494,#10,10,PUNK 91
92,826,https://litecoin.earlyordies.com/content/5b1d1a138a4b76f42fc873e8577273d842a9b23014c64a178c380e1c2d203c55i0,Lite Blue Litecoin,Orc Ape,Laser Eyes Gold,Sunglasses,Cap,Normal,None,91.01663,#54,54,PUNK 92
93,827,https://litecoin.earlyordies.com/content/38d90256db2107a0bd918aca64e976b4c1d942f61828df51bfa21c53e0066d77i0,Lite Blue Litecoin,Orc Alien,Laser Eyes Gold,None,Net,Normal,GLITCH,108.3928,#32,32,PUNK 93
94,828,https://litecoin.earlyordies.com/content/b4efd958e52f6b282823837cd00c2f576d1e50d621bce63be653e63129d8a809i0,Orange Litecoin,Male,Dark Green Eyes,Eye Patch,None,Smile,GLITCH,99.58915,#43,43,PUNK 94
95,829,https://litecoin.earlyordies.com/content/200aec9e9bfb34bfd86ae08ec22dec2a9c25a55acb01c7482a53772641115b52i0,Orange Litecoin,Orc Ape,Laser Eyes Gold,Cool Shades,Green Hair,Normal,None,72.56425,#84,84,PUNK 95
96,830,https://litecoin.earlyordies.com/content/83a6cf800377ba81ff1ad9f76c2e1412f45a45d70715eba5423a995f568a52aci0,Orange Litecoin,Male,Laser Eyes,VR,Black Hair,Smile,GLITCH,81.38796,#72,72,PUNK 96
97,831,https://litecoin.earlyordies.com/content/8653e81ba5608e42432b9b3f7151e9212f3a91c16c134a45ae0d5c413fef19cfi0,Yellow Litecoin,Zombie,Laser Eyes Gold,Big Shades,Fedora,Smile,None,84.98059,#61,61,PUNK 97
98,832,https://litecoin.earlyordies.com/content/9b039e9e72bb5974267825e68e8a0b5b42b78b192e422d22d8e49282286290cbi0,Deep Blue Litecoin,Orc Alien Female,Green Eye Shadow,Welding Goggles,Mustache,Smile,None,147.1018,#18,18,PUNK 98
99,833,https://litecoin.earlyordies.com/content/e1bc6c77345c487d2cc17c764f4ed7582b606b461eb6deb7aba2eee2db96c7fai0,Yellow Litecoin,Orc Alien Female,Laser Eyes Gold,Glasses,Mohawk Thin,Smile,None,76.52821,#77,77,PUNK 99
100,834,https://litecoin.earlyordies.com/content/ad01ede5ba8bc5c20366155fe0828fc3fb4e18649702939db2f898cd4d7e91f5i0,Red Litecoin,Female,Punk Eyes,Eye Mask Lens,None,Lipstick,None,86.67464,#60,60,PUNK 100`;

const parsedData = Papa.parse(csvData, { header: true }).data;

export default parsedData;