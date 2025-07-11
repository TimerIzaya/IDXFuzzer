let db;
const openRequest = window.indexedDB.open('str_936', 6316633046943687)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2962');
    var put_0 = objectStore_0.put({f0_v: '<boolean>', f1_d: '<boolean>', f2_p: '<string>', f3_g: '<array>', f4_s: '<number>', f5_z: '<boolean>', f6_d: '<number>', f7_p: '<null>', f8_r: '<boolean>', f9_c: '<object>'}, 'HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv');
    var index_1993 = objectStore_0.createIndex('index_1993', 'test', {unique: false, multiEntry: false});
    var add_0 = objectStore_0.add({f0_w: '<string>', f1_o: '<string>', f2_i: '<null>', f3_z: '<number>', f4_o: '<number>', f5_p: '<string>', f6_l: '<array>', f7_l: '<string>', f8_l: '<string>', f9_y: '<null>', f10_r: '<array>', f11_y: '<number>', f12_f: '<object>', f13_c: '<boolean>', f14_j: '<number>', f15_s: '<string>', f16_q: '<string>', f17_k: '<array>', f18_v: '<boolean>', f19_q: '<number>', f20_g: '<string>', f21_e: '<string>', f22_r: '<object>', f23_i: '<object>', f24_s: '<array>', f25_o: '<array>', f26_x: '<string>', f27_t: '<null>', f28_v: '<array>', f29_h: '<boolean>', f30_c: '<object>', f31_s: '<object>', f32_x: '<array>', f33_y: '<number>', f34_g: '<boolean>', f35_i: '<object>', f36_i: '<null>', f37_y: '<array>', f38_f: '<string>', f39_x: '<string>', f40_q: '<string>', f41_w: '<object>', f42_s: '<null>', f43_s: '<null>', f44_c: '<number>', f45_n: '<null>', f46_w: '<null>', f47_e: '<object>', f48_r: '<string>', f49_g: '<string>', f50_b: '<null>', f51_o: '<string>', f52_i: '<boolean>', f53_m: '<null>', f54_u: '<array>', f55_e: '<boolean>', f56_l: '<number>', f57_d: '<boolean>', f58_n: '<string>', f59_v: '<string>', f60_p: '<string>', f61_k: '<object>', f62_b: '<number>', f63_b: '<number>', f64_t: '<array>', f65_t: '<null>', f66_f: '<object>', f67_e: '<object>', f68_h: '<null>', f69_r: '<array>', f70_q: '<string>', f71_b: '<string>', f72_c: '<object>', f73_r: '<array>', f74_a: '<number>', f75_l: '<string>', f76_l: '<number>', f77_o: '<array>', f78_p: '<string>', f79_f: '<boolean>', f80_b: '<string>', f81_v: '<string>', f82_y: '<object>', f83_w: '<array>', f84_t: '<boolean>', f85_v: '<null>', f86_i: '<null>', f87_x: '<null>', f88_d: '<string>', f89_a: '<object>', f90_l: '<object>', f91_f: '<object>', f92_c: '<string>', f93_o: '<array>', f94_u: '<object>', f95_q: '<array>', f96_e: '<boolean>', f97_t: '<array>', f98_g: '<object>', f99_f: '<null>', f100_o: '<null>', f101_g: '<object>', f102_v: '<array>', f103_a: '<number>', f104_w: '<boolean>', f105_a: '<null>', f106_l: '<number>', f107_x: '<string>', f108_d: '<array>', f109_i: '<object>', f110_y: '<string>', f111_i: '<boolean>', f112_d: '<array>', f113_m: '<array>', f114_o: '<number>', f115_i: '<boolean>', f116_c: '<boolean>', f117_g: '<number>', f118_l: '<array>', f119_l: '<null>', f120_s: '<object>', f121_w: '<string>', f122_n: '<boolean>', f123_n: '<string>', f124_x: '<boolean>', f125_n: '<string>', f126_b: '<array>', f127_r: '<null>', f128_p: '<null>', f129_f: '<number>', f130_v: '<boolean>', f131_g: '<null>', f132_d: '<object>', f133_k: '<object>', f134_e: '<object>', f135_o: '<boolean>', f136_b: '<null>', f137_g: '<number>', f138_w: '<object>', f139_f: '<null>', f140_j: '<object>', f141_n: '<object>', f142_r: '<null>', f143_f: '<array>', f144_k: '<object>', f145_b: '<boolean>', f146_n: '<object>', f147_p: '<boolean>', f148_z: '<null>', f149_f: '<boolean>', f150_o: '<null>', f151_t: '<boolean>', f152_i: '<null>', f153_n: '<object>', f154_d: '<array>', f155_w: '<boolean>', f156_z: '<boolean>', f157_t: '<boolean>', f158_r: '<string>', f159_a: '<array>', f160_g: '<number>', f161_q: '<null>', f162_e: '<boolean>', f163_f: '<object>', f164_i: '<number>', f165_a: '<number>', f166_m: '<string>', f167_g: '<object>', f168_t: '<number>', f169_a: '<array>', f170_w: '<object>', f171_i: '<object>', f172_n: '<boolean>', f173_w: '<array>', f174_w: '<boolean>', f175_f: '<boolean>', f176_f: '<string>', f177_n: '<array>', f178_y: '<array>', f179_i: '<string>', f180_d: '<array>', f181_n: '<number>', f182_d: '<array>', f183_l: '<array>', f184_w: '<array>', f185_u: '<object>', f186_t: '<array>', f187_u: '<object>', f188_c: '<number>', f189_e: '<array>', f190_s: '<object>', f191_z: '<array>', f192_w: '<array>', f193_j: '<boolean>', f194_x: '<array>', f195_h: '<null>', f196_y: '<array>', f197_x: '<number>', f198_s: '<array>', f199_r: '<number>', f200_d: '<number>', f201_z: '<boolean>', f202_w: '<number>', f203_h: '<array>', f204_o: '<string>', f205_c: '<number>', f206_d: '<object>', f207_a: '<null>', f208_u: '<array>', f209_b: '<null>', f210_o: '<array>', f211_t: '<number>', f212_m: '<string>', f213_p: '<null>', f214_k: '<boolean>', f215_v: '<null>', f216_d: '<boolean>', f217_o: '<null>', f218_k: '<null>', f219_k: '<number>', f220_a: '<string>', f221_t: '<null>', f222_n: '<string>', f223_a: '<null>', f224_i: '<array>', f225_r: '<array>', f226_u: '<boolean>', f227_f: '<object>', f228_e: '<number>', f229_g: '<object>', f230_y: '<array>', f231_e: '<string>', f232_x: '<string>', f233_k: '<boolean>', f234_m: '<boolean>', f235_l: '<string>', f236_j: '<null>', f237_a: '<null>', f238_m: '<string>', f239_y: '<string>', f240_l: '<string>', f241_b: '<object>', f242_z: '<null>', f243_h: '<object>', f244_j: '<object>', f245_r: '<null>', f246_h: '<number>', f247_b: '<boolean>', f248_i: '<array>', f249_b: '<array>', f250_j: '<object>', f251_z: '<null>', f252_q: '<null>', f253_q: '<boolean>', f254_v: '<object>', f255_m: '<number>', f256_n: '<number>', f257_x: '<boolean>', f258_u: '<number>', f259_z: '<object>', f260_e: '<number>', f261_r: '<null>', f262_v: '<string>', f263_r: '<boolean>', f264_i: '<object>', f265_p: '<string>', f266_x: '<number>', f267_a: '<object>', f268_p: '<number>', f269_b: '<array>', f270_d: '<boolean>', f271_t: '<array>', f272_k: '<array>', f273_f: '<null>', f274_k: '<number>', f275_m: '<number>', f276_p: '<number>', f277_w: '<number>', f278_o: '<number>', f279_j: '<object>', f280_u: '<null>', f281_i: '<array>', f282_m: '<boolean>', f283_z: '<string>', f284_m: '<string>', f285_a: '<object>', f286_i: '<null>', f287_o: '<number>', f288_x: '<null>', f289_a: '<boolean>', f290_j: '<array>', f291_i: '<string>', f292_f: '<array>', f293_l: '<number>', f294_y: '<boolean>', f295_x: '<array>', f296_y: '<number>', f297_n: '<number>', f298_y: '<string>', f299_i: '<boolean>', f300_x: '<number>', f301_c: '<array>', f302_x: '<array>', f303_r: '<number>', f304_f: '<null>', f305_s: '<number>', f306_s: '<string>', f307_a: '<object>', f308_g: '<object>', f309_n: '<array>', f310_h: '<array>', f311_b: '<boolean>', f312_y: '<null>', f313_e: '<string>', f314_y: '<string>', f315_o: '<object>', f316_x: '<string>', f317_q: '<null>', f318_u: '<array>', f319_r: '<boolean>', f320_m: '<array>', f321_w: '<number>', f322_v: '<null>', f323_o: '<object>', f324_r: '<null>', f325_d: '<string>', f326_z: '<boolean>', f327_s: '<string>', f328_h: '<string>', f329_o: '<boolean>', f330_h: '<number>', f331_h: '<number>', f332_l: '<null>', f333_s: '<array>', f334_x: '<object>', f335_b: '<object>', f336_n: '<string>', f337_m: '<array>', f338_c: '<string>', f339_z: '<array>', f340_r: '<number>', f341_t: '<null>', f342_n: '<boolean>', f343_f: '<object>', f344_t: '<object>', f345_t: '<object>', f346_h: '<object>', f347_m: '<null>', f348_k: '<array>', f349_t: '<number>', f350_o: '<object>', f351_a: '<array>', f352_w: '<array>', f353_l: '<array>', f354_u: '<object>', f355_a: '<array>', f356_y: '<boolean>', f357_v: '<object>', f358_h: '<array>', f359_z: '<object>', f360_k: '<object>', f361_a: '<number>', f362_h: '<number>', f363_m: '<number>', f364_a: '<object>', f365_s: '<array>', f366_b: '<array>', f367_x: '<number>', f368_l: '<number>', f369_q: '<object>', f370_s: '<array>', f371_n: '<boolean>', f372_q: '<number>', f373_m: '<array>', f374_g: '<number>', f375_b: '<object>', f376_z: '<string>', f377_d: '<null>', f378_m: '<object>', f379_x: '<null>', f380_x: '<array>', f381_u: '<boolean>', f382_b: '<array>', f383_u: '<object>', f384_p: '<array>', f385_m: '<object>', f386_x: '<null>', f387_g: '<null>', f388_t: '<number>', f389_l: '<string>', f390_s: '<string>', f391_h: '<boolean>', f392_q: '<null>', f393_k: '<number>', f394_y: '<null>', f395_t: '<null>', f396_y: '<null>', f397_a: '<array>', f398_i: '<string>', f399_e: '<object>', f400_u: '<boolean>', f401_k: '<null>', f402_f: '<string>', f403_y: '<string>', f404_f: '<null>', f405_k: '<object>', f406_o: '<string>', f407_j: '<number>', f408_a: '<string>', f409_g: '<object>', f410_n: '<array>', f411_d: '<string>', f412_l: '<null>', f413_l: '<string>', f414_v: '<object>', f415_f: '<number>', f416_u: '<array>', f417_j: '<null>', f418_i: '<object>', f419_c: '<number>', f420_i: '<string>', f421_g: '<string>', f422_u: '<null>', f423_g: '<string>', f424_k: '<boolean>', f425_u: '<number>', f426_g: '<number>', f427_e: '<number>', f428_s: '<string>', f429_f: '<string>', f430_z: '<string>', f431_w: '<object>', f432_y: '<null>', f433_x: '<boolean>', f434_p: '<array>', f435_m: '<string>', f436_y: '<object>', f437_r: '<null>', f438_b: '<number>', f439_s: '<string>', f440_j: '<array>', f441_x: '<object>', f442_h: '<object>', f443_g: '<object>', f444_o: '<null>', f445_z: '<string>', f446_p: '<boolean>', f447_l: '<boolean>', f448_d: '<object>', f449_d: '<string>', f450_a: '<number>', f451_t: '<object>', f452_u: '<string>', f453_q: '<string>', f454_f: '<number>', f455_l: '<object>', f456_u: '<array>', f457_i: '<string>', f458_o: '<string>', f459_r: '<null>', f460_o: '<boolean>', f461_i: '<string>', f462_p: '<string>', f463_m: '<array>', f464_a: '<number>', f465_n: '<array>', f466_r: '<null>', f467_k: '<null>', f468_r: '<array>', f469_k: '<number>', f470_j: '<string>', f471_x: '<array>', f472_e: '<array>', f473_i: '<string>', f474_z: '<array>', f475_e: '<boolean>', f476_l: '<array>', f477_j: '<number>', f478_l: '<array>', f479_p: '<object>', f480_p: '<string>', f481_w: '<number>', f482_o: '<boolean>', f483_j: '<boolean>', f484_x: '<null>', f485_a: '<object>', f486_q: '<object>', f487_z: '<array>', f488_l: '<null>', f489_v: '<null>', f490_c: '<number>', f491_x: '<array>', f492_a: '<null>', f493_g: '<array>', f494_d: '<number>', f495_u: '<boolean>', f496_z: '<string>', f497_f: '<object>', f498_u: '<string>', f499_z: '<string>', f500_r: '<string>', f501_a: '<number>', f502_w: '<array>', f503_e: '<string>', f504_z: '<number>', f505_u: '<number>', f506_q: '<string>', f507_y: '<number>', f508_t: '<string>', f509_a: '<boolean>', f510_h: '<object>', f511_b: '<object>', f512_h: '<boolean>', f513_i: '<boolean>', f514_i: '<number>', f515_k: '<null>', f516_y: '<boolean>', f517_x: '<object>', f518_s: '<boolean>', f519_w: '<null>', f520_h: '<string>', f521_i: '<object>', f522_w: '<string>', f523_q: '<number>', f524_x: '<array>', f525_c: '<number>', f526_u: '<boolean>', f527_t: '<string>', f528_i: '<string>', f529_y: '<array>', f530_z: '<array>', f531_h: '<array>', f532_m: '<boolean>', f533_b: '<array>', f534_y: '<string>', f535_d: '<number>', f536_b: '<null>', f537_j: '<number>', f538_r: '<number>', f539_l: '<boolean>', f540_w: '<object>', f541_i: '<string>', f542_q: '<string>', f543_l: '<array>', f544_h: '<number>', f545_y: '<null>', f546_a: '<boolean>', f547_k: '<number>', f548_r: '<array>', f549_h: '<array>', f550_j: '<string>', f551_a: '<object>', f552_n: '<array>', f553_g: '<boolean>', f554_d: '<string>', f555_l: '<null>', f556_d: '<object>', f557_v: '<string>', f558_c: '<null>', f559_c: '<null>', f560_h: '<number>', f561_y: '<number>', f562_t: '<number>', f563_e: '<boolean>', f564_d: '<number>', f565_s: '<object>', f566_x: '<array>', f567_z: '<object>', f568_c: '<array>', f569_y: '<number>', f570_g: '<null>', f571_g: '<array>', f572_l: '<number>', f573_d: '<number>', f574_d: '<number>', f575_x: '<string>', f576_q: '<boolean>', f577_l: '<array>', f578_m: '<string>', f579_b: '<array>', f580_i: '<boolean>', f581_u: '<string>', f582_l: '<string>', f583_c: '<number>', f584_f: '<null>', f585_n: '<object>', f586_b: '<boolean>', f587_m: '<boolean>', f588_o: '<number>', f589_a: '<string>', f590_k: '<array>', f591_p: '<null>', f592_o: '<object>', f593_o: '<array>', f594_l: '<boolean>', f595_x: '<null>', f596_y: '<object>', f597_l: '<array>', f598_s: '<string>', f599_k: '<number>', f600_t: '<number>', f601_p: '<object>', f602_b: '<boolean>', f603_s: '<object>', f604_q: '<boolean>', f605_s: '<string>', f606_t: '<string>', f607_w: '<null>', f608_r: '<number>', f609_b: '<boolean>', f610_y: '<null>', f611_o: '<array>', f612_i: '<object>', f613_q: '<boolean>', f614_m: '<boolean>', f615_u: '<array>', f616_t: '<string>', f617_d: '<boolean>', f618_r: '<object>', f619_s: '<boolean>', f620_j: '<string>', f621_a: '<boolean>', f622_l: '<array>', f623_p: '<number>', f624_a: '<null>', f625_n: '<boolean>', f626_w: '<string>', f627_f: '<object>', f628_u: '<number>', f629_w: '<number>', f630_q: '<object>', f631_f: '<string>', f632_p: '<null>', f633_j: '<object>', f634_b: '<array>', f635_b: '<null>', f636_j: '<boolean>', f637_o: '<null>', f638_z: '<boolean>', f639_s: '<array>', f640_j: '<null>', f641_s: '<number>', f642_s: '<string>', f643_c: '<string>', f644_m: '<array>', f645_k: '<object>', f646_s: '<null>', f647_i: '<object>', f648_f: '<object>', f649_z: '<number>', f650_t: '<number>', f651_f: '<boolean>', f652_g: '<object>', f653_t: '<array>', f654_f: '<boolean>', f655_r: '<boolean>', f656_x: '<string>', f657_c: '<string>', f658_q: '<boolean>', f659_a: '<string>', f660_c: '<object>', f661_t: '<object>', f662_v: '<number>', f663_m: '<null>', f664_h: '<array>', f665_u: '<string>', f666_a: '<null>', f667_d: '<array>', f668_v: '<boolean>', f669_e: '<array>', f670_i: '<array>', f671_c: '<string>', f672_m: '<array>', f673_a: '<null>', f674_x: '<boolean>', f675_k: '<array>', f676_c: '<number>', f677_l: '<array>', f678_r: '<string>', f679_g: '<array>', f680_q: '<array>', f681_u: '<null>', f682_x: '<array>', f683_q: '<null>', f684_z: '<number>', f685_s: '<array>', f686_j: '<boolean>', f687_d: '<string>', f688_r: '<null>', f689_f: '<string>', f690_f: '<string>', f691_n: '<string>', f692_o: '<number>', f693_e: '<null>', f694_p: '<null>', f695_y: '<boolean>', f696_s: '<boolean>', f697_z: '<null>', f698_f: '<number>', f699_p: '<boolean>', f700_p: '<number>', f701_p: '<null>', f702_q: '<null>', f703_m: '<number>', f704_k: '<null>', f705_s: '<string>', f706_a: '<number>', f707_w: '<string>', f708_b: '<boolean>', f709_p: '<string>', f710_b: '<number>', f711_v: '<number>', f712_s: '<null>', f713_j: '<object>', f714_x: '<string>', f715_r: '<string>', f716_b: '<array>', f717_t: '<boolean>', f718_z: '<boolean>', f719_c: '<string>', f720_v: '<string>', f721_k: '<string>', f722_d: '<boolean>', f723_p: '<null>', f724_c: '<null>', f725_x: '<array>', f726_h: '<number>', f727_v: '<null>', f728_x: '<boolean>', f729_s: '<object>', f730_o: '<boolean>', f731_y: '<object>', f732_c: '<object>', f733_k: '<string>', f734_n: '<object>', f735_y: '<null>', f736_w: '<array>', f737_b: '<number>', f738_v: '<array>', f739_j: '<number>', f740_f: '<string>', f741_u: '<boolean>', f742_j: '<number>', f743_x: '<object>', f744_z: '<object>', f745_h: '<boolean>', f746_q: '<array>', f747_a: '<object>', f748_z: '<object>', f749_f: '<number>', f750_a: '<string>', f751_m: '<array>', f752_c: '<null>', f753_m: '<null>', f754_s: '<object>', f755_l: '<string>', f756_c: '<null>', f757_a: '<object>', f758_a: '<string>', f759_a: '<null>', f760_p: '<boolean>', f761_p: '<null>', f762_w: '<object>', f763_c: '<null>', f764_l: '<boolean>', f765_m: '<string>', f766_e: '<number>', f767_e: '<object>', f768_w: '<array>', f769_s: '<array>', f770_n: '<array>', f771_q: '<string>', f772_a: '<object>', f773_f: '<boolean>', f774_s: '<array>', f775_t: '<array>', f776_x: '<string>', f777_y: '<number>', f778_b: '<null>', f779_e: '<object>', f780_p: '<boolean>', f781_v: '<object>', f782_a: '<string>', f783_l: '<number>', f784_g: '<boolean>', f785_x: '<number>', f786_q: '<array>', f787_y: '<boolean>', f788_i: '<boolean>', f789_x: '<number>', f790_e: '<null>', f791_n: '<null>', f792_v: '<string>', f793_t: '<string>', f794_l: '<object>', f795_s: '<array>', f796_r: '<null>', f797_e: '<boolean>', f798_v: '<array>', f799_g: '<array>', f800_u: '<null>', f801_l: '<array>', f802_f: '<null>', f803_t: '<boolean>', f804_u: '<number>', f805_h: '<object>', f806_u: '<string>', f807_o: '<string>', f808_r: '<number>', f809_c: '<string>', f810_z: '<boolean>', f811_u: '<null>', f812_n: '<boolean>', f813_f: '<string>', f814_h: '<object>', f815_c: '<array>', f816_s: '<array>', f817_a: '<boolean>', f818_b: '<array>', f819_q: '<null>', f820_h: '<array>', f821_t: '<null>', f822_j: '<object>', f823_g: '<object>', f824_c: '<string>', f825_i: '<array>', f826_y: '<boolean>', f827_l: '<object>', f828_h: '<object>', f829_e: '<number>', f830_g: '<object>', f831_v: '<null>', f832_x: '<string>', f833_w: '<null>', f834_k: '<array>', f835_s: '<null>', f836_x: '<number>', f837_v: '<number>', f838_y: '<number>', f839_z: '<null>', f840_k: '<null>', f841_o: '<number>', f842_v: '<array>', f843_r: '<object>', f844_p: '<object>', f845_h: '<object>', f846_j: '<array>', f847_g: '<null>', f848_q: '<array>', f849_n: '<array>', f850_l: '<boolean>', f851_f: '<boolean>', f852_a: '<boolean>', f853_r: '<null>', f854_s: '<object>', f855_i: '<array>', f856_a: '<null>', f857_g: '<boolean>', f858_e: '<array>', f859_p: '<number>', f860_c: '<string>', f861_v: '<boolean>', f862_k: '<boolean>', f863_j: '<string>', f864_n: '<string>', f865_g: '<string>', f866_k: '<string>', f867_e: '<number>', f868_n: '<number>', f869_n: '<array>', f870_a: '<null>', f871_k: '<null>', f872_c: '<number>', f873_d: '<boolean>', f874_k: '<array>', f875_n: '<string>', f876_a: '<array>', f877_z: '<boolean>', f878_z: '<null>', f879_z: '<string>', f880_v: '<null>', f881_c: '<boolean>', f882_a: '<null>', f883_n: '<number>', f884_p: '<boolean>', f885_v: '<boolean>', f886_t: '<array>', f887_z: '<object>', f888_e: '<object>', f889_m: '<boolean>', f890_e: '<object>', f891_w: '<array>', f892_b: '<object>', f893_p: '<string>', f894_w: '<string>', f895_o: '<number>', f896_s: '<string>', f897_d: '<number>', f898_b: '<null>', f899_d: '<string>', f900_e: '<array>', f901_b: '<string>', f902_z: '<object>', f903_g: '<string>', f904_c: '<number>', f905_f: '<array>', f906_u: '<array>', f907_c: '<null>', f908_c: '<null>', f909_o: '<object>', f910_i: '<boolean>', f911_v: '<number>', f912_r: '<number>', f913_h: '<string>', f914_e: '<null>', f915_s: '<number>', f916_n: '<object>', f917_z: '<string>', f918_d: '<boolean>', f919_s: '<string>', f920_n: '<string>', f921_r: '<null>', f922_y: '<null>', f923_o: '<array>', f924_h: '<number>', f925_b: '<number>', f926_m: '<boolean>', f927_n: '<string>', f928_l: '<null>', f929_w: '<object>', f930_x: '<null>', f931_m: '<number>', f932_a: '<string>', f933_b: '<object>', f934_h: '<number>', f935_e: '<boolean>', f936_i: '<string>', f937_o: '<null>', f938_a: '<array>', f939_i: '<string>', f940_z: '<number>', f941_c: '<number>', f942_e: '<null>', f943_y: '<array>', f944_h: '<number>', f945_l: '<boolean>', f946_j: '<null>', f947_a: '<string>', f948_z: '<number>', f949_r: '<number>', f950_b: '<null>', f951_p: '<string>', f952_o: '<boolean>', f953_b: '<object>', f954_k: '<string>', f955_a: '<string>', f956_d: '<number>', f957_p: '<string>', f958_y: '<null>', f959_y: '<array>', f960_e: '<array>', f961_j: '<number>', f962_p: '<number>', f963_b: '<object>', f964_y: '<number>', f965_j: '<array>', f966_w: '<null>', f967_p: '<object>', f968_h: '<number>', f969_i: '<object>', f970_i: '<number>', f971_n: '<array>', f972_f: '<object>', f973_o: '<string>', f974_u: '<string>', f975_k: '<boolean>', f976_f: '<object>', f977_n: '<object>', f978_f: '<array>', f979_l: '<null>', f980_g: '<array>', f981_k: '<string>', f982_j: '<string>', f983_p: '<array>', f984_y: '<array>', f985_p: '<null>', f986_b: '<object>', f987_q: '<boolean>', f988_w: '<boolean>', f989_k: '<number>', f990_u: '<array>', f991_l: '<object>', f992_v: '<number>', f993_m: '<array>', f994_k: '<number>', f995_t: '<array>', f996_n: '<null>', f997_q: '<number>', f998_v: '<array>', f999_a: '<boolean>', f1000_f: '<null>', f1001_a: '<null>', f1002_u: '<string>', f1003_v: '<string>', f1004_m: '<null>', f1005_v: '<array>', f1006_z: '<string>', f1007_u: '<boolean>', f1008_u: '<null>', f1009_q: '<boolean>', f1010_j: '<boolean>', f1011_v: '<array>', f1012_p: '<object>', f1013_t: '<null>', f1014_b: '<object>', f1015_r: '<boolean>', f1016_x: '<array>', f1017_k: '<boolean>', f1018_j: '<boolean>', f1019_k: '<array>', f1020_b: '<string>', f1021_l: '<string>', f1022_w: '<null>', f1023_e: '<object>', f1024_p: '<number>', f1025_p: '<object>', f1026_w: '<null>', f1027_g: '<string>', f1028_m: '<null>', f1029_u: '<null>', f1030_t: '<object>', f1031_q: '<null>', f1032_h: '<string>', f1033_o: '<object>', f1034_x: '<number>', f1035_z: '<string>', f1036_e: '<number>', f1037_v: '<string>', f1038_x: '<array>', f1039_b: '<null>', f1040_n: '<number>', f1041_p: '<string>', f1042_p: '<array>', f1043_f: '<number>', f1044_v: '<string>', f1045_q: '<boolean>', f1046_l: '<object>', f1047_h: '<object>', f1048_s: '<array>', f1049_q: '<object>', f1050_q: '<number>', f1051_o: '<string>', f1052_a: '<number>', f1053_i: '<array>', f1054_z: '<null>', f1055_x: '<array>', f1056_d: '<array>', f1057_f: '<array>', f1058_y: '<object>', f1059_a: '<boolean>', f1060_x: '<null>', f1061_i: '<string>', f1062_i: '<null>', f1063_a: '<object>', f1064_f: '<string>', f1065_p: '<number>', f1066_w: '<boolean>', f1067_j: '<null>', f1068_k: '<null>', f1069_u: '<object>', f1070_w: '<object>', f1071_m: '<array>', f1072_d: '<boolean>', f1073_e: '<string>', f1074_w: '<boolean>', f1075_t: '<boolean>', f1076_q: '<number>', f1077_i: '<object>', f1078_g: '<string>', f1079_z: '<array>', f1080_h: '<array>', f1081_c: '<null>', f1082_i: '<number>', f1083_c: '<array>', f1084_q: '<number>', f1085_a: '<null>', f1086_t: '<object>', f1087_p: '<array>', f1088_p: '<number>', f1089_z: '<number>', f1090_l: '<object>', f1091_l: '<number>', f1092_x: '<array>', f1093_s: '<array>', f1094_n: '<null>', f1095_j: '<object>', f1096_q: '<null>', f1097_c: '<array>', f1098_p: '<object>', f1099_u: '<boolean>', f1100_n: '<object>', f1101_r: '<boolean>', f1102_c: '<string>', f1103_c: '<number>', f1104_s: '<object>', f1105_o: '<array>', f1106_k: '<number>', f1107_x: '<null>', f1108_g: '<array>', f1109_b: '<number>', f1110_q: '<null>', f1111_v: '<null>', f1112_q: '<string>', f1113_y: '<number>', f1114_o: '<object>', f1115_u: '<string>', f1116_q: '<object>', f1117_a: '<boolean>', f1118_o: '<object>', f1119_z: '<object>', f1120_r: '<boolean>', f1121_c: '<null>', f1122_e: '<null>', f1123_x: '<string>', f1124_v: '<object>', f1125_c: '<array>', f1126_z: '<array>', f1127_t: '<boolean>', f1128_f: '<boolean>', f1129_l: '<object>', f1130_r: '<null>', f1131_t: '<number>', f1132_t: '<null>', f1133_a: '<number>', f1134_l: '<string>', f1135_f: '<array>', f1136_r: '<string>', f1137_b: '<string>', f1138_d: '<boolean>', f1139_c: '<null>', f1140_p: '<number>', f1141_b: '<string>', f1142_q: '<object>', f1143_c: '<boolean>', f1144_i: '<array>', f1145_m: '<null>', f1146_q: '<boolean>', f1147_t: '<array>', f1148_p: '<null>', f1149_o: '<array>', f1150_h: '<boolean>', f1151_h: '<boolean>', f1152_s: '<object>', f1153_r: '<string>', f1154_w: '<array>', f1155_f: '<array>', f1156_j: '<number>', f1157_t: '<array>', f1158_l: '<object>', f1159_c: '<null>', f1160_o: '<boolean>', f1161_s: '<object>', f1162_a: '<null>', f1163_d: '<number>', f1164_s: '<object>', f1165_x: '<object>', f1166_u: '<array>', f1167_n: '<array>', f1168_j: '<boolean>', f1169_f: '<boolean>', f1170_k: '<number>', f1171_r: '<array>', f1172_z: '<boolean>', f1173_w: '<number>', f1174_o: '<array>', f1175_n: '<number>', f1176_x: '<number>', f1177_h: '<null>', f1178_r: '<number>', f1179_a: '<string>', f1180_n: '<boolean>', f1181_s: '<string>', f1182_g: '<number>', f1183_y: '<array>', f1184_u: '<string>', f1185_n: '<array>', f1186_p: '<string>', f1187_f: '<null>', f1188_m: '<string>', f1189_d: '<object>', f1190_f: '<array>', f1191_k: '<array>', f1192_e: '<object>', f1193_l: '<null>', f1194_s: '<object>', f1195_k: '<boolean>', f1196_f: '<object>', f1197_m: '<number>', f1198_b: '<string>', f1199_i: '<string>', f1200_i: '<array>', f1201_d: '<boolean>', f1202_r: '<null>', f1203_v: '<number>', f1204_p: '<number>', f1205_q: '<string>', f1206_k: '<array>', f1207_j: '<string>', f1208_m: '<boolean>', f1209_t: '<string>', f1210_b: '<number>', f1211_v: '<string>', f1212_y: '<null>', f1213_y: '<array>', f1214_q: '<string>', f1215_h: '<string>', f1216_c: '<boolean>', f1217_w: '<array>', f1218_y: '<boolean>', f1219_b: '<boolean>', f1220_d: '<string>', f1221_i: '<null>', f1222_l: '<null>', f1223_f: '<string>', f1224_o: '<object>', f1225_s: '<null>', f1226_a: '<object>', f1227_e: '<number>', f1228_o: '<number>', f1229_q: '<string>', f1230_y: '<object>', f1231_e: '<string>', f1232_q: '<number>', f1233_s: '<array>', f1234_u: '<boolean>', f1235_m: '<number>', f1236_u: '<boolean>', f1237_i: '<null>', f1238_n: '<number>', f1239_b: '<array>', f1240_h: '<null>', f1241_k: '<null>', f1242_h: '<boolean>', f1243_g: '<string>', f1244_l: '<string>', f1245_k: '<null>', f1246_e: '<string>', f1247_f: '<array>', f1248_s: '<boolean>', f1249_k: '<boolean>', f1250_w: '<object>', f1251_d: '<boolean>', f1252_e: '<object>', f1253_t: '<number>', f1254_z: '<object>', f1255_n: '<null>', f1256_h: '<null>', f1257_c: '<boolean>', f1258_s: '<null>', f1259_w: '<string>', f1260_t: '<object>', f1261_o: '<number>', f1262_o: '<boolean>', f1263_q: '<number>', f1264_j: '<object>', f1265_r: '<array>', f1266_t: '<number>', f1267_q: '<null>', f1268_j: '<number>', f1269_g: '<string>', f1270_z: '<null>', f1271_j: '<null>', f1272_t: '<null>', f1273_z: '<object>', f1274_s: '<null>', f1275_i: '<number>', f1276_f: '<string>', f1277_s: '<null>', f1278_i: '<array>', f1279_d: '<string>', f1280_b: '<string>', f1281_q: '<object>', f1282_n: '<string>', f1283_o: '<array>', f1284_t: '<array>', f1285_x: '<null>', f1286_v: '<null>', f1287_c: '<number>', f1288_v: '<string>', f1289_j: '<string>', f1290_s: '<null>', f1291_j: '<string>', f1292_a: '<number>', f1293_i: '<boolean>', f1294_a: '<number>', f1295_v: '<object>', f1296_l: '<array>', f1297_p: '<null>', f1298_h: '<number>', f1299_e: '<array>', f1300_z: '<boolean>', f1301_a: '<object>', f1302_w: '<array>', f1303_t: '<boolean>', f1304_w: '<null>', f1305_e: '<null>', f1306_a: '<object>', f1307_o: '<boolean>', f1308_v: '<null>', f1309_f: '<string>', f1310_v: '<number>', f1311_t: '<null>', f1312_w: '<string>', f1313_e: '<boolean>', f1314_j: '<boolean>', f1315_o: '<null>', f1316_m: '<boolean>', f1317_n: '<string>', f1318_h: '<boolean>', f1319_x: '<number>', f1320_l: '<array>', f1321_c: '<boolean>', f1322_k: '<number>', f1323_w: '<array>', f1324_h: '<array>', f1325_m: '<null>', f1326_e: '<array>', f1327_x: '<array>', f1328_y: '<null>', f1329_u: '<boolean>', f1330_e: '<null>', f1331_p: '<boolean>', f1332_h: '<boolean>', f1333_e: '<boolean>', f1334_i: '<array>', f1335_p: '<array>', f1336_n: '<number>', f1337_a: '<object>', f1338_e: '<boolean>', f1339_s: '<number>', f1340_n: '<array>', f1341_x: '<number>', f1342_d: '<boolean>', f1343_p: '<number>', f1344_s: '<boolean>', f1345_m: '<number>', f1346_t: '<object>', f1347_s: '<boolean>', f1348_e: '<object>', f1349_g: '<null>', f1350_n: '<string>', f1351_w: '<null>', f1352_p: '<object>', f1353_z: '<object>', f1354_m: '<array>', f1355_d: '<number>', f1356_w: '<boolean>', f1357_t: '<array>', f1358_m: '<boolean>', f1359_w: '<number>', f1360_l: '<array>', f1361_l: '<number>', f1362_b: '<boolean>', f1363_k: '<number>', f1364_y: '<object>', f1365_g: '<string>', f1366_g: '<object>', f1367_o: '<string>', f1368_a: '<null>', f1369_l: '<object>', f1370_p: '<object>', f1371_u: '<object>', f1372_i: '<null>', f1373_u: '<object>', f1374_c: '<number>', f1375_n: '<null>', f1376_q: '<string>', f1377_f: '<number>', f1378_w: '<object>', f1379_h: '<number>', f1380_w: '<boolean>', f1381_t: '<number>', f1382_e: '<object>', f1383_h: '<null>', f1384_y: '<boolean>', f1385_e: '<boolean>', f1386_o: '<null>', f1387_y: '<null>', f1388_z: '<object>', f1389_r: '<number>', f1390_y: '<object>', f1391_r: '<string>', f1392_w: '<string>', f1393_h: '<object>', f1394_q: '<string>', f1395_d: '<array>', f1396_n: '<array>', f1397_w: '<object>', f1398_b: '<boolean>', f1399_o: '<string>', f1400_g: '<null>', f1401_e: '<null>', f1402_a: '<object>', f1403_v: '<object>', f1404_v: '<boolean>', f1405_e: '<string>', f1406_m: '<null>', f1407_r: '<null>', f1408_w: '<number>', f1409_n: '<array>', f1410_b: '<string>', f1411_q: '<number>', f1412_i: '<number>', f1413_s: '<string>', f1414_m: '<boolean>', f1415_a: '<array>', f1416_d: '<boolean>', f1417_a: '<boolean>', f1418_r: '<object>', f1419_z: '<array>', f1420_m: '<number>', f1421_l: '<boolean>', f1422_p: '<string>', f1423_t: '<array>', f1424_h: '<number>', f1425_d: '<number>', f1426_l: '<null>', f1427_h: '<null>', f1428_q: '<object>', f1429_b: '<null>', f1430_t: '<string>', f1431_g: '<null>', f1432_o: '<null>', f1433_d: '<string>', f1434_u: '<object>'}, 'KjXBoumFquCgffRqbQaevvTONFwueAvtjn');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var count_0 = objectStore_0.count();
    var add_1 = objectStore_0.add({f0_l: '<boolean>'}, 'BqeBXmvIHWAwPcOXzrsSegeUSuJhjffciJgzSrAVwneqcUnzoRSFMkRHdBoreDPXLuTeTbMliWCGrptNdasAfTxAkgjAwCyevesbZTcUckfyVsotqWBLEzJqtUWIlkcsOkWEDNLTfJdSFGClyLYbSYyZSZTQymvkNRLWPkyBqieAEREHiQOhcaZImVgxxaPpOkxBjttmaTRiFGrYhwVCClspswPilxpVVgyuBkvnOllFXWTPpHJpmAFwtBfeLudstWDmsmvpHYW');
    var clear_0 = objectStore_0.clear();
    var add_2 = objectStore_0.add({f0_e: '<string>', f1_z: '<string>', f2_m: '<string>', f3_e: '<boolean>', f4_l: '<null>', f5_y: '<array>', f6_v: '<number>', f7_z: '<string>', f8_a: '<boolean>', f9_j: '<array>', f10_e: '<null>', f11_c: '<string>', f12_b: '<object>', f13_t: '<number>', f14_v: '<boolean>', f15_r: '<boolean>', f16_h: '<object>', f17_f: '<null>', f18_a: '<object>', f19_k: '<null>', f20_e: '<object>', f21_u: '<object>', f22_u: '<string>', f23_r: '<number>', f24_i: '<boolean>', f25_e: '<number>', f26_v: '<object>', f27_d: '<string>', f28_a: '<string>', f29_e: '<array>', f30_d: '<null>', f31_e: '<number>', f32_g: '<null>', f33_s: '<null>', f34_e: '<object>', f35_u: '<array>', f36_v: '<null>', f37_n: '<object>', f38_q: '<null>', f39_j: '<null>', f40_k: '<string>', f41_y: '<array>', f42_z: '<null>', f43_v: '<null>', f44_a: '<object>', f45_s: '<object>', f46_a: '<object>', f47_e: '<boolean>', f48_v: '<number>', f49_y: '<null>', f50_g: '<string>', f51_l: '<null>', f52_z: '<string>', f53_f: '<array>', f54_d: '<null>', f55_h: '<string>', f56_e: '<null>', f57_d: '<array>', f58_e: '<object>', f59_s: '<object>', f60_o: '<null>', f61_d: '<boolean>', f62_v: '<boolean>', f63_g: '<null>', f64_d: '<number>', f65_s: '<boolean>', f66_u: '<number>', f67_e: '<null>', f68_v: '<string>', f69_k: '<boolean>'}, 'PqqXMYpXICKnYRJwfRQlhneKDmhMCVVpPUQyiAJPrUfJxjLVYtseipgecrXOrPrEVnZIGGWWxtiGqLGzKhtQrxOICujmwRBekkiIjeAFByeuI');
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('KjXBoumFquCgffRqbQaevvTONFwueAvtjn', 'BqeBXmvIHWAwPcOXzrsSegeUSuJhjffciJgzSrAVwneqcUnzoRSFMkRHdBoreDPXLuTeTbMliWCGrptNdasAfTxAkgjAwCyevesbZTcUckfyVsotqWBLEzJqtUWIlkcsOkWEDNLTfJdSFGClyLYbSYyZSZTQymvkNRLWPkyBqieAEREHiQOhcaZImVgxxaPpOkxBjttmaTRiFGrYhwVCClspswPilxpVVgyuBkvnOllFXWTPpHJpmAFwtBfeLudstWDmsmvpHYW', true, false);
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var add_3 = objectStore_0.add({f0_g: '<array>', f1_r: '<boolean>', f2_y: '<string>', f3_i: '<object>', f4_v: '<string>'}, 'AfmyfMUaAHDaVkaCLlHtEonyKNgETseFDwUnxMbgqogUregDveFUEcfXmyOqxBjCtRyVArflsHJriuYeavnQluyapkrPFRuDoITWtzrVTCcrOkqlwsLKNlYpFQqvaXXYyUnWsvyIpNxVVzpIacXOjNuDgHgGsrjYGWMiSjzltIwahyAeEJEswgLLEsGwaZhFEwxyuzutKjyKrrzPNEdoLItWjnQoIDwjRtOoQkHKjgEfEVOuruKHvVlFdXxqbzgUfAyJVHkKQCdxRCwfVqiADblHMVsTAhWxHBOQfqtCPsWKVGOerJvpTTxhNrgwNIdemtXUj');
    var clear_1 = objectStore_0.clear();
    var index_1994 = objectStore_0.createIndex('index_1994', 'test', {multiEntry: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_4420 = db.transaction(['objectStore_2962'], 'readonly', {durability:"strict"})
    var objectStore_2962 = txn_4420.objectStore('objectStore_2962');
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.only('PqqXMYpXICKnYRJwfRQlhneKDmhMCVVpPUQyiAJPrUfJxjLVYtseipgecrXOrPrEVnZIGGWWxtiGqLGzKhtQrxOICujmwRBekkiIjeAFByeuI');
        get_2 = objectStore_2962.get(KeyRange_4);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_6 = IDBKeyRange.bound('BqeBXmvIHWAwPcOXzrsSegeUSuJhjffciJgzSrAVwneqcUnzoRSFMkRHdBoreDPXLuTeTbMliWCGrptNdasAfTxAkgjAwCyevesbZTcUckfyVsotqWBLEzJqtUWIlkcsOkWEDNLTfJdSFGClyLYbSYyZSZTQymvkNRLWPkyBqieAEREHiQOhcaZImVgxxaPpOkxBjttmaTRiFGrYhwVCClspswPilxpVVgyuBkvnOllFXWTPpHJpmAFwtBfeLudstWDmsmvpHYW', 'AfmyfMUaAHDaVkaCLlHtEonyKNgETseFDwUnxMbgqogUregDveFUEcfXmyOqxBjCtRyVArflsHJriuYeavnQluyapkrPFRuDoITWtzrVTCcrOkqlwsLKNlYpFQqvaXXYyUnWsvyIpNxVVzpIacXOjNuDgHgGsrjYGWMiSjzltIwahyAeEJEswgLLEsGwaZhFEwxyuzutKjyKrrzPNEdoLItWjnQoIDwjRtOoQkHKjgEfEVOuruKHvVlFdXxqbzgUfAyJVHkKQCdxRCwfVqiADblHMVsTAhWxHBOQfqtCPsWKVGOerJvpTTxhNrgwNIdemtXUj', false, true);
        get_3 = objectStore_2962.get(KeyRange_6);
    }
    catch (e){
    }

    var getAll_0 = objectStore_2962.getAll();
    var count_1 = objectStore_2962.count();
    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('BqeBXmvIHWAwPcOXzrsSegeUSuJhjffciJgzSrAVwneqcUnzoRSFMkRHdBoreDPXLuTeTbMliWCGrptNdasAfTxAkgjAwCyevesbZTcUckfyVsotqWBLEzJqtUWIlkcsOkWEDNLTfJdSFGClyLYbSYyZSZTQymvkNRLWPkyBqieAEREHiQOhcaZImVgxxaPpOkxBjttmaTRiFGrYhwVCClspswPilxpVVgyuBkvnOllFXWTPpHJpmAFwtBfeLudstWDmsmvpHYW', 'HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', false, true);
        count_2 = objectStore_2962.count(KeyRange_8);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_10 = IDBKeyRange.bound('PqqXMYpXICKnYRJwfRQlhneKDmhMCVVpPUQyiAJPrUfJxjLVYtseipgecrXOrPrEVnZIGGWWxtiGqLGzKhtQrxOICujmwRBekkiIjeAFByeuI', 'HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', false, true);
        get_4 = objectStore_2962.get(KeyRange_10);
    }
    catch (e){
    }

    var index_0 = objectStore_2962.index('index_1994');
    var get_5;
    try{
        KeyRange_12 = IDBKeyRange.bound('KjXBoumFquCgffRqbQaevvTONFwueAvtjn', 'HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', true, false);
        get_5 = objectStore_2962.get(KeyRange_12);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('PqqXMYpXICKnYRJwfRQlhneKDmhMCVVpPUQyiAJPrUfJxjLVYtseipgecrXOrPrEVnZIGGWWxtiGqLGzKhtQrxOICujmwRBekkiIjeAFByeuI', false);
        get_6 = objectStore_2962.get(KeyRange_14);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('KjXBoumFquCgffRqbQaevvTONFwueAvtjn', false);
        count_3 = objectStore_2962.count(KeyRange_16);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_18 = IDBKeyRange.bound('KjXBoumFquCgffRqbQaevvTONFwueAvtjn', 'BqeBXmvIHWAwPcOXzrsSegeUSuJhjffciJgzSrAVwneqcUnzoRSFMkRHdBoreDPXLuTeTbMliWCGrptNdasAfTxAkgjAwCyevesbZTcUckfyVsotqWBLEzJqtUWIlkcsOkWEDNLTfJdSFGClyLYbSYyZSZTQymvkNRLWPkyBqieAEREHiQOhcaZImVgxxaPpOkxBjttmaTRiFGrYhwVCClspswPilxpVVgyuBkvnOllFXWTPpHJpmAFwtBfeLudstWDmsmvpHYW', false, false);
        get_7 = objectStore_2962.get(KeyRange_18);
    }
    catch (e){
    }

    txn_4420.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4420.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4420.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4421 = db.transaction(['objectStore_2962'], 'readwrite', {durability:"strict"})
    var objectStore_2962 = txn_4421.objectStore('objectStore_2962');
    var clear_2 = objectStore_2962.clear();
    var count_4;
    try{
        KeyRange_20 = IDBKeyRange.only('KjXBoumFquCgffRqbQaevvTONFwueAvtjn');
        count_4 = objectStore_2962.count(KeyRange_20);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_22 = IDBKeyRange.only('KjXBoumFquCgffRqbQaevvTONFwueAvtjn');
        get_8 = objectStore_2962.get(KeyRange_22);
    }
    catch (e){
    }

    var put_1 = objectStore_2962.put({f0_r: '<object>', f1_q: '<boolean>', f2_t: '<number>', f3_k: '<boolean>', f4_d: '<string>', f5_l: '<object>', f6_n: '<string>'}, 'PmlabkiBMtuqwblPIUGxjZnTPaNgBcihPqWNVFDcglHJrSUUEcFNExBRrgKSRcuagZPRXoGNUnKIcYkHRfZDpYUEwBnmpjyNOFvALwBpwikMcBcFrhkJXHHABvVtagMPIbyTSBEtFALgVJIJscn');
    var get_9;
    try{
        KeyRange_24 = IDBKeyRange.bound('AfmyfMUaAHDaVkaCLlHtEonyKNgETseFDwUnxMbgqogUregDveFUEcfXmyOqxBjCtRyVArflsHJriuYeavnQluyapkrPFRuDoITWtzrVTCcrOkqlwsLKNlYpFQqvaXXYyUnWsvyIpNxVVzpIacXOjNuDgHgGsrjYGWMiSjzltIwahyAeEJEswgLLEsGwaZhFEwxyuzutKjyKrrzPNEdoLItWjnQoIDwjRtOoQkHKjgEfEVOuruKHvVlFdXxqbzgUfAyJVHkKQCdxRCwfVqiADblHMVsTAhWxHBOQfqtCPsWKVGOerJvpTTxhNrgwNIdemtXUj', 'BqeBXmvIHWAwPcOXzrsSegeUSuJhjffciJgzSrAVwneqcUnzoRSFMkRHdBoreDPXLuTeTbMliWCGrptNdasAfTxAkgjAwCyevesbZTcUckfyVsotqWBLEzJqtUWIlkcsOkWEDNLTfJdSFGClyLYbSYyZSZTQymvkNRLWPkyBqieAEREHiQOhcaZImVgxxaPpOkxBjttmaTRiFGrYhwVCClspswPilxpVVgyuBkvnOllFXWTPpHJpmAFwtBfeLudstWDmsmvpHYW', false, false);
        get_9 = objectStore_2962.get(KeyRange_24);
    }
    catch (e){
    }

    var getAll_1 = objectStore_2962.getAll();
    var getAllKeys_0;
    try{
        KeyRange_26 = IDBKeyRange.bound('PqqXMYpXICKnYRJwfRQlhneKDmhMCVVpPUQyiAJPrUfJxjLVYtseipgecrXOrPrEVnZIGGWWxtiGqLGzKhtQrxOICujmwRBekkiIjeAFByeuI', 'PqqXMYpXICKnYRJwfRQlhneKDmhMCVVpPUQyiAJPrUfJxjLVYtseipgecrXOrPrEVnZIGGWWxtiGqLGzKhtQrxOICujmwRBekkiIjeAFByeuI', false, true);
        getAllKeys_0 = objectStore_2962.getAllKeys(KeyRange_26, 740180257);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv');
        getAllKeys_0 = objectStore_2962.getAllKeys(KeyRange_27);
    }

    var clear_3 = objectStore_2962.clear();
    var get_10;
    try{
        KeyRange_28 = IDBKeyRange.bound('KjXBoumFquCgffRqbQaevvTONFwueAvtjn', 'KjXBoumFquCgffRqbQaevvTONFwueAvtjn', false, false);
        get_10 = objectStore_2962.get(KeyRange_28);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_30 = IDBKeyRange.bound('HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', 'PqqXMYpXICKnYRJwfRQlhneKDmhMCVVpPUQyiAJPrUfJxjLVYtseipgecrXOrPrEVnZIGGWWxtiGqLGzKhtQrxOICujmwRBekkiIjeAFByeuI', false, false);
        get_11 = objectStore_2962.get(KeyRange_30);
    }
    catch (e){
    }

    txn_4421.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4421.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4421.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4422 = db.transaction(['objectStore_2962'], 'readwrite', {durability:"relaxed"})
    var objectStore_2962 = txn_4422.objectStore('objectStore_2962');
    var count_5 = objectStore_2962.count();
    var get_12;
    try{
        KeyRange_32 = IDBKeyRange.only('PmlabkiBMtuqwblPIUGxjZnTPaNgBcihPqWNVFDcglHJrSUUEcFNExBRrgKSRcuagZPRXoGNUnKIcYkHRfZDpYUEwBnmpjyNOFvALwBpwikMcBcFrhkJXHHABvVtagMPIbyTSBEtFALgVJIJscn');
        get_12 = objectStore_2962.get(KeyRange_32);
    }
    catch (e){
    }

    var count_6 = objectStore_2962.count();
    var add_4 = objectStore_2962.add({f0_o: '<object>', f1_j: '<boolean>', f2_f: '<boolean>', f3_x: '<boolean>', f4_i: '<string>', f5_p: '<object>', f6_l: '<boolean>', f7_d: '<string>', f8_v: '<null>'}, 'jePGpjNwMLnmVALEArlcqUSlVrLyopLvOMrrAFdCoTBEjisMkJNvGnhKyOupHasyTYbQBBZqzdYSWuDGgkmAyihYuLqqriTPXuuWPHIwrtAuNJOstMIRFjExScDlcyiUwUxthwQFULSeCCPWRzPlergmEaCshTvOIlyJQWywjdazKJrONeBbEznKfzIQcfmiXELAceuwVjhKsLXoYIACSfGPZcXqbVGDxSoNPWxzEsHTxzuuZuSVqFYtboTLhdwIaULCXJaixmshVTAAeOIsjDKZESieayNsKAEbVSYuvUuwkrFbECOdsGBbipBjQScEJrRmqgkVoEdXUSmvubpHvOhyGHkiwdBKNAOvvGQBrExIMaDUnsRXxZeT');
    var get_13;
    try{
        KeyRange_34 = IDBKeyRange.only('PmlabkiBMtuqwblPIUGxjZnTPaNgBcihPqWNVFDcglHJrSUUEcFNExBRrgKSRcuagZPRXoGNUnKIcYkHRfZDpYUEwBnmpjyNOFvALwBpwikMcBcFrhkJXHHABvVtagMPIbyTSBEtFALgVJIJscn');
        get_13 = objectStore_2962.get(KeyRange_34);
    }
    catch (e){
    }

    var count_7 = objectStore_2962.count();
    var add_5 = objectStore_2962.add({f0_i: '<boolean>', f1_v: '<array>', f2_a: '<array>', f3_e: '<boolean>', f4_y: '<boolean>'}, 'niiPDDXKcRmvKKivGMuacQeYrYWYwwGpHAtAjjTZHkqCrZytQwSRHiwuagowvikXXxHPelPjPXVWAqYZeWoGKndYoKUuJckBYBmaTGhKwhNrstXWuEWFXMzHrDDoRysQlVIzsEAQqvZbiptgRpEtZGsIzDnRecPKSvcqQPKpYleIUCeGQUYvpcezIXtwdbwsBfHJCCOGeFijkPQdxLfWnFSkEghvWdnZBJoZccLZSuoCWNZBpaNebEzsUlaqnPISiOtyBJPJGeoWogFjCBJnRCDwOCvywcAmcNIhRNOMCpZeLUqSAupKEUKRBfjBtOjiIWWpllCIRwPfGfLedAbWnqSQnGalcAdbGHcTsYgGNcsWcWWwRtXFuzKnOqRdYvALZmCNwGxPEyvlmVNgebvkibVDHsZqSLZzqTVygadtoXUjcBwqbhqohPLJVhCoyuPleUmttBdgCACSsRtdHkMIjzcsYLgbdrsuupSLAuEniAUonNdIdwImnruGleIIQUFZBDGIxWRjUuexuSPXPlGuJjqqjoHVvUaXFWqCsprhfceDIxgJXFHWmkcCIFqzcrGxARDEdZuDiMxlXqUzJHMXyneOtGjdKCWGgrKalGClDfQxAZoRhoVNLudSYpeCCGXJNRmsWMfYCH');
    var getAll_2;
    try{
        KeyRange_36 = IDBKeyRange.bound('KjXBoumFquCgffRqbQaevvTONFwueAvtjn', 'PqqXMYpXICKnYRJwfRQlhneKDmhMCVVpPUQyiAJPrUfJxjLVYtseipgecrXOrPrEVnZIGGWWxtiGqLGzKhtQrxOICujmwRBekkiIjeAFByeuI', true, true);
        getAll_2 = objectStore_2962.getAll(KeyRange_36, 169788977);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('KjXBoumFquCgffRqbQaevvTONFwueAvtjn');
        getAll_2 = objectStore_2962.getAll(KeyRange_37);
    }

    var clear_4 = objectStore_2962.clear();
    var count_8;
    try{
        KeyRange_38 = IDBKeyRange.bound('HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', 'HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', false, false);
        count_8 = objectStore_2962.count(KeyRange_38);
    }
    catch (e){
    }

    txn_4422.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4422.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4422.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4423 = db.transaction(['objectStore_2962'], 'readonly', {durability:"strict"})
    var objectStore_2962 = txn_4423.objectStore('objectStore_2962');
    var count_9 = objectStore_2962.count();
    var count_10;
    try{
        KeyRange_40 = IDBKeyRange.bound('HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', 'BqeBXmvIHWAwPcOXzrsSegeUSuJhjffciJgzSrAVwneqcUnzoRSFMkRHdBoreDPXLuTeTbMliWCGrptNdasAfTxAkgjAwCyevesbZTcUckfyVsotqWBLEzJqtUWIlkcsOkWEDNLTfJdSFGClyLYbSYyZSZTQymvkNRLWPkyBqieAEREHiQOhcaZImVgxxaPpOkxBjttmaTRiFGrYhwVCClspswPilxpVVgyuBkvnOllFXWTPpHJpmAFwtBfeLudstWDmsmvpHYW', false, false);
        count_10 = objectStore_2962.count(KeyRange_40);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_42 = IDBKeyRange.bound('BqeBXmvIHWAwPcOXzrsSegeUSuJhjffciJgzSrAVwneqcUnzoRSFMkRHdBoreDPXLuTeTbMliWCGrptNdasAfTxAkgjAwCyevesbZTcUckfyVsotqWBLEzJqtUWIlkcsOkWEDNLTfJdSFGClyLYbSYyZSZTQymvkNRLWPkyBqieAEREHiQOhcaZImVgxxaPpOkxBjttmaTRiFGrYhwVCClspswPilxpVVgyuBkvnOllFXWTPpHJpmAFwtBfeLudstWDmsmvpHYW', 'PmlabkiBMtuqwblPIUGxjZnTPaNgBcihPqWNVFDcglHJrSUUEcFNExBRrgKSRcuagZPRXoGNUnKIcYkHRfZDpYUEwBnmpjyNOFvALwBpwikMcBcFrhkJXHHABvVtagMPIbyTSBEtFALgVJIJscn', false, true);
        get_14 = objectStore_2962.get(KeyRange_42);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_44 = IDBKeyRange.bound('AfmyfMUaAHDaVkaCLlHtEonyKNgETseFDwUnxMbgqogUregDveFUEcfXmyOqxBjCtRyVArflsHJriuYeavnQluyapkrPFRuDoITWtzrVTCcrOkqlwsLKNlYpFQqvaXXYyUnWsvyIpNxVVzpIacXOjNuDgHgGsrjYGWMiSjzltIwahyAeEJEswgLLEsGwaZhFEwxyuzutKjyKrrzPNEdoLItWjnQoIDwjRtOoQkHKjgEfEVOuruKHvVlFdXxqbzgUfAyJVHkKQCdxRCwfVqiADblHMVsTAhWxHBOQfqtCPsWKVGOerJvpTTxhNrgwNIdemtXUj', 'jePGpjNwMLnmVALEArlcqUSlVrLyopLvOMrrAFdCoTBEjisMkJNvGnhKyOupHasyTYbQBBZqzdYSWuDGgkmAyihYuLqqriTPXuuWPHIwrtAuNJOstMIRFjExScDlcyiUwUxthwQFULSeCCPWRzPlergmEaCshTvOIlyJQWywjdazKJrONeBbEznKfzIQcfmiXELAceuwVjhKsLXoYIACSfGPZcXqbVGDxSoNPWxzEsHTxzuuZuSVqFYtboTLhdwIaULCXJaixmshVTAAeOIsjDKZESieayNsKAEbVSYuvUuwkrFbECOdsGBbipBjQScEJrRmqgkVoEdXUSmvubpHvOhyGHkiwdBKNAOvvGQBrExIMaDUnsRXxZeT', false, true);
        get_15 = objectStore_2962.get(KeyRange_44);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('jePGpjNwMLnmVALEArlcqUSlVrLyopLvOMrrAFdCoTBEjisMkJNvGnhKyOupHasyTYbQBBZqzdYSWuDGgkmAyihYuLqqriTPXuuWPHIwrtAuNJOstMIRFjExScDlcyiUwUxthwQFULSeCCPWRzPlergmEaCshTvOIlyJQWywjdazKJrONeBbEznKfzIQcfmiXELAceuwVjhKsLXoYIACSfGPZcXqbVGDxSoNPWxzEsHTxzuuZuSVqFYtboTLhdwIaULCXJaixmshVTAAeOIsjDKZESieayNsKAEbVSYuvUuwkrFbECOdsGBbipBjQScEJrRmqgkVoEdXUSmvubpHvOhyGHkiwdBKNAOvvGQBrExIMaDUnsRXxZeT', false);
        get_16 = objectStore_2962.get(KeyRange_46);
    }
    catch (e){
    }

    var get_17;
    try{
        KeyRange_48 = IDBKeyRange.bound('KjXBoumFquCgffRqbQaevvTONFwueAvtjn', 'niiPDDXKcRmvKKivGMuacQeYrYWYwwGpHAtAjjTZHkqCrZytQwSRHiwuagowvikXXxHPelPjPXVWAqYZeWoGKndYoKUuJckBYBmaTGhKwhNrstXWuEWFXMzHrDDoRysQlVIzsEAQqvZbiptgRpEtZGsIzDnRecPKSvcqQPKpYleIUCeGQUYvpcezIXtwdbwsBfHJCCOGeFijkPQdxLfWnFSkEghvWdnZBJoZccLZSuoCWNZBpaNebEzsUlaqnPISiOtyBJPJGeoWogFjCBJnRCDwOCvywcAmcNIhRNOMCpZeLUqSAupKEUKRBfjBtOjiIWWpllCIRwPfGfLedAbWnqSQnGalcAdbGHcTsYgGNcsWcWWwRtXFuzKnOqRdYvALZmCNwGxPEyvlmVNgebvkibVDHsZqSLZzqTVygadtoXUjcBwqbhqohPLJVhCoyuPleUmttBdgCACSsRtdHkMIjzcsYLgbdrsuupSLAuEniAUonNdIdwImnruGleIIQUFZBDGIxWRjUuexuSPXPlGuJjqqjoHVvUaXFWqCsprhfceDIxgJXFHWmkcCIFqzcrGxARDEdZuDiMxlXqUzJHMXyneOtGjdKCWGgrKalGClDfQxAZoRhoVNLudSYpeCCGXJNRmsWMfYCH', true, true);
        get_17 = objectStore_2962.get(KeyRange_48);
    }
    catch (e){
    }

    var index_1 = objectStore_2962.index('index_1993');
    var count_11 = objectStore_2962.count();
    var get_18;
    try{
        KeyRange_50 = IDBKeyRange.bound('KjXBoumFquCgffRqbQaevvTONFwueAvtjn', 'jePGpjNwMLnmVALEArlcqUSlVrLyopLvOMrrAFdCoTBEjisMkJNvGnhKyOupHasyTYbQBBZqzdYSWuDGgkmAyihYuLqqriTPXuuWPHIwrtAuNJOstMIRFjExScDlcyiUwUxthwQFULSeCCPWRzPlergmEaCshTvOIlyJQWywjdazKJrONeBbEznKfzIQcfmiXELAceuwVjhKsLXoYIACSfGPZcXqbVGDxSoNPWxzEsHTxzuuZuSVqFYtboTLhdwIaULCXJaixmshVTAAeOIsjDKZESieayNsKAEbVSYuvUuwkrFbECOdsGBbipBjQScEJrRmqgkVoEdXUSmvubpHvOhyGHkiwdBKNAOvvGQBrExIMaDUnsRXxZeT', false, true);
        get_18 = objectStore_2962.get(KeyRange_50);
    }
    catch (e){
    }

    txn_4423.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4423.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4423.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4424 = db.transaction(['objectStore_2962'], 'readonly', {durability:"strict"})
    var objectStore_2962 = txn_4424.objectStore('objectStore_2962');
    var getAll_3 = objectStore_2962.getAll();
    var getAllKeys_1;
    try{
        KeyRange_52 = IDBKeyRange.bound('BqeBXmvIHWAwPcOXzrsSegeUSuJhjffciJgzSrAVwneqcUnzoRSFMkRHdBoreDPXLuTeTbMliWCGrptNdasAfTxAkgjAwCyevesbZTcUckfyVsotqWBLEzJqtUWIlkcsOkWEDNLTfJdSFGClyLYbSYyZSZTQymvkNRLWPkyBqieAEREHiQOhcaZImVgxxaPpOkxBjttmaTRiFGrYhwVCClspswPilxpVVgyuBkvnOllFXWTPpHJpmAFwtBfeLudstWDmsmvpHYW', 'HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', true, true);
        getAllKeys_1 = objectStore_2962.getAllKeys(KeyRange_52);
    }
    catch (e){
        KeyRange_53 = IDBKeyRange.only('PqqXMYpXICKnYRJwfRQlhneKDmhMCVVpPUQyiAJPrUfJxjLVYtseipgecrXOrPrEVnZIGGWWxtiGqLGzKhtQrxOICujmwRBekkiIjeAFByeuI');
        getAllKeys_1 = objectStore_2962.getAllKeys(KeyRange_53);
    }

    var get_19;
    try{
        KeyRange_54 = IDBKeyRange.bound('HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', 'HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', true, true);
        get_19 = objectStore_2962.get(KeyRange_54);
    }
    catch (e){
    }

    var getAllKeys_2;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('niiPDDXKcRmvKKivGMuacQeYrYWYwwGpHAtAjjTZHkqCrZytQwSRHiwuagowvikXXxHPelPjPXVWAqYZeWoGKndYoKUuJckBYBmaTGhKwhNrstXWuEWFXMzHrDDoRysQlVIzsEAQqvZbiptgRpEtZGsIzDnRecPKSvcqQPKpYleIUCeGQUYvpcezIXtwdbwsBfHJCCOGeFijkPQdxLfWnFSkEghvWdnZBJoZccLZSuoCWNZBpaNebEzsUlaqnPISiOtyBJPJGeoWogFjCBJnRCDwOCvywcAmcNIhRNOMCpZeLUqSAupKEUKRBfjBtOjiIWWpllCIRwPfGfLedAbWnqSQnGalcAdbGHcTsYgGNcsWcWWwRtXFuzKnOqRdYvALZmCNwGxPEyvlmVNgebvkibVDHsZqSLZzqTVygadtoXUjcBwqbhqohPLJVhCoyuPleUmttBdgCACSsRtdHkMIjzcsYLgbdrsuupSLAuEniAUonNdIdwImnruGleIIQUFZBDGIxWRjUuexuSPXPlGuJjqqjoHVvUaXFWqCsprhfceDIxgJXFHWmkcCIFqzcrGxARDEdZuDiMxlXqUzJHMXyneOtGjdKCWGgrKalGClDfQxAZoRhoVNLudSYpeCCGXJNRmsWMfYCH', false);
        getAllKeys_2 = objectStore_2962.getAllKeys(KeyRange_56);
    }
    catch (e){
        KeyRange_57 = IDBKeyRange.only('niiPDDXKcRmvKKivGMuacQeYrYWYwwGpHAtAjjTZHkqCrZytQwSRHiwuagowvikXXxHPelPjPXVWAqYZeWoGKndYoKUuJckBYBmaTGhKwhNrstXWuEWFXMzHrDDoRysQlVIzsEAQqvZbiptgRpEtZGsIzDnRecPKSvcqQPKpYleIUCeGQUYvpcezIXtwdbwsBfHJCCOGeFijkPQdxLfWnFSkEghvWdnZBJoZccLZSuoCWNZBpaNebEzsUlaqnPISiOtyBJPJGeoWogFjCBJnRCDwOCvywcAmcNIhRNOMCpZeLUqSAupKEUKRBfjBtOjiIWWpllCIRwPfGfLedAbWnqSQnGalcAdbGHcTsYgGNcsWcWWwRtXFuzKnOqRdYvALZmCNwGxPEyvlmVNgebvkibVDHsZqSLZzqTVygadtoXUjcBwqbhqohPLJVhCoyuPleUmttBdgCACSsRtdHkMIjzcsYLgbdrsuupSLAuEniAUonNdIdwImnruGleIIQUFZBDGIxWRjUuexuSPXPlGuJjqqjoHVvUaXFWqCsprhfceDIxgJXFHWmkcCIFqzcrGxARDEdZuDiMxlXqUzJHMXyneOtGjdKCWGgrKalGClDfQxAZoRhoVNLudSYpeCCGXJNRmsWMfYCH');
        getAllKeys_2 = objectStore_2962.getAllKeys(KeyRange_57);
    }

    var get_20;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('BqeBXmvIHWAwPcOXzrsSegeUSuJhjffciJgzSrAVwneqcUnzoRSFMkRHdBoreDPXLuTeTbMliWCGrptNdasAfTxAkgjAwCyevesbZTcUckfyVsotqWBLEzJqtUWIlkcsOkWEDNLTfJdSFGClyLYbSYyZSZTQymvkNRLWPkyBqieAEREHiQOhcaZImVgxxaPpOkxBjttmaTRiFGrYhwVCClspswPilxpVVgyuBkvnOllFXWTPpHJpmAFwtBfeLudstWDmsmvpHYW', false);
        get_20 = objectStore_2962.get(KeyRange_58);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_60 = IDBKeyRange.lowerBound('niiPDDXKcRmvKKivGMuacQeYrYWYwwGpHAtAjjTZHkqCrZytQwSRHiwuagowvikXXxHPelPjPXVWAqYZeWoGKndYoKUuJckBYBmaTGhKwhNrstXWuEWFXMzHrDDoRysQlVIzsEAQqvZbiptgRpEtZGsIzDnRecPKSvcqQPKpYleIUCeGQUYvpcezIXtwdbwsBfHJCCOGeFijkPQdxLfWnFSkEghvWdnZBJoZccLZSuoCWNZBpaNebEzsUlaqnPISiOtyBJPJGeoWogFjCBJnRCDwOCvywcAmcNIhRNOMCpZeLUqSAupKEUKRBfjBtOjiIWWpllCIRwPfGfLedAbWnqSQnGalcAdbGHcTsYgGNcsWcWWwRtXFuzKnOqRdYvALZmCNwGxPEyvlmVNgebvkibVDHsZqSLZzqTVygadtoXUjcBwqbhqohPLJVhCoyuPleUmttBdgCACSsRtdHkMIjzcsYLgbdrsuupSLAuEniAUonNdIdwImnruGleIIQUFZBDGIxWRjUuexuSPXPlGuJjqqjoHVvUaXFWqCsprhfceDIxgJXFHWmkcCIFqzcrGxARDEdZuDiMxlXqUzJHMXyneOtGjdKCWGgrKalGClDfQxAZoRhoVNLudSYpeCCGXJNRmsWMfYCH', true);
        get_21 = objectStore_2962.get(KeyRange_60);
    }
    catch (e){
    }

    var index_2 = objectStore_2962.index('index_1994');
    var getAllKeys_3 = objectStore_2962.getAllKeys();
    var getAllKeys_4 = objectStore_2962.getAllKeys();
    var get_22;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('jePGpjNwMLnmVALEArlcqUSlVrLyopLvOMrrAFdCoTBEjisMkJNvGnhKyOupHasyTYbQBBZqzdYSWuDGgkmAyihYuLqqriTPXuuWPHIwrtAuNJOstMIRFjExScDlcyiUwUxthwQFULSeCCPWRzPlergmEaCshTvOIlyJQWywjdazKJrONeBbEznKfzIQcfmiXELAceuwVjhKsLXoYIACSfGPZcXqbVGDxSoNPWxzEsHTxzuuZuSVqFYtboTLhdwIaULCXJaixmshVTAAeOIsjDKZESieayNsKAEbVSYuvUuwkrFbECOdsGBbipBjQScEJrRmqgkVoEdXUSmvubpHvOhyGHkiwdBKNAOvvGQBrExIMaDUnsRXxZeT', true);
        get_22 = objectStore_2962.get(KeyRange_62);
    }
    catch (e){
    }

    var getAllKeys_5;
    try{
        KeyRange_64 = IDBKeyRange.bound('jePGpjNwMLnmVALEArlcqUSlVrLyopLvOMrrAFdCoTBEjisMkJNvGnhKyOupHasyTYbQBBZqzdYSWuDGgkmAyihYuLqqriTPXuuWPHIwrtAuNJOstMIRFjExScDlcyiUwUxthwQFULSeCCPWRzPlergmEaCshTvOIlyJQWywjdazKJrONeBbEznKfzIQcfmiXELAceuwVjhKsLXoYIACSfGPZcXqbVGDxSoNPWxzEsHTxzuuZuSVqFYtboTLhdwIaULCXJaixmshVTAAeOIsjDKZESieayNsKAEbVSYuvUuwkrFbECOdsGBbipBjQScEJrRmqgkVoEdXUSmvubpHvOhyGHkiwdBKNAOvvGQBrExIMaDUnsRXxZeT', 'niiPDDXKcRmvKKivGMuacQeYrYWYwwGpHAtAjjTZHkqCrZytQwSRHiwuagowvikXXxHPelPjPXVWAqYZeWoGKndYoKUuJckBYBmaTGhKwhNrstXWuEWFXMzHrDDoRysQlVIzsEAQqvZbiptgRpEtZGsIzDnRecPKSvcqQPKpYleIUCeGQUYvpcezIXtwdbwsBfHJCCOGeFijkPQdxLfWnFSkEghvWdnZBJoZccLZSuoCWNZBpaNebEzsUlaqnPISiOtyBJPJGeoWogFjCBJnRCDwOCvywcAmcNIhRNOMCpZeLUqSAupKEUKRBfjBtOjiIWWpllCIRwPfGfLedAbWnqSQnGalcAdbGHcTsYgGNcsWcWWwRtXFuzKnOqRdYvALZmCNwGxPEyvlmVNgebvkibVDHsZqSLZzqTVygadtoXUjcBwqbhqohPLJVhCoyuPleUmttBdgCACSsRtdHkMIjzcsYLgbdrsuupSLAuEniAUonNdIdwImnruGleIIQUFZBDGIxWRjUuexuSPXPlGuJjqqjoHVvUaXFWqCsprhfceDIxgJXFHWmkcCIFqzcrGxARDEdZuDiMxlXqUzJHMXyneOtGjdKCWGgrKalGClDfQxAZoRhoVNLudSYpeCCGXJNRmsWMfYCH', true, false);
        getAllKeys_5 = objectStore_2962.getAllKeys(KeyRange_64, 373996449);
    }
    catch (e){
        KeyRange_65 = IDBKeyRange.only('KjXBoumFquCgffRqbQaevvTONFwueAvtjn');
        getAllKeys_5 = objectStore_2962.getAllKeys(KeyRange_65);
    }

    var get_23;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', true);
        get_23 = objectStore_2962.get(KeyRange_66);
    }
    catch (e){
    }

    var get_24;
    try{
        KeyRange_68 = IDBKeyRange.bound('HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', 'jePGpjNwMLnmVALEArlcqUSlVrLyopLvOMrrAFdCoTBEjisMkJNvGnhKyOupHasyTYbQBBZqzdYSWuDGgkmAyihYuLqqriTPXuuWPHIwrtAuNJOstMIRFjExScDlcyiUwUxthwQFULSeCCPWRzPlergmEaCshTvOIlyJQWywjdazKJrONeBbEznKfzIQcfmiXELAceuwVjhKsLXoYIACSfGPZcXqbVGDxSoNPWxzEsHTxzuuZuSVqFYtboTLhdwIaULCXJaixmshVTAAeOIsjDKZESieayNsKAEbVSYuvUuwkrFbECOdsGBbipBjQScEJrRmqgkVoEdXUSmvubpHvOhyGHkiwdBKNAOvvGQBrExIMaDUnsRXxZeT', true, true);
        get_24 = objectStore_2962.get(KeyRange_68);
    }
    catch (e){
    }

    var get_25;
    try{
        KeyRange_70 = IDBKeyRange.bound('HGIAZFZNszkJwpUpKlgZlKuRNqVtwYTglvAviHYHAloxZkNiercebsSeWHybQffYFLWmRPjTvBpQJqsZbylXRnPBGPsIAFASRwrKQbLJewBFLZIFRgjFZbhDFupsXjXPBJvdbQpDEIpEJUEgiQjLNUsotUcuRkNUdhngsjRldESOSWBKEeyGJCEJwQpJkKECLCClDbSFTalWnmYdfLEDwDWDJovORKcGTRaJyrHYXazWwvLjxaoQicVFVzbkELGQcbwqymrjYzbuIcJYPGvLDVqZzMVRGYkZWhnHurXHHTZZZDpLZGkjEXltMdQWkLYIwyovVLOzNOrvZZXinreFIKpeRYHfdkQptgKEaAUrLNSEWCNEFmcbCLGwjKbQYakQrUFdCpAryrKTPeAzigzwXnJlAUiwouzyvMvkuaFruIzPGtsLzPIspixjovFbMKktiEmLUjaLgChcrwHrwlNv', 'BqeBXmvIHWAwPcOXzrsSegeUSuJhjffciJgzSrAVwneqcUnzoRSFMkRHdBoreDPXLuTeTbMliWCGrptNdasAfTxAkgjAwCyevesbZTcUckfyVsotqWBLEzJqtUWIlkcsOkWEDNLTfJdSFGClyLYbSYyZSZTQymvkNRLWPkyBqieAEREHiQOhcaZImVgxxaPpOkxBjttmaTRiFGrYhwVCClspswPilxpVVgyuBkvnOllFXWTPpHJpmAFwtBfeLudstWDmsmvpHYW', true, false);
        get_25 = objectStore_2962.get(KeyRange_70);
    }
    catch (e){
    }

    txn_4424.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4424.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4424.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    db.onversionchange = (event) => {
        console.log('The version of this database has changed, release this connection');
        db.close()
    };
    db.onclose = (event) => {
        console.log('The database connection is unexpectedly closed');
    };
};
openRequest.onerror = (event) => {
    console.log('open db onerror triggered')
    var errorResult;
    errorResult = event.target.error;
    console.log(errorResult.message)
    console.log(errorResult.name)
};
openRequest.onblocked = (event) => {
    console.log('open db blocked triggered')
};
const deleteRequest = indexedDB.deleteDatabase('str_8584')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};