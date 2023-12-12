

function setInfo(name){
    let weapon = name.innerHTML;
    switch (weapon){
        
        
        case "AK-47":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/ak.webp");
            document.getElementById("price").innerHTML = "2700$";
            document.getElementById("ammo").innerHTML = "30/90";
            document.getElementById("head").innerHTML = "143/111";
            document.getElementById("chest").innerHTML = "35/27";
            document.getElementById("stomach").innerHTML = "44/34";
            document.getElementById("legs").innerHTML = "26";
            document.getElementById("rpm").innerHTML = "600";
            break;
            
        case "Galil AR":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_Galil_AR_Inventory.webp");
            document.getElementById("price").innerHTML = "1800$";
            document.getElementById("ammo").innerHTML = "35/90";
            document.getElementById("head").innerHTML = "119/92";
            document.getElementById("chest").innerHTML = "30/23";
            document.getElementById("stomach").innerHTML = "37/29";
            document.getElementById("legs").innerHTML = "22";
            document.getElementById("rpm").innerHTML = "667";
            break;

        case "M4A1-S":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_M4A1-S_Inventory.webp");
            document.getElementById("price").innerHTML = "2900$";
            document.getElementById("ammo").innerHTML = "20/80";
            document.getElementById("head").innerHTML = "132/92";
            document.getElementById("chest").innerHTML = "37/26";
            document.getElementById("stomach").innerHTML = "47/33";
            document.getElementById("legs").innerHTML = "28";
            document.getElementById("rpm").innerHTML = "600";
            break;

        case "FAMAS":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_FAMAS_Inventory.webp");
            document.getElementById("price").innerHTML = "2050$";
            document.getElementById("ammo").innerHTML = "25/90";
            document.getElementById("head").innerHTML = "120/84";
            document.getElementById("chest").innerHTML = "30/21";
            document.getElementById("stomach").innerHTML = "37/26";
            document.getElementById("legs").innerHTML = "22";
            document.getElementById("rpm").innerHTML = "667";
            break;
            
        case "M4A4":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_M4A4_Inventory.webp");
            document.getElementById("price").innerHTML = "3100$";
            document.getElementById("ammo").innerHTML = "30/90";
            document.getElementById("head").innerHTML = "131/92";
            document.getElementById("chest").innerHTML = "32/23";
            document.getElementById("stomach").innerHTML = "41/28";
            document.getElementById("legs").innerHTML = "24";
            document.getElementById("rpm").innerHTML = "667";
            break;

        case "AUG":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_AUG_Inventory.webp");
            document.getElementById("price").innerHTML = "3300$";
            document.getElementById("ammo").innerHTML = "30/90";
            document.getElementById("head").innerHTML = "112/100";
            document.getElementById("chest").innerHTML = "28/25";
            document.getElementById("stomach").innerHTML = "35/31";
            document.getElementById("legs").innerHTML = "21";
            document.getElementById("rpm").innerHTML = "600";
            break;

        case "SG 553":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_SG_553_Inventory.webp");
            document.getElementById("price").innerHTML = "3300$";
            document.getElementById("ammo").innerHTML = "30/90";
            document.getElementById("head").innerHTML = "119/119";
            document.getElementById("chest").innerHTML = "29/29";
            document.getElementById("stomach").innerHTML = "37/37";
            document.getElementById("legs").innerHTML = "22";
            document.getElementById("rpm").innerHTML = "545";
            break;
            
        case "SSG 08":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_SSG_08_Inventory.webp");
            document.getElementById("price").innerHTML = "1700$";
            document.getElementById("ammo").innerHTML = "10/90";
            document.getElementById("head").innerHTML = "352/299";
            document.getElementById("chest").innerHTML = "88/74";
            document.getElementById("stomach").innerHTML = "110/93";
            document.getElementById("legs").innerHTML = "66";
            document.getElementById("rpm").innerHTML = "48";
            break;

        case "AWP":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_AWP_Inventory.webp");
            document.getElementById("price").innerHTML = "4750$";
            document.getElementById("ammo").innerHTML = "10/30";
            document.getElementById("head").innerHTML = "459/448";
            document.getElementById("chest").innerHTML = "115/112";
            document.getElementById("stomach").innerHTML = "143/140";
            document.getElementById("legs").innerHTML = "85";
            document.getElementById("rpm").innerHTML = "41";
            break;

        case "G3SG1":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_G3SG1_Inventory.webp");
            document.getElementById("price").innerHTML = "5000$";
            document.getElementById("ammo").innerHTML = "20/90";
            document.getElementById("head").innerHTML = "316/263";
            document.getElementById("chest").innerHTML = "79/65";
            document.getElementById("stomach").innerHTML = "98/81";
            document.getElementById("legs").innerHTML = "60";
            document.getElementById("rpm").innerHTML = "240";
            break;

        case "SCAR-20":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_SCAR-20_Inventory.webp");
            document.getElementById("price").innerHTML = "5000$";
            document.getElementById("ammo").innerHTML = "20/90";
            document.getElementById("head").innerHTML = "316/263";
            document.getElementById("chest").innerHTML = "79/65";
            document.getElementById("stomach").innerHTML = "99/82";
            document.getElementById("legs").innerHTML = "59";
            document.getElementById("rpm").innerHTML = "240";
            break;

        case "P2000":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_P2000_Inventory.webp");
            document.getElementById("price").innerHTML = "200$";
            document.getElementById("ammo").innerHTML = "13/52";
            document.getElementById("head").innerHTML = "140/70";
            document.getElementById("chest").innerHTML = "34/17";
            document.getElementById("stomach").innerHTML = "43/22";
            document.getElementById("legs").innerHTML = "26";
            document.getElementById("rpm").innerHTML = "353";
            break;

        case "USP-S":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_USP-S_Inventory.webp");
            document.getElementById("price").innerHTML = "200$";
            document.getElementById("ammo").innerHTML = "12/24";
            document.getElementById("head").innerHTML = "140/70";
            document.getElementById("chest").innerHTML = "34/17";
            document.getElementById("stomach").innerHTML = "43/22";
            document.getElementById("legs").innerHTML = "26";
            document.getElementById("rpm").innerHTML = "353";
            break;

        case "Glock-18":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/glock.webp");
            document.getElementById("price").innerHTML = "200$";
            document.getElementById("ammo").innerHTML = "20/120";
            document.getElementById("head").innerHTML = "119/56";
            document.getElementById("chest").innerHTML = "29/14";
            document.getElementById("stomach").innerHTML = "37/17";
            document.getElementById("legs").innerHTML = "22";
            document.getElementById("rpm").innerHTML = "400";
            break;
            
        case "P250":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_P250_Inventory.webp");
            document.getElementById("price").innerHTML = "300$";
            document.getElementById("ammo").innerHTML = "13/26";
            document.getElementById("head").innerHTML = "151/96";
            document.getElementById("chest").innerHTML = "37/24";
            document.getElementById("stomach").innerHTML = "47/30";
            document.getElementById("legs").innerHTML = "28";
            document.getElementById("rpm").innerHTML = "400";
            break;

        case "Tec-9":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_Tec-9_Inventory.webp");
            document.getElementById("price").innerHTML = "500$";
            document.getElementById("ammo").innerHTML = "18/90";
            document.getElementById("head").innerHTML = "130/118";
            document.getElementById("chest").innerHTML = "32/29";
            document.getElementById("stomach").innerHTML = "40/36";
            document.getElementById("legs").innerHTML = "24";
            document.getElementById("rpm").innerHTML = "500";
            break;

        case "Dual Berettas":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_Dual_Berettas_Inventory.webp");
            document.getElementById("price").innerHTML = "300$";
            document.getElementById("ammo").innerHTML = "30/120";
            document.getElementById("head").innerHTML = "140/73";
            document.getElementById("chest").innerHTML = "35/18";
            document.getElementById("stomach").innerHTML = "43/22";
            document.getElementById("legs").innerHTML = "27";
            document.getElementById("rpm").innerHTML = "500";
            break;

        case "Five-Seven":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/fn57.webp") ;
            document.getElementById("price").innerHTML = "500$";
            document.getElementById("ammo").innerHTML = "20/100";
            document.getElementById("head").innerHTML = "126/115";
            document.getElementById("chest").innerHTML = "31/28";
            document.getElementById("stomach").innerHTML = "39/36";
            document.getElementById("legs").innerHTML = "23";
            document.getElementById("rpm").innerHTML = "400";
            break;

        case "CZ75":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_CZ75-Auto_Inventory.webp");
            document.getElementById("price").innerHTML = "500$";
            document.getElementById("ammo").innerHTML = "12/12";
            document.getElementById("head").innerHTML = "123/95";
            document.getElementById("chest").innerHTML = "30/23";
            document.getElementById("stomach").innerHTML = "38/29";
            document.getElementById("legs").innerHTML = "23";
            document.getElementById("rpm").innerHTML = "600";
            break;

        case "Desert Eagle":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_Desert_Eagle_Inventory.webp");
            document.getElementById("price").innerHTML = "700$";
            document.getElementById("ammo").innerHTML = "7/35";
            document.getElementById("head").innerHTML = "205/191";
            document.getElementById("chest").innerHTML = "52/49";
            document.getElementById("stomach").innerHTML = "65/61";
            document.getElementById("legs").innerHTML = "39";
            document.getElementById("rpm").innerHTML = "267";
            break;

        case "R8 Revolver":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_R8_Revolver_Inventory.webp");
            document.getElementById("price").innerHTML = "800$";
            document.getElementById("ammo").innerHTML = "8/8";
            document.getElementById("head").innerHTML = "343/319";
            document.getElementById("chest").innerHTML = "85/79";
            document.getElementById("stomach").innerHTML = "107/99";
            document.getElementById("legs").innerHTML = "64";
            document.getElementById("rpm").innerHTML = "150";
            break;

        case "Nova":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_Nova_Inventory.webp");
            document.getElementById("price").innerHTML = "1050$";
            document.getElementById("ammo").innerHTML = "8/32(9p)";
            document.getElementById("head").innerHTML = "104/52";
            document.getElementById("chest").innerHTML = "26/13";
            document.getElementById("stomach").innerHTML = "32/16";
            document.getElementById("legs").innerHTML = "19";
            document.getElementById("rpm").innerHTML = "68";
            break;

        case "MAG-7":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_MAG-7_Inventory.webp");
            document.getElementById("price").innerHTML = "1300$";
            document.getElementById("ammo").innerHTML = "5/32(8p)";
            document.getElementById("head").innerHTML = "120/90";
            document.getElementById("chest").innerHTML = "30/22";
            document.getElementById("stomach").innerHTML = "37/28";
            document.getElementById("legs").innerHTML = "22";
            document.getElementById("rpm").innerHTML = "71";
            break;

        case "XM1014":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_XM1014_Inventory.webp");
            document.getElementById("price").innerHTML = "2000$";
            document.getElementById("ammo").innerHTML = "7/32(6p)";
            document.getElementById("head").innerHTML = "80/64";
            document.getElementById("chest").innerHTML = "20/16";
            document.getElementById("stomach").innerHTML = "25/20";
            document.getElementById("legs").innerHTML = "15";
            document.getElementById("rpm").innerHTML = "171";
            break;

        case "Sawed-Off":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_Sawed-Off_Inventory.webp");
            document.getElementById("price").innerHTML = "1100$";
            document.getElementById("ammo").innerHTML = "7/32(8p)";
            document.getElementById("head").innerHTML = "128/96";
            document.getElementById("chest").innerHTML = "32/24";
            document.getElementById("stomach").innerHTML = "40/40";
            document.getElementById("legs").innerHTML = "24";
            document.getElementById("rpm").innerHTML = "71";
            break;

        case "M249":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_M249_Inventory.webp");
            document.getElementById("price").innerHTML = "5200$";
            document.getElementById("ammo").innerHTML = "100/200";
            document.getElementById("head").innerHTML = "128/102";
            document.getElementById("chest").innerHTML = "32/25";
            document.getElementById("stomach").innerHTML = "40/32";
            document.getElementById("legs").innerHTML = "24";
            document.getElementById("rpm").innerHTML = "750";
            break;

        case "Negev":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_Negev_Inventory.webp");
            document.getElementById("price").innerHTML = "1700$";
            document.getElementById("ammo").innerHTML = "150/300";
            document.getElementById("head").innerHTML = "140/99";
            document.getElementById("chest").innerHTML = "35/24";
            document.getElementById("stomach").innerHTML = "43/31";
            document.getElementById("legs").innerHTML = "26";
            document.getElementById("rpm").innerHTML = "800";
            break;

        case "MP9":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_MP9_Inventory.webp");
            document.getElementById("price").innerHTML = "1250$";
            document.getElementById("ammo").innerHTML = "30/120";
            document.getElementById("head").innerHTML = "104/61";
            document.getElementById("chest").innerHTML = "26/15";
            document.getElementById("stomach").innerHTML = "32/19";
            document.getElementById("legs").innerHTML = "19";
            document.getElementById("rpm").innerHTML = "857";
            break;

        case "MAC-10":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_MAC-10_Inventory.webp");
            document.getElementById("price").innerHTML = "1050$";
            document.getElementById("ammo").innerHTML = "30/100";
            document.getElementById("head").innerHTML = "114/65";
            document.getElementById("chest").innerHTML = "28/16";
            document.getElementById("stomach").innerHTML = "35/20";
            document.getElementById("legs").innerHTML = "21";
            document.getElementById("rpm").innerHTML = "800";
            break;

        case "PP-Bizon":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_PP-Bizon_Inventory.webp");
            document.getElementById("price").innerHTML = "1400$";
            document.getElementById("ammo").innerHTML = "64/120";
            document.getElementById("head").innerHTML = "108/65";
            document.getElementById("chest").innerHTML = "27/16";
            document.getElementById("stomach").innerHTML = "33/20";
            document.getElementById("legs").innerHTML = "20";
            document.getElementById("rpm").innerHTML = "750";
            break;

        case "MP7":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_MP7_Inventory.webp");
            document.getElementById("price").innerHTML = "1400$";
            document.getElementById("ammo").innerHTML = "30/120";
            document.getElementById("head").innerHTML = "115/71";
            document.getElementById("chest").innerHTML = "28/17";
            document.getElementById("stomach").innerHTML = "35/22";
            document.getElementById("legs").innerHTML = "21";
            document.getElementById("rpm").innerHTML = "750";
            break;

        case "P90":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_P90_Inventory.webp");
            document.getElementById("price").innerHTML = "2350$";
            document.getElementById("ammo").innerHTML = "50/100";
            document.getElementById("head").innerHTML = "103/71";
            document.getElementById("chest").innerHTML = "25/17";
            document.getElementById("stomach").innerHTML = "32/22";
            document.getElementById("legs").innerHTML = "19";
            document.getElementById("rpm").innerHTML = "857";
            break;

        case "UMP-45":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_UMP-45_Inventory.webp");
            document.getElementById("price").innerHTML = "1200$";
            document.getElementById("ammo").innerHTML = "25/100";
            document.getElementById("head").innerHTML = "140/90";
            document.getElementById("chest").innerHTML = "35/22";
            document.getElementById("stomach").innerHTML = "43/28";
            document.getElementById("legs").innerHTML = "25";
            document.getElementById("rpm").innerHTML = "667";
            break;

        case "MP5-SD":
            document.getElementById("weaponImg").setAttribute("src","image/weapon/CSGO_MP5-SD_Inventory.webp");
            document.getElementById("price").innerHTML = "1500$";
            document.getElementById("ammo").innerHTML = "30/120";
            document.getElementById("head").innerHTML = "107/66";
            document.getElementById("chest").innerHTML = "26/16";
            document.getElementById("stomach").innerHTML = "33/20";
            document.getElementById("legs").innerHTML = "20";
            document.getElementById("rpm").innerHTML = "750";
            break;
            
        default:
            break;
    }
}
    
    