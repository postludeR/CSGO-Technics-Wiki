# CS:GO Techniques Wiki Report

### Links

#### Website

([CS:GO Techniques Wiki (massey.ac.nz)](https://sfs-webdev.massey.ac.nz/site2236/158258/ass2/))

#### Presentation

([Bilibili](https://www.bilibili.com/video/BV1SP411A7EU))



## Introduction

### Target Audience

#### 1. Video game (Especially FPS games) players 

These are gamers who are passionate about video games, who have undoubtedly played video games and have their own PC, PlayStation or Xbox. Some of them may be avid gamers of FPS games like COD, VALORANT, or OVERWATCH, and have relatively easy access to CS.

Counter Strike is one of the most famous FPS games, and I hope more non-CS players who see this web can join this community. For a competitive game, the player group is very important.

#### 2. CS:GO new players

These players are new to CS, and most of them probably don't have a high FPS monitor or a high performance mouse. Some of these players are light players who don't play regularly, and some want to improve their level.  At the same time, no one tells them the common skills in the game, and it is relatively inefficient to rely on their own exploration to improve their abilities.

A competitive game with a very mature system is often difficult for new players to get into. However, by learning the content in the Techniques Wiki, new players can easily find ways to directly improve themselves.

#### 3. Players who have mastered basic techniques and have their own game understanding

These gamers often have their familiar display, mouse, and keyboard. In the long time of the game formed their own unique game routine. However, they often hit a bottleneck as they reach higher levels. Once these players are unable to overcome the bottleneck, they may become so frustrated，even abandon CS and turn to other games.

Techniques Wiki as a platform for all players to share their own unique Techniques can provide new perspectives for every players.

#### 4. Pros

These players have made CSGO their profession, they are the top players in CSGO, and the skills they develop will influence the entire gaming community.

For pros, this Wiki is where they can share their own Techniques with the gaming community and let more players  join e-sports.

### Purpose of the Website

#### 1. Provide CS:GO players a platform with both complete and practical contents

While searching for information, I found that the guides on CSGO techniques are distributed in various places, and there is a lack of a website that integrates them all. Wiki  was created for this purpose.

#### 2. Provide a communication platform for CS:GO players all over the world（Future Goal）

CS players, like sports players, are constantly learning to improve themselves. In addition to each practice, the experience of others is also very important. I hope everyone can share their experiences on the web.

*”三人行， 必有我师焉“ --孔子*

*“There is always someone to learn from.” --Confucius*

### Addressing issues 

#### 1. A CS:GO website *JUST* for techniques

There are many CSGO communities on the Internet, including Steam community. These communities contain everything about CSGO, such as weapon skins, market trends, professional matches, and game skills, and not all CSGO players care about game techniques. 

CS:GO Techniques Wiki, as its name suggests, was created only for CSGO Techniques. I hope that players who want to improve their level can find what they want in the Internet most both efficiently and directly.

#### 2. Integrate CS:GO Techniques on the internet

There is and obvious fact that there is no shortage of CSGO techniques articles on the Internet, but they are randomly distributed. For example, it's hard to jump directly to a page that contains *peek* from a page content  *one-way smoke*, but with Wiki, you can easily check out any tips you want and see how they relate.

### Related sites

#### 1. ZESTRAT

[[Zestrat - Build Tactics for your CS:GO Team](https://www.zestrat.gg/)](https://www.zestrat.gg/)

![avatar](https://sfs-webdev.massey.ac.nz/site2236/158258/ass2/imgMD/ze.png)

ZESTRAT provides very comprehensive content at Tatics and Nades, its design style is clean, and users can easily see what they want based on tags of map or side . At the same time, this website also provides keyword search function, which is my website needs to learn.

#### 2. Counter Strike Wiki

[Counter-Strike: Global Offensive | Counter-Strike Wiki | Fandom](https://counterstrike.fandom.com/wiki/Counter-Strike:_Global_Offensive#Rifles)

![avatar](https://sfs-webdev.massey.ac.nz/site2236/158258/ass2/imgMD/csgowiki.png)

CS WIKI is a website which contents a lot of professional data that relevant to the whole CS series. Although it has so much information, the navigation design is elegant and the color scheme has reasonable contrast so it is easy to read. This website helps me a lot when I build my own one.

## Analysis

### Web Site Goal

The unique website focuses on CSGO Techniques on the Internet.

A community of various CSGO players that people can communicate and learn from each other.

### Information that I need

The article or short video contents CSGO techniques on the Internet.

Pros' highlights on YouTube and bilibili which show particular techniques.

Standard weapon or game icon from other professional websites such as CSGO wiki.

### Form

Steam ID								Contact conveniently.

District									Bring some new views that never see in one's distribute.

Gaming platform(s) 			Different platform have different evaluation standard, if in the same platform 												we can play together!!!!

Level									   Though score is not absolutely precise, but it is the relative fair standard to 												evaluate one's skill.

Any Advice and ideas		   Your little step is a great step for this website!

### Site Map

In the project folder

### Page Wireframe

In the project folder

### Critique of the site

#### 1. What do you think is good?

* Reasonable use of color and contrast, using color matching from CS:GO's predecessor - the classic Half-life and CS1.6.
* Gradients and transitions are elegantly applied.
* The use of the page position jump button makes the interaction very convenient.
* Navigator and overview parts make users fast learn what is the page for.
* In the Weapon page, the application of javascript makes it easy and efficient to view weapon data.
* When move the cursor on the pros, their team's logo will appear from the top down, that is one of the most coolest effect in the website.
* Contains almost all kinds of CSGO techniques commonly used, but each section is not detailed enough.

#### 2. Given more time, what would you improve?

* The information of each section techniques will be very huge so I need both a navigator for each page and a global searching by key words function.
* Home page is not so complete, it should content a more brief but targeted overview of all techniques and it still need some introduction to someone who never play CS before.
* Upload him to my own server. Then make it all editable (subject to review) like Wikipedia and be a really practical website for all CSGO players.



#### Appendix

1. Weapon Select

```html
<table>
            <tr>
                <td class="data">Price</td>
                <td id="price" >200$</td>
            </tr>
            <tr>
                <td class="data">Ammo</td>
                <td id="ammo">20/120</td>
            </tr>
            <tr>
                <td class="data">Head/(kevlar)</td>
                <td id="head">111/52</td>
            </tr>
            <tr>
                <td class="data">Chest/(kevlar)</td>
                <td id="chest">27/13</td>
            </tr>
            <tr>
                <td class="data">Stomach/(kevlar)</td>
                <td id="stomach">34/16</td>
            </tr>
            <tr>
                <td class="data">Legs</td>
                <td id="legs">20</td>
            </tr>
            <tr>
                <td class="data">RPM</td>
                <td id="rpm">400</td>
            </tr>
        </table>
```

```javascript
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
         
         case:......
                
     	 default:
            break;
	}
}



    
```

2. Back to top/Other moving functions 

```javascript
function topFunction() {
    
    let myTimer = -1;

    let scrollTo = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (myTimer === -1) {
        myTimer = setInterval(() => {
            
            scrollTo -= 50;
            
            if (scrollTo <= 0) {
                scrollTo = 0;
                window.clearInterval(myTimer);
                myTimer = -1;
            }

            window.scrollTo(0, scrollTo) 
        }, 7);

    }

}
```



3. Collect Data

```javascript
function save() {
    
    var steamID = document.getElementById("steamID").value;
    var district = document.getElementById("district").value;
    var platform = document.getElementById("platform").value;
    var level = document.getElementById("level").value;
    var adv = document.getElementById("adv").value;
    var total = "Steam ID: " + steamID + '<br>' 
        + "District: " + district + '<br>'
        + "Gaming Platform(s): " + platform + '<br>'
        + "Level: " + level + '<br>'
        + "Any Advice: " + adv + '<br>'
        + "Time: " + Date();
    localStorage.setItem(steamID, total);
    alert("Submit successfully!");
}

function clearing(){
    window.alert("Clear all the data.");
    localStorage.clear();
}



let arr = String();

function display() {
    for (var i = 0; i < localStorage.length; i++) {
        var getKey = localStorage.key(i);
        var getVal = localStorage.getItem(getKey);
        arr += getVal + '<br>' + '<br>';
    }
    var find_result = document.getElementById("find_result");
    find_result.innerHTML = arr;
    arr = String();


}


```

4. Map location jump

```javascript
infe: function(e){
                let center = L.latLng(40.841909, 14.304199);
                this._map.setView(center);
                this._map.setView(center, this.map.getZoom());
            }
 dust: function (e){
                let center = L.latLng(31.378371, 34.615173);
                this._map.setView(center);
                this._map.setView(center, this.map.getZoom());
            },
```





