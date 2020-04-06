function imagesBlockMobile(){   
    var images = new Array(    
        ["images/logo_cdate.png","https://track.backtoblack.xyz/click?pid=5875&offer_id=2155"],    
        ["images/logo_deinseitensprung.png","https://track.strawberryworld.xyz/click?pid=5875&offer_id=4877&l=1585665067"],    
       [ "images/logo_emmadchen.png","https://track.strawberryworld.xyz/click?pid=5875&offer_id=3815"],      
        ["images/logo_ficktreffen.png","https://track.backtoblack.xyz/click?pid=5875&offer_id=4147"],   
       [ "images/logo_flirthits_w.png","https://fresleads.go2affise.com/click?pid=5875&offer_id=4533"],    
        ["images/logo_kionti.png","https://track.backtoblack.xyz/click?pid=5875&offer_id=4856"],    
        ["images/logo_lustagenten.png","https://track.cpanda.me/click?pid=5875&offer_id=2372"],      
        ["images/logo_schlampeplatz.png","https://track.backtoblack.xyz/click?pid=5875&offer_id=4793 "],   
        ["images/logo_whatsaffair.png","https://track.backtoblack.xyz/click?pid=5875&offer_id=3795 "],      
        ["images/logo_whatsexy.gif","https://track.backtoblack.xyz/click?pid=5875&offer_id=3798"],    
      );
      var text = new Array(    
        "Handgeprüfte Profile für echte Kontakte",    
        "Finde ein Sextreffen in deiner Umgebung",    
        "Handgeprüfte Mitglieder für echte Kontakte",      
        "Sinnliche Begegnungen, die glücklich machen",   
        "Anonym, sicher, unverbindlich",    
        "Diskrete Partnersuche, besondere Begegnungen",    
        "Enger Profilschutz, manuelle Datenvalidierung",      
        "Diese Website ist nur für Erwachsene.",   
        "Wenn Sie an einer heißen Online-Affäre interessiert sind, registrieren Sie sich jetzt!",      
        "Der weltweit führende Dating-Assistent",    
      );
     
      var img = images;   
      
      var txt = text; 
     
      for (var i = 0; i < 3; i++) {    
        
        var a = Math.floor(Math.random() * img.length);  
        var b = Math.floor(Math.random() * txt.length); 
        
        document.write (`
        <tr class="blocTab_baner ">
            <td class="first-td size-logo">
                <a>
                    <img src='`+img[a][0]+`' class="image_baner" alt="logo">
                </a>                    
            </td>
            <td class="goSite size-btn">
                <p>`+txt[b]+`</p>
                <a href="`+img[a][1]+`" class="btn" title="Zur Seite"><span>Zur Seite</span></a>           
            </td>
        </tr>
                    `);
                      
        img.splice(a,1);    
       
        txt.splice(b,1);  
       
      }; 
         
      return false;
}   
