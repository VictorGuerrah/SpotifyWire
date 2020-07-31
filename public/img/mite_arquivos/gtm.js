
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"337",
  
  "macros":[{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],"===",["escape",["macro",1],8,16],"?!1:!0})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var p=\"access_token account[email] account[password] address adresse_contact api_key app_auth_key application_server_address auth_pass auth_user authenticity_token authuser billing[addr_1] billing[addr_2] billing[card_num] billing[first_name] billing[last_name] billing[postal] client_secret code confirm_password confirm-password confirmation_token confirmpassword contact_first_name__c contactemail data dev_email dev_pw e ehash email email_address email_id emailaddress emailpath emailsearch env[admin_password] env[apiai_access_token] env[default_passphrase] env[dpm_password] env[dpm_user] env[ds_user_email] env[ds_user_pw] env[ipfs_password] env[kisi_token] env[links_password] env[password] env[phone] env[sfdc_password] env[sfdc_username] fax first_name first_name.text firstname full_name invitation_token last_name lastname login mac_address mailpass message mobile mobilecode name nombre oauth_token pass password phone phonenum phonenumber pw reset_password_token rmail secret_password set_userloginname state street target.password target.username tel telefonofijo telefonomovil token torrent_pass un user user_id user_token user[email] user[name] userid username userpass zip\".split(\" \"),\nq=\"dl dp dr dt ec ea el uid cd\\\\d{1,3} pr\\\\d{1,3}cd\\\\d{1,3}\".split(\" \"),k=\"_ga_originalSendHitTask\",u=[{name:\"EMAIL\",regex:\/([^\u0026\\s\\\/\\?#=:]){1,}(@|%40).([^\u0026\\s\\\/\\?#]){1,}\/ig},{name:\"UUID\",regex:\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})\/ig}];return function(b){window[k]=window[k]||b.get(\"sendHitTask\");var f=b.get(\"\\x26dl\");f=f.replace(\/\\.(html|jsp)\/gi,\"\");b.set(\"\\x26dl\",f);b.set(\"sendHitTask\",function(b){var f=b,r=window[k],v=!0;try{for(var g=b.get(\"hitPayload\").split(\"\\x26\"),\nh=0;h\u003Cg.length;h++){var l=\"\",c=g[h].split(\"\\x3d\");try{var a=decodeURIComponent(decodeURIComponent(c[1]))}catch(w){a=decodeURIComponent(c[1])}for(var m=0;m\u003Cq.length;m++)if(null!=c[0].match(new RegExp(\"^(\"+q[m]+\")$\"))\u0026\u0026-1\u003Ca.indexOf(\"?\")\u0026\u0026!\/\\?$\/ig.test(a)){var d=a.toLowerCase().split(\"?\").splice(1).join(\"\\x26\").split(\"\\x26\"),e=[];for(pa=0;pa\u003Cd.length;pa++)-1\u003Cd[pa].indexOf(\"?\")\u0026\u0026e.push(d[pa].split(\"?\")[1]);d=d.concat(e);for(e=0;e\u003Cd.length;e++){for(var t=!1,n=0;n\u003Cp.length;n++)if(0==d[e].indexOf((p[n]+\n\"\\x3d\").toLowerCase())){l+=d[e].split(\"\\x3d\")[0]+\"\\x3d[redacted]\\x26\";t=!0;break}0==t\u0026\u0026(l+=d[e]+\"\\x26\")}\/\\?$\/ig.test(a)||\/%3F$\/ig.test(a)||\/\\? \/ig.test(a)||\/%3F%20\/ig.test(a)||(a=a.replace(\/\\?.*\/,\"?\"+l.replace(\/\u0026$\/,\"\")))}u.forEach(function(b){\/\\?$\/ig.test(c[1])||\/%3F$\/ig.test(c[1])||\/\\? \/ig.test(c[1])||\/%3F%20\/ig.test(c[1])||(a=a.replace(b.regex,\"[redacted]\"))});\/^(ec|el|ea)$\/ig.test(c[0])?c[1]=encodeURIComponent(a):c[1]=encodeURIComponent(a.replace(\/\\?$\/,\"\"));g[h]=c.join(\"\\x3d\")}b.set(\"hitPayload\",\ng.join(\"\\x26\"),!0);v\u0026\u0026r(b)}catch(w){r(f)}})}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"heroku_session"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",10],
      "vtp_defaultValue":"NotLoggedIn",
      "vtp_map":["list",["map","key","1","value","LoggedIn"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"c",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery(\".gs-no-results-result\").length|\"block\"==jQuery(\".js-search-no-results\").css(\"display\"))var a=\"No Result\";else 0\u003CjQuery(\".gsc-result-info\").length?(a=jQuery(\".gsc-result-info\").text(),a=a.match(\/\\s(.+ results)\/g)[0].trim()):a=0\u003CjQuery(\".js-search-results \\x3e li\").length?jQuery(\".js-search-results \\x3e li\").length+\" results\":0\u003CjQuery(\".addon.search-total-count \\x3e a \\x3e span \\x3e span\").length?\"[Elements] Add-on results: \"+jQuery(\".addon.search-total-count \\x3e a \\x3e span \\x3e span\")[0].innerText+\n\", Button results: \"+jQuery(\".button.search-total-count \\x3e a \\x3e span \\x3e span\")[0].innerText+\", Buildpack results: \"+jQuery(\".buildpack.search-total-count \\x3e a \\x3e span \\x3e span\")[0].innerText:void 0;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"blogChannel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=document.referrer;return\"\"!==a?a:\"[NO PREVIOUS PAGE AVAILABLE]\"}catch(b){}})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-39697570-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"button-impressions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"button-clicks"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pricing-page-estimate"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"pricing estimate\"==",["escape",["macro",18],8,16],".toLowerCase()||\"pricing navigation\"==",["escape",["macro",18],8,16],".toLowerCase())return ga.getAll()[0].get(\"clientId\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"pricing estimate\"==",["escape",["macro",18],8,16],".toLowerCase()||\"pricing navigation\"==",["escape",["macro",18],8,16],".toLowerCase()){var a=new Date;a=a.toString().split(\" \");return a=a[3]+\" \"+a[1]+\" \"+a[2]+\" \"+a[4]}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/(.*)\\.heroku\\.com\/.exec(",["escape",["macro",5],8,16],")[1]})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",27],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","devcenter","value","UA-39697570-3"],["map","key","www","value","UA-39697570-4"],["map","key","dashboard","value","UA-39697570-5"],["map","key","id","value","UA-39697570-6"],["map","key","addons","value","UA-39697570-7"],["map","key","beta","value","UA-39697570-11"],["map","key","blog","value","UA-39697570-12"],["map","key","dataclips","value","UA-39697570-13"],["map","key","discussion","value","UA-39697570-14"],["map","key","events","value","UA-39697570-15"],["map","key","help","value","UA-39697570-16"],["map","key","toolbelt","value","UA-39697570-17"],["map","key","jobs","value","UA-39697570-18"],["map","key","lp","value","UA-39697570-19"],["map","key","waza","value","UA-39697570-20"],["map","key","partners","value","UA-39697570-21"],["map","key","postgres","value","UA-39697570-22"],["map","key","redeem","value","UA-39697570-23"],["map","key","status","value","UA-39697570-25"],["map","key","success","value","UA-39697570-26"],["map","key","signup","value","UA-39697570-31"],["map","key","elements","value","UA-39697570-32"],["map","key","engineering","value","UA-39697570-33"],["map","key","connect","value","UA-39697570-34"],["map","key","redis","value","UA-39697570-36"],["map","key","sso","value","UA-39697570-38"],["map","key","kb","value","UA-39697570-40"],["map","key","data","value","UA-39697570-41"],["map","key","jp","value","UA-39697570-44"],["map","key","brand","value","UA-39697570-46"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByClassName(\"gtm_signup_register_form\").length})();"]
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialTarget"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialNetwork"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.value"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"list_93478\").checked?\"checked\":\"unchecked\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__c",
      "vtp_value":"UA-39697570-25"
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page-variant"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"div#summary \\x3e div.summary-wrapper \\x3e span#summary-total\").text().replace(\/\\D\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",37],8,16],").closest(\"div.slider\").find(\"div.slider-label\").text().replace(\/\\s{2}\/ig,\"\").trim(),b=$(",["escape",["macro",37],8,16],").closest(\"div.slider\").find(\"div.slider-wrapper\").text().replace(\/\\s{2}\/ig,\"\");return a+\" \"+b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",37],8,16],").closest(\"li\");return a.find(\"label \\x3e p\").text()+a.find(\"label \\x3e span.pricing\").text()})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\"vimeo.com\/video\",b=document.getElementsByTagName(\"iframe\"),a;for(a=0;a\u003Cb.length;a++)if(-1\u003Cb[a].getAttribute(\"src\").indexOf(c))return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\"play.vidyard.com\",b=document.getElementsByTagName(\"iframe\"),a;for(a=0;a\u003Cb.length;a++)if(-1\u003Cb[a].getAttribute(\"src\").indexOf(c))return!0;return!1})();"]
    },{
      "function":"__t"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(document).height()\u003EjQuery(window).height()?\"true\":\"false\"})();"]
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",52],8,16],"?\"#\"+",["escape",["macro",52],8,16],":\"\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",27],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","dashboard","value","UA-2989055-26"],["map","key","devcenter","value","UA-2989055-24"],["map","key","toolbelt","value","UA-2989055-19"],["map","key","signup","value","UA-2989055-36"],["map","key","elements","value","UA-2989055-38"],["map","key","connect","value","UA-2989055-37"],["map","key","status","value","UA-2989055-22"],["map","key","jp","value","UA-39697570-44"]]
    },{
      "function":"__c",
      "vtp_value":"UA-2989055-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"virtualPath"
    },{
      "function":"__c",
      "vtp_value":"51b6483a434bba0f0c000016"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,e,f,b,c){if(d\u0026\u0026e){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";f\u0026\u0026(a=new Date,a.setTime(a.getTime()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+a+b+c}}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","\/home","value","\/"],["map","key","\/index.html","value","\/"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];a.push(\"utm_source\",\"utm_medium\",\"utm_campaign\",\"utm_content\",\"utm_term\",\"utm_keyword\",\"utm_id\",\"gclid\",\"dclid\",\"gclsrc\",\"q\");for(var l=[],f=0;f\u003Ca.length;f++)l.push(a[f].toLowerCase());var r=\"dl dp dr dt ec ea el uid cd\\\\d{1,3} pr\\\\d{1,3}cd\\\\d{1,3}\".split(\" \"),m=\"_ga_originalSendHitTask\",u=[{name:\"EMAIL\",regex:\/([^\u0026\\s\\\/\\?#=:]){1,}(@|%40).([^\u0026\\s\\\/\\?#]){1,}\/ig}];return function(g){window[m]=window[m]||g.get(\"sendHitTask\");var a=g.get(\"\\x26dl\");a=a.replace(\/\\.(html|jsp)\/gi,\"\");g.set(\"\\x26dl\",\na);g.set(\"sendHitTask\",function(a){var g=a,f=window[m],v=!0;try{for(var h=a.get(\"hitPayload\").split(\"\\x26\"),k=0;k\u003Ch.length;k++){var n=\"\",c=h[k].split(\"\\x3d\");try{var b=decodeURIComponent(decodeURIComponent(c[1]))}catch(w){b=decodeURIComponent(c[1])}for(var p=0;p\u003Cr.length;p++)if(null!=c[0].match(new RegExp(\"^(\"+r[p]+\")$\"))\u0026\u0026-1\u003Cb.indexOf(\"?\")){var d=b.toLowerCase().split(\"?\").splice(1).join(\"\\x26\").split(\"\\x26\"),e=[];for(pa=0;pa\u003Cd.length;pa++)-1\u003Cd[pa].indexOf(\"?\")\u0026\u0026e.push(d[pa].split(\"?\")[1]);d=d.concat(e);\nfor(e=0;e\u003Cd.length;e++){for(var t=!1,q=0;q\u003Cl.length;q++)if(0==d[e].toLowerCase().indexOf(l[q].toLowerCase()+\"\\x3d\")||0==d[e].indexOf(\"search_param\\x3d\")){n+=d[e]+\"\\x26\";t=!0;break}0==t\u0026\u0026(n+=d[e].split(\"\\x3d\")[0]+\"\\x3d[redacted]\\x26\")}\/\\?$\/ig.test(b)||\/%3F$\/ig.test(b)||\/\\? \/ig.test(b)||\/%3F%20\/ig.test(b)||(b=b.replace(\/\\?.*\/,\"?\"+n.replace(\/\u0026$\/,\"\")))}u.forEach(function(a){\/\\?$\/ig.test(c[1])||\/%3F$\/ig.test(c[1])||\/\\? \/ig.test(c[1])||\/%3F%20\/ig.test(c[1])||(b=b.replace(a.regex,\"[redacted]\"))});\/^(ec|el|ea)$\/ig.test(c[0])?\nc[1]=encodeURIComponent(b):c[1]=encodeURIComponent(b.replace(\/\\?$\/,\"\"));h[k]=c.join(\"\\x3d\")}a.set(\"hitPayload\",h.join(\"\\x26\"),!0);v\u0026\u0026f(a)}catch(w){f(g)}})}})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"herokustatus.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","5","dimension",["macro",13]],["map","index","8","dimension",["macro",14]],["map","index","9","dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":5
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",17],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",18],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",19],
      "vtp_eventLabel":["macro",20],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_eventValue":["macro",21],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_metric":["list",["map","index","2","metric",["macro",22]],["map","index","3","metric",["macro",23]],["map","index","4","metric",["macro",24]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","6","dimension",["macro",25]],["map","index","15","dimension",["macro",26]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","page","value",["macro",3]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","9","dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":7
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]],["map","index","4","dimension",["macro",13]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":30
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","page","value","\/virtual\/registration\/registered"],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","9","dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":34
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":35
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":40
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":41
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":42
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":43
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":44
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":45
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":46
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":47
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":49
    },{
      "function":"__cegg",
      "once_per_event":true,
      "vtp_usersNumericId":"00338119",
      "tag_id":57
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":65
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":66
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":68
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":75
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":77
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ErrorPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":["macro",31],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ErrorPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":["macro",31],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",17],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",18],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",19],
      "vtp_eventLabel":["macro",20],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",21],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_metric":["list",["map","index","4","metric",["macro",24]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","6","dimension",["macro",25]],["map","index","15","dimension",["macro",26]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":86
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","page","value",["macro",3]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":88
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","page","value","\/virtual\/registration\/registered"],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":90
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialActionTarget":["macro",32],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_socialAction":["macro",33],
      "vtp_enableLinkId":true,
      "vtp_socialNetwork":["macro",34],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":95
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",33],
      "vtp_enableLinkId":true,
      "vtp_socialActionTarget":["macro",32],
      "vtp_socialNetwork":["macro",34],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":96
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":97
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":98
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":102
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Submit",
      "vtp_eventLabel":["template","Keep me up to Date: Newsletter - ",["macro",36]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":103
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",38],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Re-subscribe",
      "vtp_eventLabel":"Newsletter Re-subscribe",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39697570-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":105
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":106
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":107
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"heroku.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","9","dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":109
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ErrorPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":["macro",31],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":110
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",17],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",18],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",19],
      "vtp_eventLabel":["macro",20],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",21],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":111
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":112
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",33],
      "vtp_enableLinkId":true,
      "vtp_socialActionTarget":["macro",32],
      "vtp_socialNetwork":["macro",34],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":113
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","page","value",["macro",3]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":114
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","page","value","\/virtual\/registration\/registered"],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":115
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"herokustatus.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","5","dimension",["macro",13]],["map","index","9","dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":116
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]],["map","index","4","dimension",["macro",13]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":117
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":124
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":125
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":126
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":127
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Internal Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Help Article",
      "vtp_eventLabel":["macro",38],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_metric":["list",["map","index","2","metric",["macro",22]],["map","index","3","metric",["macro",23]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":145
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Internal Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Help Article",
      "vtp_eventLabel":["macro",38],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":146
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventValue":["macro",44],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","4","metric",["macro",44]]],
      "vtp_eventAction":"Original | Estimate Summary Hover",
      "vtp_eventLabel":["macro",44],
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":153
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventValue":["macro",44],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","4","metric",["macro",44]]],
      "vtp_eventAction":"Original | Estimate Summary Hover",
      "vtp_eventLabel":["macro",44],
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":155
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",44],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Dynos Selection",
      "vtp_eventLabel":["macro",45],
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":156
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",44],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Dynos Selection",
      "vtp_eventLabel":["macro",45],
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":157
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",44],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Postgres Selection",
      "vtp_eventLabel":["macro",46],
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":158
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",44],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Postgres Selection",
      "vtp_eventLabel":["macro",46],
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":159
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",44],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Redis Selection",
      "vtp_eventLabel":["macro",46],
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":160
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",44],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Redis Selection",
      "vtp_eventLabel":["macro",46],
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":161
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",44],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Kafka Selection",
      "vtp_eventLabel":["macro",46],
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":162
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",44],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Kafka Selection",
      "vtp_eventLabel":["macro",46],
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"992316833",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"Y-wFCP-02wUQoZuW2QM",
      "vtp_rdp":true,
      "vtp_url":["macro",47],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":330
    },{
      "function":"__hl",
      "tag_id":360
    },{
      "function":"__hl",
      "tag_id":361
    },{
      "function":"__cl",
      "tag_id":362
    },{
      "function":"__cl",
      "tag_id":363
    },{
      "function":"__cl",
      "tag_id":364
    },{
      "function":"__hl",
      "tag_id":365
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"115433_259",
      "tag_id":366
    },{
      "function":"__cl",
      "tag_id":367
    },{
      "function":"__cl",
      "tag_id":368
    },{
      "function":"__cl",
      "tag_id":369
    },{
      "function":"__cl",
      "tag_id":370
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003EpiAId=\"37622\";piCId=\"30300\";(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=(\"https:\"==document.location.protocol?\"https:\/\/pi\":\"http:\/\/cdn\")+\".pardot.com\/pd.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript data-gtmsrc=\"\/\/pixel.mathtag.com\/event\/js?mt_id=687393\u0026amp;mt_adid=131453\u0026amp;v1=\u0026amp;v2=\u0026amp;v3=\u0026amp;s1=\u0026amp;s2=\u0026amp;s3=\u0026amp;skipsync=13\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){function f(a){var b=\/[?\u0026]?([^=]c)=([^\u0026]*)\/;a=b.exec(a)||[];return a=decodeURIComponent(a[2])}function g(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");return 2==a.length?a.pop().split(\";\").shift():void 0}function h(a,b){var c=new Date;c.setTime(c.getTime()+12096E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\";domain\\x3d.heroku.com;path\\x3d\/\"}var e=\"campaign\",d=g(e);\"undefined\"==typeof d\u0026\u0026(d=f(document.location.search),\"undefined\"!==d\u0026\u0026h(e,d))}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=function(a){a=new RegExp(\"[; ]\"+a+\"\\x3d([^\\\\s;]*)\");if(a=(\" \"+document.cookie).match(a))return unescape(a[1])};if(!d(\"jbfp\")){var c=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);document.cookie=\"jbfp\\x3d\"+(new Date).getTime()+\"-\"+c+\";domain\\x3dheroku.com;path\\x3d\/;max-age\\x3d31536000\"}var f=function(){var a=-9,b=\"undefined\"!==typeof window.performance?window.performance:!1,c=(b=b?\"undefined\"!==typeof b.timing?b.timing:!1:!1)?\"undefined\"!==\ntypeof b.loadEventEnd\u0026\u0026\"undefined\"!==b.navigationStart?!0:!1:!1;c\u0026\u0026(a=Math.ceil(b.loadEventEnd-b.navigationStart),0\u003Ea\u0026\u0026(a=-1));return a},g=function(){var a=!1,b=navigator.userAgent||navigator.vendor||window.opera;if(\/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino\/i.test(b)||\n\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i.test(b.substr(0,\n4)))a=!0;return a};c=function(){var a=!1,b=document.querySelectorAll(\"[data-uuid]\");0\u003Cb.length\u0026\u0026(a=b[0].getAttribute(\"data-uuid\"));return a};c=c();var h=document.referrer,e=d(\"jbfp\");d=d(\"heroku_session\");f=f();var k=g();g=document.createElement(\"img\");e=\"https:\/\/jambox.heroku.com\/e?url\\x3d\"+escape(document.location.href)+\"\\x26fp\\x3d\"+e+\"\\x26li\\x3d\"+d+\"\\x26dtls[page_load_timing]\\x3d\"+f+\"\\x26dtls[mobile_flag]\\x3d\"+k;h\u0026\u0026(e+=\"\\x26ref\\x3d\"+escape(h));c\u0026\u0026(e+=\"\\x26dtls[core_user_uuid]\\x3d\"+c);g.src=e})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(h){(function(c,e,g){e=c(e);var f={iframes:[],eventMarker:{},getIframeSrc:function(a){return c(a).attr(\"src\").split(\"?\")[0]},getIframeId:function(a){return c(a).attr(\"id\")},removeUndefinedIframes:function(a){var b=c(a).attr(\"id\");a=c(a).attr(\"src\");if(-1===a.indexOf(\"player_id\"))return!1;if(this.eventMarker[b])return!0;this.eventMarker[b]={progress25:!1,progress50:!1,progress75:!1,videoPlayed:!1,videoPaused:!1,videoResumed:!1,videoSeeking:!1,videoCompleted:!1,\ntimePercentComplete:0};return!0},init:function(){var a=c('iframe[src*\\x3d\"player.vimeo.com\/video\"]');this.iframes=c.grep(a,c.proxy(this.removeUndefinedIframes,this));c.each(this.iframes,c.proxy(this.handleOnReady,this))},onMessageReceived:function(a){if(\/^https?:\\\/\\\/player\\.vimeo\\.com\/.test(a.originalEvent.origin)){a=JSON.parse(a.originalEvent.data);var b=c(\"#\"+a.player_id)[0];switch(a.event){case \"playProgress\":this.onPlayProgress(a.data,b);break;case \"seek\":this.onSeek(b);break;case \"play\":this.onPlay(b);\nbreak;case \"pause\":this.onPause(b);break;case \"finish\":this.onFinish(b)}}},post:function(a,b,d){a=JSON.stringify({method:a,value:b});b=c(d).attr(\"src\").split(\"?\")[0];d.contentWindow.postMessage(a,b)},handleOnReady:function(a,b){this.post(\"addEventListener\",\"play\",b);this.post(\"addEventListener\",\"seek\",b);this.post(\"addEventListener\",\"pause\",b);this.post(\"addEventListener\",\"finish\",b);this.post(\"addEventListener\",\"playProgress\",b)},onFinish:function(a){var b=this.getIframeId(a);this.eventMarker[b].videoCompleted||\n(this.sendEvent(a,\"Completed video\"),this.eventMarker[b].videoCompleted=!0)},onSeek:function(a){var b=this.getIframeId(a);this.eventMarker[b].videoSeeking||(this.sendEvent(a,\"Skipped video forward or backward\"),this.eventMarker[b].videoSeeking=!0)},onPlay:function(a){var b=this.getIframeId(a);this.eventMarker[b].videoPlayed||(this.sendEvent(a,\"Started video\"),this.eventMarker[b].videoPlayed=!0);!this.eventMarker[b].videoResumed\u0026\u0026this.eventMarker[b].videoPaused\u0026\u0026(this.sendEvent(a,\"Resumed video\"),\nthis.eventMarker[b].videoResumed=!0)},onPause:function(a){var b=this.getIframeId(a);99\u003Ethis.eventMarker[b].timePercentComplete\u0026\u0026!this.eventMarker[b].videoPaused\u0026\u0026(this.sendEvent(a,\"Paused video\"),this.eventMarker[b].videoPaused=!0)},onPlayProgress:function(a,b){var d=this.getIframeId(b);this.eventMarker[d].timePercentComplete=Math.round(100*a.percent);if(24\u003Cthis.eventMarker[d].timePercentComplete\u0026\u0026!this.eventMarker[d].progress25){var c=\"Played video: 25%\";this.eventMarker[d].progress25=!0}49\u003Cthis.eventMarker[d].timePercentComplete\u0026\u0026\n!this.eventMarker[d].progress50\u0026\u0026(c=\"Played video: 50%\",this.eventMarker[d].progress50=!0);74\u003Cthis.eventMarker[d].timePercentComplete\u0026\u0026!this.eventMarker[d].progress75\u0026\u0026(c=\"Played video: 75%\",this.eventMarker[d].progress75=!0);c\u0026\u0026this.sendEvent(b,c)},sendEvent:function(a,b){var c=this.getIframeSrc(a);g.push({event:\"trackEvent\",eventCat:\"Vimeo\",eventAction:b,eventLabel:c,eventValue:void 0,eventInteraction:!1})}};f.init();e.on(\"message\",c.proxy(f.onMessageReceived,f))})(jQuery,window,window.dataLayer)});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(t){function u(a){var b=[0,25,50,75,90],m=b.slice(0),e=[0,0],g=0,h=!1,l=c.create();a.on(\"timeupdate\",function(b){var c=0;var f=Math.floor(b);if(!(h||\"object\"!=typeof a.metadata||f\u003C=e[1])){e[1]=b;b=l.insertOne(e);f=l;var d,k=null,n=[];for(d=0;d\u003Cf.length;++d)!k||k[1]\u003Cf[d][0]?(k\u0026\u0026n.push(k),k=[f[d][0],f[d][1]]):f[d][1]\u003Ek[1]\u0026\u0026(k[1]=f[d][1]);f=(k\u0026\u0026n.push(k),n);for(d=0;d\u003Cf.length;++d)c+=f[d][1]-f[d][0];(l.remove(b),c=c\/a.metadata.chapters_attributes[g].video_attributes.length_in_seconds*100,c\u003E=\nm[0])\u0026\u0026\"undefined\"!==typeof dataLayer\u0026\u0026\"function\"===typeof dataLayer.push\u0026\u0026dataLayer.push({event:\"trackEvent\",eventCat:\"Vidyard\",eventAction:\"Played video: \"+m.shift()+\"%\",eventLabel:a.metadata.chapters_attributes[g].video_attributes.name,eventValue:void 0,eventInteraction:!0})}});a.on(\"beforeSeek\",function(a){!1===h\u0026\u0026(e[1]=a.start);h=!0});a.on(\"play\",function(a){l.insertOne(e.slice(0));e[0]=a;e[1]=a;h=!1});a.on(\"chapterComplete\",function(){m=b.slice(0);g=a.getCurrentChapter();e=[0,0];l=c.create();\nh=!1})}var c=function(){this._compare=function(a,b){return a[0]\u003Cb[0]?-1:a[0]\u003Eb[0]?1:a[1]\u003Cb[1]?-1:a[1]\u003Eb[1]?1:0}};c.create=function(){return new c};c.prototype=[];c.prototype.constructor=Array.prototype.constructor;c.prototype.insertOne=function(a){var b=this.bsearch(a);return this.splice(b+1,0,a),b+1};c.prototype.remove=function(a){return this.splice(a,1),this};c.prototype.bsearch=function(a){if(!this.length)return-1;for(var b,c,e,g=0,h=this.length;1\u003Ch-g;){if(b=Math.floor((g+h)\/2),c=this[b],e=this._compare(a,\nc),0===e)return b;0\u003Ce?g=b:h=b}return 0===g\u0026\u00260\u003Cthis._compare(this[0],a)?-1:g};var q=!0;try{var p=new t.players}catch(a){throw Error(\"The Vidyard API must be loaded before this script can execute\");}for(var r in p)p.hasOwnProperty(r)\u0026\u0026(u(p[r]),q=!1);q\u0026\u0026console.warn(\"No Vidyard Players found. (include this script below player embed codes)\")}(Vidyard);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\".heroku-footer-social a\").each(function(b,c){if(-1!=this.href.toLowerCase().indexOf(\"heroku.com\/home\")){var a=this.textContent.toLowerCase().indexOf(\"english\")?\"Japanese Site\":\"English Site\";this.setAttribute(\"onclick\",\"dataLayer.push({'event': 'trackEvent', 'eventCat': 'Internal Links', 'eventAction': 'Change Language', 'eventLabel': 'Switch to \"+a+\"', 'eventValue': 0, 'eventInteraction': 0})\")}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar structDataTest=document.createElement(\"script\");structDataTest.type=\"application\/ld+json\";\nstructDataTest.text=JSON.stringify({\"@context\":\"http:\/\/schema.org\",\"@type\":\"Event\",name:\"Kafka Summit NYC\",description:\"The Heroku-sponsored Kafka Summit is the premier event for data architects, engineers, devops professionals, and developers who want to learn about streaming data. It brings the Apache Kafka community together to share best practices, write code and discuss the future of streaming technologies.\",startDate:\"2018-04-02\",location:{\"@type\":\"Place\",name:\"Kafka Summit NYC\",address:{\"@type\":\"PostalAddress\",\nstreetAddress:\"Pier 60 - Chelsea Piers\",addressLocality:\"New York\",postalCode:\"10011\",addressRegion:\"NY\",addressCountry:\"US\"}}});document.querySelector(\"head\").appendChild(structDataTest);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a=a||window.jQuery;if(\"undefined\"!==typeof window.jQuery.fn){window.dataLayer=window.dataLayer||[];window.Heroku=window.Heroku||{};window.Heroku.Trackable=window.Heroku.Trackable||function(){};var l=function(b,c){var d=JSON.stringify({category:c.category,action:c.action,label:c.label});a(b).attr(\"data-trackable\",d);a(b).attr(\"data-trackable-nav\",!0)},h;\"www.heroku.com\"===document.location.hostname\u0026\u0026(h=a(\"#navigation a\"));\"devcenter.heroku.com\"===document.location.hostname\u0026\u0026(h=a(\"#primary-header .main-nav a\"));\nfor(var k=0;k\u003Ch.length;k+=1){var f=[],g=h[k],b=a(g).parents(\".has-dropdown\"),d=g.innerHTML,e=a(g).hasClass(\"glostick__menu__item\")?!0:!1;-1===d.indexOf(\"\\x3c\")\u0026\u0026-1===d.indexOf(\"\\x3e\")\u0026\u0026f.push(d);for(d=0;d\u003Cb.length;d+=1){var c=a(b[d])[0];c=a(c).find(\"a\")[0].innerHTML;if(\"More\"===c){if(c=a(g).parents(\"ul\")[0],c=a(c).siblings(\".more-title\")[0],\"undefined\"!==typeof c){var n=a(\".nav-more\").is(\":visible\")||!a(\".nav-more\").is(\":hidden\");f.push(c.innerHTML);n\u0026\u0026f.push(\"More\")}}else-1===f.indexOf(c)\u0026\u0026-1===\nc.indexOf(\"\\x3c\")\u0026\u0026-1===c.indexOf(\"\\x3e\")\u0026\u0026f.push(c)}f.reverse();if(0\u003Cf.length){var m=0;d=function(){for(var a=\"\",b=0;b\u003Cf.length;b+=1)0\u003Cb\u0026\u0026(m+=1,a+=\" \\x3e \"),a+=f[b];return a}();b=e?\"Glostick Menu\":\"Top Navigation Menu\";e=e?\"Glostick Click\":\"Level \"+m;b={category:b,action:e,label:d};l(g,b)}}h=a(\"#heroku-footer a\");for(k=0;k\u003Ch.length;k+=1)g=h[k],b=a(g).parents(\".col\")[0],e=!1,\"undefined\"!==typeof a(b).find(\"h4\")[0]\u0026\u0026(e=a(b).find(\"h4\")[0].innerHTML,d=(e?e+\" \\x3e \":\"\")+g.innerHTML,b=\"Footer Navigation Menu\",\ne=\"Click\",b={category:b,action:e,label:d},l(g,b));a(\"[data-trackable-nav]\").each(function(b,c){return new Heroku.Trackable(a(c))})}})(window.jQuery);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a=a||window.jQuery;if(\"undefined\"!==typeof window.jQuery.fn){window.dataLayer=window.dataLayer||[];window.Heroku=window.Heroku||{};window.Heroku.Trackable=window.Heroku.Trackable||function(){};for(var k=function(c,b){var d=JSON.stringify({category:b.category,action:b.action,label:b.label});a(c).attr(\"data-trackable\",d);a(c).attr(\"data-trackable-df\",!0)},h=a(\".page-content a\"),f=0;f\u003Ch.length;f+=1){var c=h[f],d=a(c).parents(\".table-row\"),b=c.innerHTML,l=\"undefined\"!==typeof a(c).attr(\"href\")?\n-1\u003Ca(c).attr(\"href\").indexOf(\"heroku.com\")||0===a(c).attr(\"href\").indexOf(\"\/\")?\"Internal Links\":\"External Links\":\"Internal Links\";\"Go to Agenda Builder\"===b\u0026\u0026(b=\"Agenda Builder\");for(var g=0;g\u003Cd.length;g+=1){var e=a(d[g])[0];e=a(e).find(\"h3 a\")[0].innerHTML;e!==b\u0026\u0026(b+=\" \\x3e \"+e)}d={category:l,action:\"Click\",label:b};k(c,d)}a(\"[data-trackable-df]\").each(function(c,b){return new Heroku.Trackable(a(b))})}})(window.jQuery);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EEventNONInteraction=1;Frequency=10;GA_EventCategory=\"Page Interaction\";GA_EventAction=\"Scroll Down\";_frequency=Frequency;_repetition=100\/Frequency;var _scrollMatrix=[];for(ix=0;ix\u003C_repetition;ix++)_scrollMatrix[ix]=[_frequency,\"false\"],_frequency=Frequency+_frequency;function debounce(b,f,c){var a;return function(){var d=this,e=arguments,g=function(){a=null;c||b.apply(d,e)},h=c\u0026\u0026!a;clearTimeout(a);a=setTimeout(g,f);h\u0026\u0026b.apply(d,e)}}\nvar debouncedScrollFunction=debounce(function(){for(iz=0;iz\u003C_scrollMatrix.length;iz++)jQuery(window).scrollTop()+jQuery(window).height()\u003E=jQuery(document).height()*_scrollMatrix[iz][0]\/100\u0026\u0026\"false\"==_scrollMatrix[iz][1]\u0026\u0026(_scrollMatrix[iz][1]=\"true\",dataLayer.push({event:\"trackEvent\",eventCat:GA_EventCategory,eventAction:GA_EventAction,eventLabel:_scrollMatrix[iz][0]+\"%\",eventValue:0,nonInteraction:EventNONInteraction}))},250);jQuery(document).scroll(debouncedScrollFunction);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){$(\"div#summary \\x3e div.summary-wrapper\").mouseenter(function(){dataLayer.push({event:\"estimatedCostHover\"})})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){setTimeout(function(){dataLayer.push({event:\"kafkaRadioClick\"})},50)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){setTimeout(function(){dataLayer.push({event:\"redisRadioClick\"})},50)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":167
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){setTimeout(function(){dataLayer.push({event:\"postgresRadioClick\"})},50)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":168
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){setTimeout(function(){dataLayer.push({event:\"dynosClick\"})},50)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function f(d){var b=new XMLHttpRequest;b.timeout=3E3;b.onreadystatechange=function(){if(4==this.readyState\u0026\u0026200==this.status\u0026\u0026\"\"!==b.responseText){var a=JSON.parse(b.responseText);if(\"string\"===typeof a.exp\u0026\u0026(a=a.exp)\u0026\u0026\"undefined\"!==typeof $\u0026\u0026\"undefined\"!==typeof jQuery)if(\"generic\"===a||\"business\"===a||\"security\"===a){var c=$(\"#\"+a+\"-banner\");1===c.length\u0026\u0026(c.attr(\"data-doppler-content\",a+\" add ons\"),c.attr(\"data-doppler-segment\",a),c.attr(\"data-doppler-type\",\"onboarding banner\"),c.attr(\"data-doppler-content-click\",\n\"\"),c.slideToggle())}else\"control\"===a\u0026\u0026(a=$(\"#generic-banner\"),1===a.length\u0026\u0026(a=document.createElement(\"div\"),a.setAttribute(\"data-doppler-content\",\"control flag\"),a.setAttribute(\"data-doppler-segment\",\"control\"),a.setAttribute(\"data-doppler-type\",\"onboarding banner\"),a.style.display=\"none\",$(\"body\").append(a)))}};b.open(\"GET\",\"https:\/\/\"+g+\"\/aobt?tid\\x3d\"+d,!0);b.send()}var g=\"elements.heroku.com\"===document.location.hostname?\"booster.heroku.com\":\"martech-booster-apis-staging.herokuapp.com\",e=document.querySelectorAll(\"[data-uuid]\")[0]||\n!1,d=!1;e\u0026\u0026(d=e.getAttribute(\"data-uuid\"));d\u0026\u0026f(d)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":343
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function g(c,e,b){window.dataLayer.push({event:\"trackEvent\",eventCat:c,eventAction:e,eventLabel:b})}function f(c){var e=window.localStorage.getItem(\"t_d\"),b=[];\"string\"===typeof e\u0026\u0026(b=e.split(\",\"));-1===b.indexOf(c)\u0026\u0026b.push(c);window.localStorage.setItem(\"t_d\",b.toString())}function n(){var c=768,e=parseFloat(getComputedStyle(document.body,null).width.replace(\"px\",\"\"));if(!(e\u003Cc)){var b=new XMLHttpRequest;b.timeout=3E3;b.onreadystatechange=function(){if(4==this.readyState\u0026\u0026200==this.status\u0026\u0026\n\"\"!==b.responseText){var a=JSON.parse(b.responseText);if(\"1\"===a.i.toString())if(window._whichWidget=\"verification-messaging\",a=window.localStorage.getItem(\"t_g\"),\"string\"!==typeof a\u0026\u0026(a=2,a=Math.floor(1E3*Math.random())%a,window.localStorage.setItem(\"t_g\",a.toString())),a=a.toString(),\"1\"===a){a=window._whichWidget;var d=window.localStorage.getItem(\"t_d\"),k=[];\"string\"===typeof d\u0026\u0026(k=d.split(\",\"));a=-1\u003Ck.indexOf(a)?!1:!0;a\u0026\u0026window.martechMessagingWidget({id:window._whichWidget,title:\"Add custom domain names to your apps\",\ntext:\"Make your apps easier to find by adding your own URLs to them at no extra cost.\",primaryCta:\"Learn More\",primaryCtaUrl:\"https:\/\/devcenter.heroku.com\/articles\/account-verification\",segment:\"test\",image:\"info\"})}else f(window._whichWidget),a=\"widget\",d=document.createElement(\"div\"),d.setAttribute(\"data-doppler-segment\",\"control\"),d.setAttribute(\"data-doppler-content\",window._whichWidget),d.setAttribute(\"data-doppler-type\",a),d.style.display=\"none\",document.body.appendChild(d)}};b.open(\"GET\",\"https:\/\/\"+\nl+\"\/c\",!0);b.send()}}function m(){\"function\"===typeof window.martechMessagingWidget?n():setTimeout(function(){m()},250)}var l=\"www.heroku.com\"===document.location.hostname?\"booster.heroku.com\":\"martech-booster-apis-staging.herokuapp.com\";window.dataLayer=window.dataLayer||[];window._whichWidget=null;document.addEventListener(\"click\",function(c){c.target.matches(\"#mt-engage-widget-primary\")\u0026\u0026(f(window._whichWidget),g(\"Widget\",window._whichWidget,\"CTA Clicked\"));c.target.matches(\"#mt-engage-widget-secondary\")\u0026\u0026\n(f(window._whichWidget),g(\"Widget\",window._whichWidget,\"Secondary Link Clicked\"));if(c.target.matches(\"#mt-engage-widget-dismiss\")||c.path[1].matches(\"#mt-engage-widget-dismiss\"))f(window._whichWidget),g(\"Widget\",window._whichWidget,\"Dismiss Clicked\")});var h=document.createElement(\"script\");h.type=\"text\/javascript\";h.src=\"https:\/\/\"+l+\"\/widget.js\";document.getElementsByTagName(\"body\")[0].appendChild(h);m()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":358
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function g(c,e,b){window.dataLayer.push({event:\"trackEvent\",eventCat:c,eventAction:e,eventLabel:b})}function f(c){var e=window.localStorage.getItem(\"t_d\"),b=[];\"string\"===typeof e\u0026\u0026(b=e.split(\",\"));-1===b.indexOf(c)\u0026\u0026b.push(c);window.localStorage.setItem(\"t_d\",b.toString())}function n(){var c=768,e=parseFloat(getComputedStyle(document.body,null).width.replace(\"px\",\"\"));if(!(e\u003Cc)){var b=new XMLHttpRequest;b.timeout=3E3;b.onreadystatechange=function(){if(4==this.readyState\u0026\u0026200==this.status\u0026\u0026\n\"\"!==b.responseText){var a=JSON.parse(b.responseText);if(\"1\"===a.i.toString())if(window._whichWidget=\"verification-messaging\",a=window.localStorage.getItem(\"t_g\"),\"string\"!==typeof a\u0026\u0026(a=2,a=Math.floor(1E3*Math.random())%a,window.localStorage.setItem(\"t_g\",a.toString())),a=a.toString(),\"1\"===a){a=window._whichWidget;var d=window.localStorage.getItem(\"t_d\"),k=[];\"string\"===typeof d\u0026\u0026(k=d.split(\",\"));a=-1\u003Ck.indexOf(a)?!1:!0;a\u0026\u0026window.martechMessagingWidget({id:window._whichWidget,title:\"Add custom domain names to your apps\",\ntext:\"Make your apps easier to find by adding your own URLs to them at no extra cost.\",primaryCta:\"Learn More\",primaryCtaUrl:\"https:\/\/devcenter.heroku.com\/articles\/account-verification\",segment:\"test\",image:\"info\"})}else f(window._whichWidget),a=\"widget\",d=document.createElement(\"div\"),d.setAttribute(\"data-doppler-segment\",\"control\"),d.setAttribute(\"data-doppler-content\",window._whichWidget),d.setAttribute(\"data-doppler-type\",a),d.style.display=\"none\",document.body.appendChild(d)}};b.open(\"GET\",\"https:\/\/\"+\nl+\"\/c\",!0);b.send()}}function m(){\"function\"===typeof window.martechMessagingWidget?n():setTimeout(function(){m()},250)}var l=\"www.heroku.com\"===document.location.hostname?\"booster.heroku.com\":\"martech-booster-apis-staging.herokuapp.com\";window.dataLayer=window.dataLayer||[];window._whichWidget=null;document.addEventListener(\"click\",function(c){c.target.matches(\"#mt-engage-widget-primary\")\u0026\u0026(f(window._whichWidget),g(\"Widget\",window._whichWidget,\"CTA Clicked\"));c.target.matches(\"#mt-engage-widget-secondary\")\u0026\u0026\n(f(window._whichWidget),g(\"Widget\",window._whichWidget,\"Secondary Link Clicked\"));if(c.target.matches(\"#mt-engage-widget-dismiss\")||c.path[1].matches(\"#mt-engage-widget-dismiss\"))f(window._whichWidget),g(\"Widget\",window._whichWidget,\"Dismiss Clicked\")});var h=document.createElement(\"script\");h.type=\"text\/javascript\";h.src=\"https:\/\/\"+l+\"\/widget.js\";document.getElementsByTagName(\"body\")[0].appendChild(h);m()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":359
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"\/articles\/getting-started-.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"herokustatus\\.com|status\\.heroku\\.com"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/signup.heroku.com\/account\/accept\/ok"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"^\/search\\?"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"trackEvent"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"trackPageview"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"www.heroku.com"
    },{
      "function":"_sw",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/pricing"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"www\\.heroku\\.com(\\\/$|\\\/home)",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",6],
      "arg1":"https:\/\/signup.heroku.com"
    },{
      "function":"_gt",
      "arg0":["macro",29],
      "arg1":"0"
    },{
      "function":"_sw",
      "arg0":["macro",6],
      "arg1":"https:\/\/devcenter.heroku.com\/start"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/signup.heroku.com\/account"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/connect"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/thanks"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"blog.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"elements.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"devcenter.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/signup.heroku.com\/java"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"signup.heroku.com"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"signup.heroku.com\/account\/accept\/|signup.heroku.com\/confirm"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/signup.heroku.com\/account\/accept"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"(\\d+\\sError|^Page not found)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"trackSocial"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"NotLoggedIn"
    },{
      "function":"_cn",
      "arg0":["macro",35],
      "arg1":"Keep Me Up to Date"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"hello\\.heroku\\.com\\\/keepmeuptodate",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"hello.heroku.com\/unsubscribe"
    },{
      "function":"_cn",
      "arg0":["macro",35],
      "arg1":"Re-subscribe"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"hello\\.heroku\\.com\\\/unsubscribe",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"herokustatus.com"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"popstate"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"heroku.com"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"help\\.heroku\\.com\\\/((PKEZDG48\\\/how\\-do\\-i\\-close\\-my\\-team\\-account)|(R2NSPPFU\\\/how\\-do\\-i\\-close\\-my\\-personal\\-account)|(KXT7TVJG\\\/why\\-do\\-i\\-see\\-unpaid\\-invoices\\-when\\-trying\\-to\\-close\\-my\\-account))",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":"(^$|((^|,)115433_259($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/pricing"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"estimatedCostHover"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"dynosClick"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"postgresRadioClick"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"redisRadioClick"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"kafkaRadioClick"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"dashboard.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"redis.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"postgres.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"dataclips.heroku.com"
    },{
      "function":"_sw",
      "arg0":["macro",6],
      "arg1":"https:\/\/signup.heroku.com\/nodese"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"id.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"engineering.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"toolbelt.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"partners.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"kafka-summit-nyc-2019"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"www.heroku.com\/dreamforce"
    },{
      "function":"_eq",
      "arg0":["macro",51],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"www\\.heroku\\.com(\\\/$|\\\/home|\\\/pricing)",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",37],
      "arg1":"li.kafka-tier-item input"
    },{
      "function":"_css",
      "arg0":["macro",37],
      "arg1":"li.redis-tier-item input"
    },{
      "function":"_css",
      "arg0":["macro",37],
      "arg1":"li.postgres-tier-item input"
    },{
      "function":"_css",
      "arg0":["macro",37],
      "arg1":"[id^=\"slider-dyno\"] \u003E div.slider-wrapper div.background"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"elements\\.heroku\\.com|elements-staging\\.heroku\\.com|elements-noe-elements-b-7dz3xj\\.herokuapp\\.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"\/"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/home"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/free"
    }],
  "rules":[
    [["if",0,1,2],["add",0,36]],
    [["if",3],["add",0,73]],
    [["if",8],["add",1]],
    [["if",9],["add",2]],
    [["if",3],["unless",10],["add",3]],
    [["if",0,1,2],["unless",10],["add",3]],
    [["if",3,5],["add",4,18],["block",0,3,20,28,29,30,34,39,43,44,73,75]],
    [["if",3,11],["add",5,15,20,28,30,34,75,76,81]],
    [["if",3,12],["add",6]],
    [["if",3,13],["add",7,75]],
    [["if",3,14,15],["add",8,13,47]],
    [["if",3,16],["add",9]],
    [["if",3,17],["add",10,11,12,35,45,46,48,61],["block",20]],
    [["if",3,18],["add",14]],
    [["if",3,19],["add",14]],
    [["if",3,20],["add",15,17,28,30,34,75,76]],
    [["if",3,21],["add",15,28,30,34,76]],
    [["if",3,22],["add",16,20,28,30,34,75,76,81]],
    [["if",7,23],["add",19]],
    [["if",3,24],["add",20,28,30,34,75]],
    [["if",7,27],["add",21]],
    [["if",7,27],["unless",10],["add",22]],
    [["if",8],["unless",10],["add",23]],
    [["if",9],["unless",10],["add",24]],
    [["if",5,7],["unless",10],["add",25]],
    [["if",28],["add",26]],
    [["if",28],["unless",10],["add",27]],
    [["if",3,29],["add",29]],
    [["if",30,31,32],["add",31]],
    [["if",32,33],["add",32]],
    [["if",32,34,35],["add",33]],
    [["if",3,4],["add",36,76],["block",0,43,44]],
    [["if",7,27,36],["add",37]],
    [["if",8,36],["add",38]],
    [["if",0,1,2,36,37],["add",39]],
    [["if",7,36],["add",39]],
    [["if",28,36],["add",40]],
    [["if",9,36],["add",41]],
    [["if",5,7,36],["add",42]],
    [["if",3,6],["add",43,44]],
    [["if",38,39,40,41],["add",49,50]],
    [["if",42,43,44],["add",51,52]],
    [["if",45],["add",53,54]],
    [["if",46],["add",55,56]],
    [["if",47],["add",57,58]],
    [["if",48],["add",59,60]],
    [["if",7],["add",62,63,64,65,66,67,68,69,70,71,72]],
    [["if",7,53],["add",74]],
    [["if",7,54],["add",75]],
    [["if",3,55],["add",75,76]],
    [["if",3,56],["add",76]],
    [["if",3,57],["add",76]],
    [["if",7,58],["add",77]],
    [["if",59,60],["add",78]],
    [["if",60],["add",79]],
    [["if",7,61],["add",80]],
    [["if",3,62],["add",82]],
    [["if",60,63,64],["add",83]],
    [["if",42,43,60],["add",84]],
    [["if",32,42,43,65],["add",85]],
    [["if",32,42,43,66],["add",86]],
    [["if",32,42,43,67],["add",87]],
    [["if",32,42,43,68],["add",88]],
    [["if",3,69,70],["add",89]],
    [["if",3,71],["add",90]],
    [["if",3,72],["add",90]],
    [["if",3,73],["add",91]],
    [["if",6,7],["block",0,3]],
    [["if",3,25],["unless",5,26],["block",20,73,75]],
    [["if",3,49],["block",73]],
    [["if",7,50],["block",73]],
    [["if",3,51],["block",73]],
    [["if",3,52],["block",73]],
    [["if",54,60],["block",79]]]
},
"runtime":[[50,"__cegg",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","getTimestamp"]],[52,"d",["require","makeInteger"]],[52,"e",["require","setInWindow"]],[52,"f",[17,[15,"a"],"usersNumericId"]],[22,[28,[15,"f"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[22,[17,[15,"a"],"snapshotName"],[46,["e","CE_SNAPSHOT_NAME",[17,[15,"a"],"snapshotName"],true]]],[41,"g"],[3,"g",[2,[15,"f"],"toString",[7]]],[42,[23,[17,[15,"g"],"length"],8],[46],false,[46,[3,"g",[0,"0",[15,"g"]]]]],[52,"h",[2,[15,"g"],"match",[7,"(\\d+)(\\d{4})$"]]],[22,[28,[15,"h"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[52,"i",[0,[0,[0,[0,[0,[0,"https://script.crazyegg.com/pages/scripts/",[16,[15,"h"],1]],"/"],[16,[15,"h"],2]],".js"],"?"],["d",[10,["c"],3600000]]]],["b",[15,"i"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],[2,[15,"f"],"toString",[7]]]]]
,"permissions":{"__cegg":{"access_globals":{"keys":[{"key":"CE_SNAPSHOT_NAME","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/script.crazyegg.com\/pages\/scripts\/*"]}}}

,"security_groups":{
"nonGoogleScripts":["__cegg"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={Vf:!0},ja={};try{ja.__proto__=fa;ea=ja.Vf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=da,la=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var qa=function(a,b){this.a=a;this.i=b};var ra=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},sa=function(){this.s={};this.m=!1;this.D={}};sa.prototype.get=function(a){return this.s["dust."+a]};sa.prototype.set=function(a,b){this.m||(a="dust."+a,this.D.hasOwnProperty(a)||(this.s[a]=b))};sa.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.s)a.s.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new sa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ra(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ba=h.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"==a){if(!ra(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else ra(a)?this.a[Number(a)]=b:this.i.set(a,b)};ba.get=function(a){return"length"==a?this.length():ra(a)?this.a[Number(a)]:this.i.get(a)};ba.length=function(){return this.a.length};ba.cc=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ua=function(a,b){if(ra(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.D.hasOwnProperty(d)||delete c.s[d]}};ba=h.prototype;ba.pop=function(){return this.a.pop()};ba.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.a.shift()};ba.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};ba.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ba.has=function(a){return ra(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var wa=function(){function a(f,g){if(b[f]){if(b[f].Wb+g>b[f].max)throw Error("Quota exceeded");b[f].Wb+=g}}var b={},c=void 0,d=void 0,e={lh:function(f){c=f},xe:function(){c&&a(c,1)},nh:function(f){d=f},Ca:function(f){d&&a(d,f)},Jh:function(f,g){b[f]=b[f]||{Wb:0};b[f].max=g},Mg:function(f){return b[f]&&b[f].Wb||0},reset:function(){b={}},ug:a};e.onFnConsume=e.lh;e.consumeFn=e.xe;e.onStorageConsume=e.nh;e.consumeStorage=e.Ca;e.setMax=e.Jh;e.getConsumed=e.Mg;e.reset=e.reset;e.consume=e.ug;return e};var xa=function(a,b){this.D=a;this.M=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new sa;this.a=this.s=void 0};xa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.m)if(a.D.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.D["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.D.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var za=function(a){var b=new xa(a.D,a);a.s&&(b.s=a.s);b.M=a.M;b.a=a.a;return b};var Aa=function(){},Ba=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ca=function(a){return"number"==typeof a&&!isNaN(a)},Ea=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Fa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ga=function(a,b){if(a&&Ea(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ha=function(a,b){if(!Ca(a)||
!Ca(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ja=function(a,b){for(var c=new Ia,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ka=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},La=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ma=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Pa=function(a){var b=[];if(Ea(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ia=function(){this.prefix="gtm.";this.values={}};Ia.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ia.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Wa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Xa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ya=function(a){for(var b=B,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Za=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},ab=function(a){var b=[];Ka(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var bb=function(a,b){sa.call(this);this.a=a;this.M=b};la(bb,sa);bb.prototype.toString=function(){return this.a};bb.prototype.cc=function(){return new h(ta(this))};bb.prototype.i=function(a,b){a.D.xe();return this.M.apply(cb(this,a),Array.prototype.slice.call(arguments,1))};var cb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ea(d)?db(e,d):d};c.prototype.D=function(d){return eb(this.m,d)};c.prototype.s=function(){return b.D};return new c(a,b)};
bb.prototype.Fa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var eb=function(a,b){for(var c,d=0;d<b.length&&!(c=db(a,b[d]),c instanceof qa);d++);return c},db=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof bb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var fb=function(){sa.call(this)};la(fb,sa);fb.prototype.cc=function(){return new h(ta(this))};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},jb=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},D=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=D(e,c[d])):jb(e)?(jb(c[d])||(c[d]={}),c[d]=D(e,c[d])):c[d]=e}return c};var lb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=Fa(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.cc(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof fb){var q={};c.push(g);d.push(q);e(g,q);return q}if(g instanceof bb){var t=function(){for(var r=Array.prototype.slice.call(arguments,0),u=0;u<r.length;u++)r[u]=kb(r[u],b);var v=b?b.D:wa(),w=new xa(v);b&&
(w.a=b.a);return f(g.i.apply(g,[w].concat(r)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},kb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=Fa(c,g);if(-1<k)return d[k];if(Ea(g)||La(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(jb(g)){var n=
new fb;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var q=new bb("",function(r){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=lb(this.a(u[v]),b);return f((0,this.m.M)(g,g,u))});c.push(g);d.push(q);e(g,q);return q}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var mb={control:function(a,b){return new qa(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.s().Ca(a.length+f.length);return new bb(a,function(){return function(g){var k=za(d);void 0===k.a&&(k.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof qa)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?k.add(e.get(q),l[q]):k.add(e.get(q),void 0);k.add("arguments",new h(l));var t=eb(k,f);if(t instanceof qa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.s();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.s(),c=new fb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};var nb=function(){this.m=wa();this.a=new xa(this.m)},qb=function(a,b,c){var d=new bb(b,c);d.m=!0;a.a.set(b,d)};nb.prototype.ac=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};nb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=db(this.a,arguments[c]);return b};nb.prototype.s=function(a,b){var c=za(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=db(c,arguments[e]);return d};var rb=function(a){if(a instanceof rb)return a;this.Bb=a};rb.prototype.toString=function(){return String(this.Bb)};var sb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var tb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=sb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=sb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var ub="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),vb=new qa("break"),wb=new qa("continue"),xb=function(a,b){return this.a(a)+this.a(b)},yb=function(a,b){return this.a(a)&&this.a(b)},Ab=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Fa(ub,b)){var d=a[b].apply(a,sb(c)),e=kb(d,this.m);return void 0===e&&void 0!==d?new rb(d):e}throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var f=a.get(b);if(f instanceof bb){var g=sb(c);g.unshift(this.m);return f.i.apply(f,g)}throw Error("TypeError: "+b+" is not a function");}if(0<=
Fa(tb.supportedMethods,b)){var k=sb(c);k.unshift(this.m);return tb[b].apply(a,k)}}if(a instanceof bb||a instanceof fb){if(a.has(b)){var l=a.get(b);if(l instanceof bb){var m=sb(c);m.unshift(this.m);return l.i.apply(l,m)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof bb?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,sb(c))}if(a instanceof rb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Bb=function(a,
b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Cb=function(a){var b=za(this.m),c=eb(b,Array.prototype.slice.apply(arguments));if(c instanceof qa)return c},Db=function(){return vb},Eb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof qa)return d}},Fb=function(a){for(var b=this.m,c=0;c<arguments.length-
1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Gb=function(){return wb},Hb=function(a,b,c){var d=new h;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Ib=function(a,b){return this.a(a)/this.a(b)},Jb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof rb,d=b instanceof rb;return c||d?c&&d?a.Bb==b.Bb:!1:a==b},Kb=function(a){for(var b,c=
0;c<arguments.length;c++)b=this.a(arguments[c]);return b};function Lb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=eb(e,c);if(f instanceof qa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof fb||b instanceof h||b instanceof bb)for(var g=b.cc(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=eb(m,c);if(n instanceof qa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Mb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Lb(function(e){d.set(a,e);return d},b,c)},Nb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Lb(function(e){var f=za(d);ya(f,a,e,!0);return f},b,c)},Ob=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Lb(function(e){var f=za(d);f.add(a,e);return f},b,c)},Pb=function(a){return this.m.get(this.a(a))},Qb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");if(a instanceof fb||a instanceof h||a instanceof bb)c=a.get(b);else if("string"==typeof a)"length"==b?c=a.length:ra(b)&&(c=a[b]);else if(a instanceof rb)return;return c},Rb=function(a,b){return this.a(a)>this.a(b)},Tb=function(a,b){return this.a(a)>=this.a(b)},Ub=function(a,b){a=this.a(a);b=this.a(b);a instanceof rb&&(a=a.Bb);b instanceof rb&&(b=b.Bb);return a===b},Vb=function(a,b){return!Ub.call(this,a,b)},Wb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.D(d);
if(e instanceof qa)return e},Xb=function(a,b){return this.a(a)<this.a(b)},Yb=function(a,b){return this.a(a)<=this.a(b)},Zb=function(a,b){return this.a(a)%this.a(b)},$b=function(a,b){return this.a(a)*this.a(b)},ac=function(a){return-this.a(a)},cc=function(a){return!this.a(a)},dc=function(a,b){return!Jb.call(this,a,b)},ec=function(){return null},fc=function(a,b){return this.a(a)||this.a(b)},gc=function(a,b){var c=this.a(a);this.a(b);return c},hc=function(a){return this.a(a)},ic=function(a){return Array.prototype.slice.apply(arguments)},
jc=function(a){return new qa("return",this.a(a))},kc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof bb||a instanceof h||a instanceof fb)&&a.set(b,c);return c},lc=function(a,b){return this.a(a)-this.a(b)},mc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ea(d)||!Ea(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),
f instanceof qa){var l=f.a;if("break"==l)return;if("return"==l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof qa&&("return"==f.a||"continue"==f.a)))return f},nc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},oc=function(a){a=this.a(a);return a instanceof bb?"function":typeof a},pc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},qc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&
(e=this.D(f),e instanceof qa)){if("break"==e.a)return;if("return"==e.a)return e}for(;this.a(a);){e=this.D(f);if(e instanceof qa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},rc=function(a){return~Number(this.a(a))},sc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},tc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))&Number(this.a(b))},wc=function(a,b){return Number(this.a(a))^
Number(this.a(b))},xc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var zc=function(){this.a=new nb;yc(this)};zc.prototype.ac=function(a){return Ac(this.a.i(a))};
var Cc=function(a,b){return Ac(Bc.a.s(a,b))},yc=function(a){var b=function(d,e){var f=a.a,g=String(e);mb.hasOwnProperty(d)&&qb(f,g||d,mb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){qb(a.a,String(d),e)};c(0,xb);c(1,yb);c(2,Ab);c(3,Bb);c(53,Cb);c(4,Db);c(5,Eb);c(52,Fb);c(6,Gb);c(9,Eb);c(50,Hb);c(10,Ib);c(12,Jb);c(13,Kb);c(47,Mb);c(54,Nb);c(55,Ob);c(15,Pb);c(16,Qb);c(17,Qb);c(18,Rb);c(19,Tb);c(20,Ub);c(21,Vb);c(22,Wb);c(23,Xb);c(24,Yb);c(25,Zb);c(26,$b);
c(27,ac);c(28,cc);c(29,dc);c(45,ec);c(30,fc);c(32,gc);c(33,gc);c(34,hc);c(35,hc);c(46,ic);c(36,jc);c(43,kc);c(37,lc);c(38,mc);c(39,nc);c(40,oc);c(41,pc);c(42,qc);c(58,rc);c(57,sc);c(60,tc);c(61,uc);c(56,vc);c(62,wc);c(59,xc)},Ec=function(){var a=Bc,b=Dc();qb(a.a,"require",b)},Fc=function(a,b){a.a.a.M=b};function Ac(a){if(a instanceof qa||a instanceof bb||a instanceof h||a instanceof fb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Gc=[],Hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ic=function(a){return Hc[a]},Jc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Nc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Oc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Pc=function(a){return Oc[a]};
Gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Nc,Pc)+"'"}};var Yc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Zc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},$c=function(a){return Zc[a]};Gc[16]=function(a){return a};var bd;
var cd=[],dd=[],ed=[],fd=[],gd=[],hd={},id,jd,kd,ld=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},md=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=hd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):bd(c,e,b)},od=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=nd(a[e],b,c));
return d},pd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=hd[b];return c?c.priorityOverride||0:0},nd=function(a,b,c){if(Ea(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(nd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=cd[f];if(!g||b.gd(g))return;c[f]=!0;try{var k=od(g,b,c);k.vtp_gtmEventId=b.id;d=md(k,b);kd&&(d=kd.wg(d,k))}catch(y){b.Qe&&b.Qe(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[nd(a[l],b,c)]=nd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=nd(a[n],b,c);jd&&(m=m||q===jd.Pb);d.push(q)}return jd&&m?jd.zg(d):d.join("");case "escape":d=nd(a[1],b,c);if(jd&&Ea(a[1])&&"macro"===a[1][0]&&jd.Yg(a))return jd.sh(d);d=String(d);for(var t=2;t<a.length;t++)Gc[a[t]]&&(d=Gc[a[t]](d));return d;case "tag":var r=a[1];if(!fd[r])throw Error("Unable to resolve tag reference "+r+".");return d={Ce:a[2],
index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=qd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},qd=function(a,b,c){try{return id(od(a,b,c))}catch(d){JSON.stringify(a)}return 2};var rd=function(){var a=function(b){return{toString:function(){return b}}};return{Md:a("convert_case_to"),Nd:a("convert_false_to"),Od:a("convert_null_to"),Pd:a("convert_true_to"),Qd:a("convert_undefined_to"),bi:a("debug_mode_metadata"),Ka:a("function"),vf:a("instance_name"),zf:a("live_only"),Bf:a("malware_disabled"),Cf:a("metadata"),ci:a("original_vendor_template_id"),Gf:a("once_per_event"),Vd:a("once_per_load"),ce:a("setup_tags"),ee:a("tag_id"),fe:a("teardown_tags")}}();var sd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(sd,Error);function td(a,b){if(Ea(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)td(a[c],b[c])}};var ud=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(ud,Error);var vd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var xd=function(){return function(a,b){a instanceof ud||(a=new ud(a,wd));b&&a.a.push(b);throw a;}};function wd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ca(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var yd=null,Bd=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];yd=zd(a);for(var e=0;e<dd.length;e++){var f=dd[e],g=Ad(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<fd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Ad=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=yd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=yd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},zd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=qd(ed[c],a));return b[c]}};var Cd={wg:function(a,b){b[rd.Md]&&"string"===typeof a&&(a=1==b[rd.Md]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(rd.Od)&&null===a&&(a=b[rd.Od]);b.hasOwnProperty(rd.Qd)&&void 0===a&&(a=b[rd.Qd]);b.hasOwnProperty(rd.Pd)&&!0===a&&(a=b[rd.Pd]);b.hasOwnProperty(rd.Nd)&&!1===a&&(a=b[rd.Nd]);return a}};var Dd=function(){this.a={}};function Ed(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new sd(c,d,g);}}function Fd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Ed(e,b,d,g);Ed(f,b,d,g)}}}};var Jd=function(a){var b=Gd.B,c=this;this.i=new Dd;this.a={};var d={},e=Fd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ka(a,function(f,g){var k={};Ka(g,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},Md=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=ld(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return md(c)}catch(d){return{assert:function(e){throw new sd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new sd(a,b,c)};var Nd=!1;var Od={};Od.Sh=Oa('');Od.Fg=Oa('');var Pd=Nd,Qd=Od.Fg,Rd=Od.Sh;
var ee=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},fe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;ee(b,"/*")&&(b=b.slice(0,-2));ee(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},ge=/^[a-z0-9-]+$/i,he=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ie=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ge.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!he.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),t;var r=l.hostname,u=q;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:r.length===u.length?!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=fe(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var le=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,me={Fn:"function",Map:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=le.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof bb?n="Fn":l instanceof h?n="List":l instanceof fb&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(me[k]||k)+".");}}};function ne(a){return""+a}
function oe(a,b){var c=[];return c};var pe=function(a,b){var c=new bb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},qe=function(a,b){var c=new fb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ba(e)?c.set(d,pe(a+"_"+d,e)):(Ca(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var re=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new fb;return d=qe("AssertApiSubject",c)};var se=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new fb;return d=qe("AssertThatSubject",c)};function te(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(lb(arguments[d],c));return kb(a.apply(null,b))}}var ve=function(){for(var a=Math,b=ue,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=te(a[e].bind(a)))}return c};var we=function(a){var b;return b};var xe=function(a){var b;return b};var ye=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var ze=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Ae=function(a){F(this.i.a,["message:?string"],arguments);};var Be=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return Ha(a,b)};var Ce=function(){return(new Date).getTime()};var De=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.hg.apply(null,Array.prototype.slice.call(arguments,1))};var Ee=function(){De(this,"read_container_data");var a=new fb;a.set("containerId",'GTM-JD26');a.set("version",'337');a.set("environmentName",'');a.set("debugMode",Pd);a.set("previewMode",Rd);a.set("environmentMode",Qd);a.m=!0;return a};var Fe=function(a){return null===a?"null":a instanceof h?"array":a instanceof bb?"function":typeof a};var Ge=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Pd||Rd)&&a.call(this,e.message)}}}return{parse:b(function(c){return kb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(lb(c))})}};var He=function(a){return Ma(lb(a,this.m))};var Ie=function(a){return Number(lb(a,this.m))};var Je=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ke=function(a,b,c){var d=null,e=!1;return e?d:null};var ue="floor ceil round max min abs pow sqrt".split(" ");var Le=function(){var a={};return{Ng:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Kh:function(b,c){a[b]=c},reset:function(){a={}}}},Me=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var Ne=function(){this.a={};this.i={}};Ne.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
Ne.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Ba(b)?pe(a,b):qe(a,b)};
var Pe=function(a){var b=Oe;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Ba(b)?pe("getUserAgent",b):qe("getUserAgent",b)};function Qe(){var a={};return a};var H={fb:"_ee",Tc:"_syn",fi:"_uei",di:"_pci",Hc:"event_callback",Ob:"event_timeout",ia:"gtag.config",ja:"allow_ad_personalization_signals",Ic:"restricted_data_processing",cb:"allow_google_signals",ka:"cookie_expires",Nb:"cookie_update",eb:"session_duration",ma:"user_properties",ya:"transport_url",O:"ads_data_redaction"};
H.Oe=[H.ja,H.cb,H.Nb];H.Re=[H.ka,H.Ob,H.eb];H.o="ad_storage",H.J="analytics_storage",H.Fh="region",H.Oh="wait_for_update";var Re={},Se=function(a,b){Re[a]=Re[a]||[];Re[a][b]=!0},Te=function(a){for(var b=[],c=Re[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){Se("GTM",a)};var B=window,K=document,Ue=navigator,Ve=K.currentScript&&K.currentScript.src,We=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Xe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ye=function(a,b,c){var d=K.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Xe(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=K.getElementsByTagName("script")[0]||K.body||K.head;l.parentNode.insertBefore(d,l);return d},Ze=function(){if(Ve){var a=Ve.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},$e=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=K.body&&K.body.lastChild||
K.body||K.head;d.parentNode.insertBefore(c,d);Xe(c,b);void 0!==a&&(c.src=a);return c},af=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},bf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},cf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){B.setTimeout(a,0)},df=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},ef=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},ff=function(a){var b=K.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},gf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},hf=function(a){Ue.sendBeacon&&Ue.sendBeacon(a)||af(a)},jf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var kf={},lf=function(a){return void 0==kf[a]?!1:kf[a]};var mf=[];function nf(){var a=We("google_tag_data",{});a.ics||(a.ics={entries:{},set:of,update:pf,addListener:qf,notifyListeners:rf,active:!1});return a.ics}
function of(a,b,c,d,e,f){var g=nf();g.active=!0;if(void 0!=b){var k=g.entries,l=k[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var q=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:q};k[a]=t;q&&B.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,sf(a),rf(),Se("TAGGING",2))},f)}}}
function pf(a,b){var c=nf();c.active=!0;if(void 0!=b){var d=tf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=tf(a);f.quiet?(f.quiet=!1,sf(a)):g!==d&&sf(a)}}function qf(a,b){mf.push({we:a,Ig:b})}function sf(a){for(var b=0;b<mf.length;++b){var c=mf[b];Ea(c.we)&&-1!==c.we.indexOf(a)&&(c.Ye=!0)}}function rf(){for(var a=0;a<mf.length;++a){var b=mf[a];if(b.Ye){b.Ye=!1;try{b.Ig.call()}catch(c){}}}}
var tf=function(a){var b=nf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},uf=function(a){return!(nf().entries[a]||{}).quiet},vf=function(){return lf("gtag_cs_api")?nf().active:!1},wf=function(a,b){nf().addListener(a,b)},xf=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!uf(b[e]))return!0;return!1}if(c()){var d=!1;wf(b,function(){d||c()||(d=!0,a())})}else a()},yf=function(a,b){if(!1===tf(b)){var c=!1;wf([b],function(){!c&&tf(b)&&(a(),c=!0)})}};var zf=[H.o,H.J],Af=function(a){var b=a[H.Fh];b&&I(40);var c=a[H.Oh];c&&I(41);for(var d=Ea(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<zf.length;f++){var g=zf[f],k=a[zf[f]],l=d[e];nf().set(g,k,l,"BR","BR-MG",c)}},Bf=function(a){for(var b=0;b<zf.length;b++){var c=zf[b],d=a[zf[b]];nf().update(c,d)}nf().notifyListeners()},Cf=function(a){var b=tf(a);return void 0!=b?b:!0},Df=function(){for(var a=[],b=0;b<zf.length;b++){var c=tf(zf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")},
Ef=function(a,b){xf(a,b)};var Gf=function(a){return Ff?K.querySelectorAll(a):null},Hf=function(a,b){if(!Ff)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},If=!1;if(K.querySelectorAll)try{var Jf=K.querySelectorAll(":root");Jf&&1==Jf.length&&Jf[0]==K.documentElement&&(If=!0)}catch(a){}var Ff=If;var Gd={},Q=null,Xf=Math.random();Gd.B="GTM-JD26";Gd.Tb="7m1";Gd.Ud="";var Yf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Zf="www.googletagmanager.com/gtm.js";
var $f=Zf,ag=null,bg=null,cg="//www.googletagmanager.com/a?id="+Gd.B+"&cv=337",dg={},eg={},fg=function(){var a=Q.sequence||1;Q.sequence=a+1;return a};
var gg=function(){return"&tc="+fd.filter(function(a){return a}).length},jg=function(){hg||(hg=B.setTimeout(ig,500))},ig=function(){hg&&(B.clearTimeout(hg),hg=void 0);void 0===kg||lg[kg]&&!mg&&!ng||(og[kg]||pg.$g()||0>=qg--?(I(1),og[kg]=!0):(pg.zh(),af(rg()),lg[kg]=!0,sg=tg=ng=mg=""))},rg=function(){var a=kg;if(void 0===a)return"";var b=Te("GTM"),c=Te("TAGGING");return[ug,lg[a]?"":"&es=1",vg[a],b?"&u="+b:"",c?"&ut="+c:"",gg(),mg,ng,tg,sg,"&z=0"].join("")},wg=function(){return[cg,"&v=3&t=t","&pid="+
Ha(),"&rv="+Gd.Tb].join("")},xg="0.005000">Math.random(),ug=wg(),yg=function(){ug=wg()},lg={},mg="",ng="",sg="",tg="",kg=void 0,vg={},og={},hg=void 0,pg=function(a,b){var c=0,d=0;return{$g:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},zh:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),qg=1E3,zg=function(a,b){if(xg&&!og[a]&&kg!==a){ig();kg=a;sg=mg="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";vg[a]="&e="+c+"&eid="+a;jg()}},Ag=function(a,b,c){if(xg&&!og[a]&&
b){a!==kg&&(ig(),kg=a);var d,e=String(b[rd.Ka]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;mg=mg?mg+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(hd[g]?"1":"2")+d;sg=sg?sg+"."+k:"&ti="+k;jg();2022<=rg().length&&ig()}},Bg=function(a,b,c){if(xg&&!og[a]){a!==kg&&(ig(),kg=a);var d=c+b;ng=ng?ng+
"."+d:"&epr="+d;jg();2022<=rg().length&&ig()}};var Cg={},Dg=new Ia,Eg={},Fg={},Ig={name:"dataLayer",set:function(a,b){D(Za(a,b),Eg);Gg()},get:function(a){return Hg(a,2)},reset:function(){Dg=new Ia;Eg={};Gg()}},Hg=function(a,b){if(2!=b){var c=Dg.get(a);xg&&c!==Jg(a.split("."))&&I(5);return c}return Jg(a.split("."))},Jg=function(a){for(var b=Eg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},Kg=function(a,b){Fg.hasOwnProperty(a)||(Dg.set(a,b),D(Za(a,b),Eg),Gg())},Gg=function(a){Ka(Fg,function(b,c){Dg.set(b,c);
D(Za(b,void 0),Eg);D(Za(b,c),Eg);a&&delete Fg[b]})},Lg=function(a,b,c){Cg[a]=Cg[a]||{};var d=1!==c?Jg(b.split(".")):Dg.get(b);"array"===hb(d)||"object"===hb(d)?Cg[a][b]=D(d):Cg[a][b]=d},Mg=function(a,b){if(Cg[a])return Cg[a][b]},Ng=function(a,b){Cg[a]&&delete Cg[a][b]};var Qg=/:[0-9]+$/,Rg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Ug=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Sg(a.protocol)||Sg(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(Qg,"").toLowerCase());return Tg(a,b,c,d,e)},Tg=function(a,b,c,d,e){var f,g=Sg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Vg(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Qg,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Se("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Fa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Rg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Sg=function(a){return a?a.replace(":",
"").toLowerCase():""},Vg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Wg=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Se("TAGGING",1),c="/"+c);var d=b.hostname.replace(Qg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Xg=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Wg(a),f=a.split(/[?#]/)[0],g=e.search,k=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===k[0]&&(k=k.substring(1));g=c(g);k=c(k);""!==g&&(g="?"+g);""!==k&&(k="#"+k);var l=""+f+g+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Yg(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var $g=function(a,b,c,d){return Zg(d)?Yg(a,String(b||document.cookie),c):[]},ch=function(a,b,c,d,e){if(Zg(e)){var f=ah(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=bh(f,function(g){return g.Zb},b);if(1===f.length)return f[0].id;f=bh(f,function(g){return g.Db},c);return f[0]?f[0].id:void 0}}};function eh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=$g(b,f,!1,d).indexOf(c)}
var ih=function(a,b,c,d){function e(w,y,x){if(null==x)return delete k[y],w;k[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete k[y],w;k[y]=!0;return w+"; "+y}if(!Zg(c.Ea))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=fh(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.ih);g=e(g,"samesite",
c.Dh);c.Hh&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=gh(),q=void 0,t=!1,r=0;r<n.length;++r){var u="none"!==n[r]?n[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,k)}catch(w){q=w;continue}t=!0;if(!hh(u,c.path)&&eh(v,a,b,c.Ea))return 0}if(q&&!t)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,k);return hh(m,c.path)?1:eh(g,a,b,c.Ea)?0:1},jh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return ih(a,b,c)};
function bh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function ah(a,b,c){for(var d=[],e=$g(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Zb:1*l[0]||1,Db:1*l[1]||1}))}}return d}
var fh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},kh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,lh=/(^|\.)doubleclick\.net$/i,hh=function(a,b){return lh.test(document.location.hostname)||"/"===b&&kh.test(a)},gh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;lh.test(e)||kh.test(e)||a.push("none");
return a},Zg=function(a){if(!lf("gtag_cs_api")||!a||!vf())return!0;if(!uf(a))return!1;var b=tf(a);return null==b?!0:!!b};var mh=function(){for(var a=Ue.userAgent+(K.cookie||"")+(K.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},ph=function(a,b,c,d,e){var f=nh(b);return ch(a,f,oh(c),d,e)},qh=function(a,b,c,d){var e=""+nh(c),f=oh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},nh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},oh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function rh(a,b,c){var d,e=a.Ab;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ra())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var sh=["1"],th={},xh=function(a){var b=uh(a.prefix);th[b]||vh(b,a.path,a.domain)||(wh(b,mh(),a),vh(b,a.path,a.domain))};function wh(a,b,c){var d=qh(b,"1",c.domain,c.path),e=rh(c);e.Ea="ad_storage";jh(a,d,e)}function vh(a,b,c){var d=ph(a,b,c,sh,"ad_storage");d&&(th[a]=d);return d}function uh(a){return(a||"_gcl")+"_au"};var yh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function zh(){for(var a=Ah,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Bh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ah,Ch;function Dh(a){Ah=Ah||Bh();Ch=Ch||zh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Ah[l],Ah[m],Ah[n],Ah[q])}return b.join("")}
function Eh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Ch[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ah=Ah||Bh();Ch=Ch||zh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Fh;var Jh=function(){var a=Gh,b=Hh,c=Ih(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){bf(K,"mousedown",d);bf(K,"keyup",d);bf(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Kh=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ih().decorators.push(f)},Lh=function(a,b,c){for(var d=Ih().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==K.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[q])||n&&0<=l[q].indexOf(m)){k=!0;break a}k=!1}if(k){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Ua(e,g.callback())}}return e},Ih=function(){var a=We("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Mh=/(.*?)\*(.*?)\*(.*)/,Nh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Oh=/^(?:www\.|m\.|amp\.)+/,Ph=/([^?#]+)(\?[^#]*)?(#.*)?/;function Qh(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Sh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Dh(String(d))))}var e=b.join("*");return["1",Rh(e),e].join("*")},Rh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Fh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Fh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Fh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Uh=function(){return function(a){var b=Wg(B.location.href),c=b.search.replace("?",""),d=Rg(c,"_gl",!1,!0)||"";a.query=Th(d)||{};var e=Ug(b,"fragment").match(Qh("_gl"));a.fragment=Th(e&&e[3]||"")||{}}},Vh=function(a){var b=Uh(),c=Ih();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ua(d,e.query),a&&Ua(d,e.fragment));return d},
Th=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Mh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===Rh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],r=0;r<t.length;r+=2)q[t[r]]=Eh(t[r+1]);return q}}}}catch(u){}};
function Wh(a,b,c,d){function e(n){var q=n,t=Qh(a).exec(q),r=q;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}n=r;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Ph.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function Xh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Lh(b,1,c),e=Lh(b,2,c),f=Lh(b,3,c);if(Wa(d)){var g=Sh(d);c?Yh("_gl",g,a):Zh("_gl",g,a,!1)}if(!c&&Wa(e)){var k=Sh(e);Zh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Zh(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Yh(m,n,q);break a}}"string"==typeof q&&Wh(m,n,q,void 0)}}
function Zh(a,b,c,d){if(c.href){var e=Wh(a,b,c.href,void 0===d?!1:d);yh.test(e)&&(c.href=e)}}
function Yh(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Wh(a,b,c.action);yh.test(m)&&(c.action=m)}}}
var Gh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Xh(e,e.hostname)}}catch(g){}},Hh=function(a){try{if(a.action){var b=Ug(Wg(a.action),"host");Xh(a,b)}}catch(c){}},$h=function(a,b,c,d){Jh();Kh(a,b,"fragment"===c?2:1,!!d,!1)},ai=function(a,b){Jh();Kh(a,[Tg(B.location,"host",!0)],b,!0,!0)},bi=function(){var a=K.location.hostname,b=Nh.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Oh,""),l=e.replace(Oh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},ci=function(a,b){return!1===a?!1:a||b||bi()};var di=/^\w+$/,ei=/^[\w-]+$/,fi=/^~?[\w-]+$/,gi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},hi=function(){if(!lf("gtag_cs_api")||!vf())return!0;var a=tf("ad_storage");return null==a?!0:!!a},ii=function(a,b){uf("ad_storage")?hi()?a():yf(a,"ad_storage"):b?Se("TAGGING",3):xf(function(){ii(a,!0)},["ad_storage"])},li=function(a){var b=[];if(!K.cookie)return b;var c=$g(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=ji(c[d]);e&&-1===Fa(b,e)&&b.push(e)}return ki(b)};
function mi(a){return a&&"string"==typeof a&&a.match(di)?a:"_gcl"}
var oi=function(){var a=Wg(B.location.href),b=Ug(a,"query",!1,void 0,"gclid"),c=Ug(a,"query",!1,void 0,"gclsrc"),d=Ug(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Rg(e,"gclid",!1,void 0);c=c||Rg(e,"gclsrc",!1,void 0)}return ni(b,c,d)},ni=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(ei))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":lf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},qi=function(a){var b=oi();ii(function(){return pi(b,a)})};
function pi(a,b,c){function d(m,n){var q=ri(m,e);q&&(jh(q,n,f),g=!0)}b=b||{};var e=mi(b.prefix);c=c||Ra();var f=rh(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.zi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var ti=function(a,b){var c=Vh(!0);ii(function(){for(var d=mi(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==gi[f]){var g=ri(f,d),k=c[g];if(k){var l=Math.min(si(k),Ra()),m;b:{for(var n=l,q=$g(g,K.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(si(q[t])>n){m=!0;break b}m=!1}if(!m){var r=rh(b,l,!0);r.Ea="ad_storage";jh(g,k,r)}}}}pi(ni(c.gclid,c.gclsrc),b)})},ri=function(a,b){var c=gi[a];if(void 0!==c)return b+c},si=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ji(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ui=function(a,b,c,d,e){if(Ea(b)){var f=mi(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=ri(a[l],f);if(m){var n=$g(m,K.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};ii(function(){$h(g,b,c,d)})}},ki=function(a){return a.filter(function(b){return fi.test(b)})},vi=function(a,b){for(var c=mi(b.prefix),d={},e=0;e<a.length;e++)gi[a[e]]&&(d[a[e]]=gi[a[e]]);ii(function(){Ka(d,function(f,g){var k=$g(c+g,K.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=si(l),
n={};n[f]=[ji(l)];pi(n,b,m)}})})};function wi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var xi=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(vf()){var c=oi();if(wi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);ai(function(){return d},3);ai(function(){var e={};return e._up="1",e},1)}}},yi=function(){var a;if(hi()){for(var b=[],c=K.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Bd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].Bd]||(g[b[k].Bd]=[]),g[b[k].Bd].push({timestamp:l[1],Kg:l[2]}))}a=g}else a={};return a};var zi=/^\d+\.fls\.doubleclick\.net$/;function Ai(a,b){uf(H.o)?Cf(H.o)?a():yf(a,H.o):b?I(42):Ef(function(){Ai(a,!0)},[H.o])}function Bi(a){var b=Wg(B.location.href),c=Ug(b,"host",!1);if(c&&c.match(zi)){var d=Ug(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ci(a,b,c){if("aw"==a||"dc"==a){var d=Bi("gcl"+a);if(d)return d.split(".")}var e=mi(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Cf(H.o)&&c,g;g=oi()[a]||[];if(0<g.length)return f?["0"]:g}var k=ri(a,e);return k?li(k):[]}
var Di=function(a){var b=Bi("gac");if(b)return!Cf(H.o)&&a?"0":decodeURIComponent(b);var c=yi(),d=[];Ka(c,function(e,f){for(var g=[],k=0;k<f.length;k++)g.push(f[k].Kg);g=ki(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Ei=function(a,b){var c=oi().dc||[];Ai(function(){xh(b);var d=th[uh(b.prefix)],e=!1;if(d&&0<c.length){var f=Q.joined_au=Q.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;hf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=uh(b.prefix),n=th[m];n&&wh(m,n,b)}})};var Fi=/[A-Z]+/,Gi=/\s/,Hi=function(a){if(p(a)&&(a=Qa(a),!Gi.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Fi.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],C:d}}}}},Ji=function(a){for(var b={},c=0;c<a.length;++c){var d=Hi(a[c]);d&&(b[d.id]=d)}Ii(b);var e=[];Ka(b,function(f,g){e.push(g)});return e};
function Ii(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.C[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ki=function(){var a=!1;return a};var Mi=function(a,b,c,d){return(2===Li()||d||"http:"!=B.location.protocol?a:b)+c},Li=function(){var a=Ze(),b;if(1===a)a:{var c=$f;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var $i=function(a){return Cf(H.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Xg(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var aj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),bj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},cj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},dj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var fj=function(a){var b;b||(b=Hg("gtm.whitelist"));b&&I(9);
var c=b&&Xa(Pa(b),bj),d;d||(d=Hg("gtm.blacklist"));d||(d=Hg("tagTypeBlacklist"))&&I(3);d?I(8):d=[];ej()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Fa(Pa(d),"google")&&I(2);var e=d&&Xa(Pa(d),cj),f={};return function(g){var k=
g&&g[rd.Ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=eg[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>Fa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Fa(c,l[q])){I(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var r=0<=Fa(e,k);if(r)t=r;else{var u=Ja(e,l||[]);u&&I(10);t=u}}var v=!m||t;v||!(0<=Fa(l,"sandboxedScripts"))||c&&-1!==Fa(c,"sandboxedScripts")||(v=Ja(e,dj));return f[k]=v}},ej=function(){return aj.test(B.location&&B.location.hostname)};var gj={active:!0,isAllowed:function(){return!0},isWhitelisted:function(){return!0}},hj=function(a){var b=Q.zones;!b&&a&&(b=Q.zones=a());return b};var ij=function(){};var jj=!1,kj=0,lj=[];function mj(a){if(!jj){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){jj=!0;for(var e=0;e<lj.length;e++)N(lj[e])}lj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function nj(){if(!jj&&140>kj){kj++;try{K.documentElement.doScroll("left"),mj()}catch(a){B.setTimeout(nj,50)}}}var oj=function(a){jj?a():lj.push(a)};var pj={},qj={},rj=function(a,b,c,d){if(!qj[a]||Yf[b]||"__zone"===b)return-1;var e={};jb(d)&&(e=D(d,e));e.id=c;e.status="timeout";return qj[a].tags.push(e)-1},sj=function(a,b,c,d){if(qj[a]){var e=qj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function tj(a){for(var b=pj[a]||[],c=0;c<b.length;c++)b[c]();pj[a]={push:function(d){d(Gd.B,qj[a])}}}
var wj=function(a,b,c){qj[a]={tags:[]};Ba(b)&&uj(a,b);c&&B.setTimeout(function(){return tj(a)},Number(c));return vj(a)},uj=function(a,b){pj[a]=pj[a]||[];pj[a].push(Ta(function(){return N(function(){b(Gd.B,qj[a])})}))};function vj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&tj(a)})},gg:function(){d=!0;b>=c&&tj(a)}}};var xj=function(){function a(d){return!Ca(d)||0>d?0:d}if(!Q._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Ca(Ig.get("gtm.start"))?Ig.get("gtm.start"):0;Q._li={cst:a(c-b),cbt:a(bg-b)}}};var Bj={},Cj=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},Dj=!1;
var Ej=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}xj();return B[b]},Fj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Cj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Hj=function(a){},Gj=function(){return B.GoogleAnalyticsObject||"ga"};
var Ij=function(a,b){return function(){var c=Cj(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),k=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};var Nj=function(){return!1},Oj=function(){var a={};return function(b,c,d){}};function Pj(a,b,c,d){var e=fd[a],f=Qj(a,b,c,d);if(!f)return null;var g=nd(e[rd.ce],c,[]);if(g&&g.length){var k=g[0];f=Pj(k.index,{H:f,F:1===k.Ce?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qj(a,b,c,d){function e(){if(f[rd.Bf])k();else{var w=od(f,c,[]),y=rj(c.id,String(f[rd.Ka]),Number(f[rd.ee]),w[rd.Cf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ra()-C;Ag(c.id,fd[a],"5");sj(c.id,y,"success",z);g()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ra()-C;Ag(c.id,fd[a],"6");sj(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Ag(c.id,f,"1");var A=function(){var z=Ra()-C;Ag(c.id,f,"7");sj(c.id,y,"exception",z);x||(x=!0,k())};var C=Ra();try{md(w,c)}catch(z){A(z)}}}var f=fd[a],g=b.H,k=b.F,l=b.terminate;if(c.gd(f))return null;var m=nd(f[rd.fe],c,[]);if(m&&m.length){var n=m[0],q=Pj(n.index,{H:g,F:k,terminate:l},c,d);if(!q)return null;g=q;k=2===n.Ce?l:q}if(f[rd.Vd]||f[rd.Gf]){var t=f[rd.Vd]?gd:c.Mh,r=g,u=k;if(!t[a]){e=Ta(e);var v=Rj(a,t,e);g=v.H;k=v.F}return function(){t[a](r,u)}}return e}
function Rj(a,b,c){var d=[],e=[];b[a]=Sj(d,e,c);return{H:function(){b[a]=Tj;for(var f=0;f<d.length;f++)d[f]()},F:function(){b[a]=Uj;for(var f=0;f<e.length;f++)e[f]()}}}function Sj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tj(a){a()}function Uj(a,b){b()};var Xj=function(a,b){for(var c=[],d=0;d<fd.length;d++)if(a.Cb[d]){var e=fd[d];var f=b.add();try{var g=Pj(d,{H:f,F:f,terminate:f},a,d);g?c.push({ff:d,Ze:pd(e),ac:g}):(Vj(d,a),f())}catch(l){f()}}b.gg();c.sort(Wj);for(var k=0;k<c.length;k++)c[k].ac();return 0<c.length};function Wj(a,b){var c,d=b.Ze,e=a.Ze;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.ff,k=b.ff;f=g>k?1:g<k?-1:0}return f}
function Vj(a,b){if(!xg)return;var c=function(d){var e=b.gd(fd[d])?"3":"4",f=nd(fd[d][rd.ce],b,[]);f&&f.length&&c(f[0].index);Ag(b.id,fd[d],e);var g=nd(fd[d][rd.fe],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yj=!1,Zj=function(a,b,c,d,e){if("gtm.js"==b){if(Yj)return!1;Yj=!0}zg(a,b);var f=wj(a,d,e);Lg(a,"event",1);Lg(a,"ecommerce",1);Lg(a,"gtm");var g={id:a,name:b,gd:fj(c),Cb:[],Mh:[],Qe:function(){I(6)}};g.Cb=Bd(g);
var k=Xj(g,f);"gtm.js"!==b&&"gtm.sync"!==b||Hj(Gd.B);if(!k)return k;for(var l=0;l<g.Cb.length;l++)if(g.Cb[l]){var m=fd[l];if(m&&!Yf[String(m[rd.Ka])])return!0}return!1};function ak(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Wg(""+c+b).href}}function bk(a,b){return ck()?ak(a,b):void 0}
function ck(){var a=!1;return a};var dk=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.H=function(){};this.F=function(){};this.eventId=void 0},ek=function(a){var b=new dk;b.eventModel=a;return b},fk=function(a,b){a.targetConfig=b;return a},gk=function(a,b){a.containerConfig=b;return a},hk=function(a,b){a.a=b;return a},ik=function(a,b){a.globalConfig=b;return a},jk=function(a,b){a.H=b;return a},kk=function(a,b){a.F=b;return a};
dk.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var lk=function(a){function b(e){Ka(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ka(c,function(e){d.push(e)});return d};var mk;if(3===Gd.Tb.length)mk="g";else{var nk="G";mk=nk}
var ok={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:mk,OPT:"o"},pk=function(a){var b=Gd.B.split("-"),c=b[0].toUpperCase(),d=ok[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Gd.Tb.length){var g="w";f="2"+g}else f="";return f+d+Gd.Tb+e};function qk(a,b,c){function d(q){var t;Q.reported_gclid||(Q.reported_gclid={});t=Q.reported_gclid;var r=f+(q?"gcu":"gcs");if(!t[r]){t[r]=!0;var u=[],v=function(C,z){z&&u.push(C+"="+encodeURIComponent(z))},w="https://www.google.com";if(vf()){var y=Cf(H.o);v("gcs",Df());q&&v("gcu","1");v("rnd",n);if((!f||g&&"aw.ds"!==g)&&Cf(H.o)){var x=li("_gcl_aw");v("gclaw",x.join("."))}v("url",String(B.location).split(/[?#]/)[0]);v("dclid",rk(b,k));!y&&b&&(w="https://pagead2.googlesyndication.com")}"1"===Vh(!1)._up&&
v("gtm_up","1");v("gclid",rk(b,f));v("gclsrc",g);v("gtm",pk(!c));var A=w+"/pagead/landing?"+u.join("&");hf(A)}}var e=oi(),f=e.gclid||"",g=e.gclsrc,k=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=vf();if(l||m){var n=""+mh();m?Ef(function(){d();Cf(H.o)||yf(function(){return d(!0)},H.o)},[H.o]):d()}}function rk(a,b){var c=a&&!Cf(H.o);return b&&c?"0":b}var sk=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var tk=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var uk;a:{var vk=ma.navigator;if(vk){var wk=vk.userAgent;if(wk){uk=wk;break a}}uk=""}var xk=function(a){return-1!=uk.indexOf(a)};var yk=function(){return xk("iPhone")&&!xk("iPod")&&!xk("iPad")};xk("Opera");xk("Trident")||xk("MSIE");xk("Edge");!xk("Gecko")||-1!=uk.toLowerCase().indexOf("webkit")&&!xk("Edge")||xk("Trident")||xk("MSIE")||xk("Edge");-1!=uk.toLowerCase().indexOf("webkit")&&!xk("Edge")&&xk("Mobile");xk("Macintosh");xk("Windows");xk("Linux")||xk("CrOS");var zk=ma.navigator||null;zk&&(zk.appVersion||"").indexOf("X11");xk("Android");yk();xk("iPad");xk("iPod");yk()||xk("iPad")||xk("iPod");uk.toLowerCase().indexOf("kaios");var Ak=function(){};var Bk=function(a,b){this.i=a;this.a=null;this.s={};this.D=0;this.M=void 0===b?500:b;this.m=null};la(Bk,Ak);
var Dk=function(a,b){var c=setTimeout(function(){c=0;b({tcString:"tcunavailable"})},a.M);Ck(a,"addEventListener",function(d){if(d&&(!1===d.gdprApplies||"error"===d.cmpStatus||"loaded"===d.cmpStatus&&("tcloaded"===d.eventStatus||"useractioncomplete"===d.eventStatus))){if(void 0!==d.tcString&&"string"!==typeof d.tcString||void 0!==d.gdprApplies&&"boolean"!==typeof d.gdprApplies||void 0!==d.listenerId&&"number"!==typeof d.listenerId||void 0!==d.addtlConsent&&"string"!==typeof d.addtlConsent||!d.cmpStatus||
"error"===d.cmpStatus)d.tcString="tcunavailable";Ck(a,"removeEventListener",null,d.listenerId);c&&(clearTimeout(c),c=0,b(d))}})},Ck=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(Ek(a)){Fk(a);var f=++a.D;a.s[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Ek=function(a){if(a.a)return a.a;var b;a:{for(var c=a.i,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames.__tcfapiLocator)}catch(k){e=
!1}if(e){b=c;break a}var f;b:{try{var g=c.parent;if(g&&g!=c){f=g;break b}}catch(k){}f=null}if(!(c=f))break}b=null}a.a=b;return a.a},Fk=function(a){a.m||(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.s[c.callId](c.returnValue,c.success)}catch(e){}},tk(a.i,a.m))};function Gk(){var a=Q.tcf||{};return Q.tcf=a}var Hk=function(){var a=Gk();if(!a.active){a.active=!0;var b=new Bk(B,3E3),c;"function"===typeof B.__tcfapi?c="s":("function"===typeof b.i.__tcfapi||null!=Ek(b))&&(c="i");a.Pe=Ra();try{var d=!1;Dk(b,function(){d=!0;a.ld=Ra()});d&&(a.ld=a.Pe)}catch(e){c="e"}a.type=c}},Ik=function(){var a=Gk();if(a.active&&void 0!==a.ld)return Number(a.ld-a.Pe)};function Nl(){var a=Q;return a.gcq=a.gcq||new Ol}
var Pl=function(a,b,c){Nl().register(a,b,c)},Ql=function(a,b,c,d){Nl().push("event",[b,a],c,d)},Rl=function(a,b){Nl().push("config",[a],b)},Sl={},Tl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Ul=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},Ol=function(){this.m={};this.i={};this.a=[]},Vl=function(a,b){var c=Hi(b);return a.m[c.containerId]=a.m[c.containerId]||new Tl},Wl=function(a,b,c){if(b){var d=Hi(b);if(d&&1===
Vl(a,b).status){Vl(a,b).status=2;var e={};xg&&(e.timeoutId=B.setTimeout(function(){I(38);jg()},3E3));a.push("require",[e],d.containerId);Sl[d.containerId]=Ra();if(Ki()){
}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=bk(c,g)||k;Ye(l)}}}},Xl=function(a,b,c,d){if(d.ca){var e=Vl(a,d.ca),f=e.m;if(f){var g=D(c),k=D(e.targetConfig[d.ca]),l=D(e.containerConfig),m=D(e.i),n=D(a.i),q=Hg("gtm.uniqueEventId"),t=Hi(d.ca).prefix,r=kk(jk(ik(hk(gk(fk(ek(g),k),l),m),n),function(){
Bg(q,t,"2");}),function(){Bg(q,t,"3");});try{Bg(q,t,"1");f(d.ca,b,d.m,r)}catch(u){Bg(q,t,"4");}}}};
Ol.prototype.register=function(a,b,c){if(3!==Vl(this,a).status){Vl(this,a).m=b;Vl(this,a).status=3;c&&(Vl(this,a).i=c);var d=Hi(a),e=Sl[d.containerId];if(void 0!==e){var f=Q[d.containerId].bootstrap,g=d.prefix.toUpperCase();Q[d.containerId]._spx&&(g=g.toLowerCase());var k=Hg("gtm.uniqueEventId"),l=g,m=Ra()-f;if(xg&&!og[k]){k!==kg&&(ig(),kg=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);tg=tg?tg+","+n:"&cl="+n}delete Sl[d.containerId]}this.flush()}};
Ol.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);Wl(this,c,b[0][H.ya]||this.i[H.ya]);this.a.push(new Ul(a,e,c,b,d));d||this.flush()};
Ol.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Vl(this,c.ca).status&&!a)return;xg&&B.clearTimeout(c.a[0].timeoutId);break;case "set":Ka(c.a[0],function(l,m){D(Za(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[H.uc];delete d[H.uc];var f=Vl(this,c.ca),g=Hi(c.ca),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.ca]={});f.a&&e||Xl(this,H.ia,d,c);f.a=!0;delete d[H.fb];k?D(d,f.containerConfig):
D(d,f.targetConfig[c.ca]);break;case "event":Xl(this,c.a[1],c.a[0],c)}this.a.shift()}};var Yl=function(a){};var Zl=function(a,b){return!0};var $l=function(a,b){var c;return c};var am=function(a){};var bm=function(a,b){var c;var d=kb(c,this.m);void 0===d&&void 0!==c&&I(45);return d};var cm=function(a){var b;var k=kb(b,this.m);void 0===k&&void 0!==b&&I(45);return k};var dm=function(a,b){var c=null;return kb(c,this.m)};var em=function(a){var b;return kb(b,this.m)};var fm=function(a){var b;return b};var gm=function(a,b){b=void 0===b?!0:b;var c;return c};var hm=function(a,b){var c;return c};var im=function(a,b){var c;return c};var jm=function(a){var b="";return b};var km=function(a){var b="";return b};var Oe=function(){De(this,"get_user_agent");return B.navigator.userAgent};var lm=function(a,b){};var mm={},nm=function(a,b,c,d){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);De(this,"inject_script",a);var e=this.m,f=function(){b instanceof bb&&b.Fa(e)},g=function(){c instanceof bb&&c.Fa(e)};if(!d){Ye(a,f,g);return}var k=d;mm[k]?(mm[k].onSuccess.push(f),mm[k].onFailure.push(g)):(mm[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=mm[k].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);
return 0}},g=function(){for(var l=mm[k].onFailure,m=0;m<l.length;m++)N(l[m]);mm[k]=null},Ye(a,f,g));};var om=function(){return!1},pm={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var qm=function(){};var rm=function(a,b){var c=!1;return c};var sm=function(){var a="";return a};var tm=function(){var a="";return a};var um=function(a,b,c){};var vm=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var wm=function(a,b,c){F(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);De(this,"access_globals","readwrite",a);var d=a.split("."),e=B,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=lb(b,this.m),!0;return!1};var xm=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var ym=function(a,b,c){var d=this;};var zm={},Am={};zm.getItem=function(a){var b=null;return b};
zm.setItem=function(a,b){};
zm.removeItem=function(a){};zm.clear=function(){};var Bm=function(a){var b;return b};var Dc=function(){var a=new Ne;Ki()?(a.add("injectHiddenIframe",Aa),a.add("injectScript",Aa)):(a.add("injectHiddenIframe",lm),a.add("injectScript",nm));var b=um;a.add("Math",ve());a.add("TestHelper",Qe());a.add("addEventCallback",Yl);a.add("aliasInWindow",Zl);a.add("assertApi",re);a.add("assertThat",se);a.add("callInWindow",
$l);a.add("callLater",am);a.add("copyFromDataLayer",bm);a.add("copyFromWindow",cm);a.add("createArgumentsQueue",dm);a.add("createQueue",em);a.add("decodeUri",we);a.add("decodeUriComponent",xe);a.add("encodeUri",ye);a.add("encodeUriComponent",ze);a.add("fail",Ae);a.add("fromBase64",fm,!("atob"in B));a.add("generateRandom",Be);a.add("getContainerVersion",Ee);a.add("getCookieValues",gm);a.add("getQueryParameters",hm);a.add("getReferrerQueryParameters",im);a.add("getReferrerUrl",jm);a.add("getTimestamp",
Ce);a.add("getType",Fe);a.add("getUrl",km);a.add("localStorage",pm,!om());a.add("logToConsole",qm);a.add("makeInteger",He);a.add("makeNumber",Ie);a.add("makeString",Je);a.add("makeTableMap",Ke);a.add("mock",Me);a.add("queryPermission",rm);a.add("readCharacterSet",sm);a.add("readTitle",tm);a.add("sendPixel",b);a.add("setCookie",vm);a.add("setInWindow",wm);a.add("sha256",ym);a.add("templateStorage",zm);a.add("toBase64",Bm,!("btoa"in B));a.add("JSON",Ge(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.wb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");
}return d}};var Bc,Kd;
function Cm(){var a=data.runtime||[],b=data.runtime_lines;Bc=new zc;Dm();bd=function(e,f,g){Em(f);var k=new fb;Ka(f,function(r,u){var v=kb(u);void 0===v&&void 0!==u&&I(44);k.set(r,v)});Bc.a.a.s=xd();var l={hg:Md(e),eventId:void 0!==g?g.id:void 0,wb:function(){return e},log:function(){}};if(Nj()){var m=Oj(),n=void 0,q=void 0;l.da={i:{},a:function(r,u,v){1===u&&(n=r);7===u&&(q=v);m(r,u,v)},m:Le()};l.log=function(r,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:r,source:q,message:v})}}}var t=
Cc(l,[e,k]);Bc.a.a.s=void 0;t instanceof qa&&"return"===t.a&&(t=t.i);return lb(t)};Ec();for(var c=0;c<a.length;c++){var d=a[c];if(!Ea(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&td(d,b[c]);Bc.ac(d)}}function Em(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ba(b)&&(a.gtmOnSuccess=function(){N(b)});Ba(c)&&(a.gtmOnFailure=function(){N(c)})}
function Dm(){var a=Bc;Q.SANDBOXED_JS_SEMAPHORE=Q.SANDBOXED_JS_SEMAPHORE||0;Fc(a,function(b,c,d){Q.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Q.SANDBOXED_JS_SEMAPHORE--}})}function Fm(a){void 0!==a&&Ka(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");eg[e]=eg[e]||[];eg[e].push(b)}})};var Gm="HA GF GP G UA AW DC".split(" "),Hm=!1,Im={},Jm=!1;function Km(a,b){var c={event:a};b&&(c.eventModel=D(b),b[H.Hc]&&(c.eventCallback=b[H.Hc]),b[H.Ob]&&(c.eventTimeout=b[H.Ob]));return c}var Mm=function(){return Hm};
var Om={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!jb(a[2])&&
void 0!=a[2])return;c=a[2]}var d=Km(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Jm=!0,Mm(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&jb(a[1])?b=D(a[1]):3==a.length&&p(a[1])&&(b={},jb(a[2])||Ea(a[2])?b[a[1]]=D(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};Om.consent=function(a){if(3===a.length){var b=function(){Mm()&&D(a[2],{subcommand:a[1]})};I(39);var c=a[1];if("default"===c){b();Af(a[2]);return}if("update"===c){b();Bf(a[2]);return}}};
var Pm={policy:!0};var Qm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Sm=function(a){var b=Rm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Tm=!1,Um=[];function Vm(){if(!Tm){Tm=!0;for(var a=0;a<Um.length;a++)N(Um[a])}}var Wm=function(a){Tm?N(a):Um.push(a)};var nn=function(a){if(mn(a))return a;this.a=a};nn.prototype.Qg=function(){return this.a};var mn=function(a){return!a||"object"!==hb(a)||jb(a)?!1:"getUntrustedUpdateValue"in a};nn.prototype.getUntrustedUpdateValue=nn.prototype.Qg;var on=[],pn=!1,qn=function(a){return B["dataLayer"].push(a)},rn=function(a){var b=Q["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function sn(a){var b=a._clear;Ka(a,function(f,g){"_clear"!==f&&(b&&Kg(f,void 0),Kg(f,g))});ag||(ag=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=fg(),a["gtm.uniqueEventId"]=d,Kg("gtm.uniqueEventId",d));var e=tn(a);switch(c){case "gtm.init":I(19),e&&I(20)}return e}
function tn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Q.zones;d=e?e.checkState(Gd.B,c):gj;return d.active?Zj(c,b,d.isAllowed||d.isWhitelist,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function un(){for(var a=!1;!pn&&0<on.length;){pn=!0;delete Eg.eventModel;Gg();var b=on.shift();if(null!=b){var c=mn(b);if(c){var d=b;b=mn(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=Hg(g,1);if(Ea(k)||jb(k))k=D(k);Fg[g]=k}}try{if(Ba(b))try{b.call(Ig)}catch(v){}else if(Ea(b)){var l=
b;if(p(l[0])){var m=l[0].split("."),n=m.pop(),q=l.slice(1),t=Hg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,q)}catch(v){}}}else{if(La(b)){a:{var r=b;if(r.length&&p(r[0])){var u=Om[r[0]];if(u&&(!c||!Pm[r[0]])){b=u(r);break a}}b=void 0}if(!b){pn=!1;continue}}a=sn(b)||a}}finally{c&&Gg(!0)}}pn=!1}return!a}
function vn(){var a=un();try{Qm(B["dataLayer"],Gd.B)}catch(b){}return a}
var xn=function(){var a=We("dataLayer",[]),b=We("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};oj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Wm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<Q.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new nn(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);on.push.apply(on,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var k="boolean"!==typeof g||g;return un()&&k};var d=a.slice(0);on.push.apply(on,d);wn()&&N(vn)},wn=function(){var a=!0;return a};var yn={};yn.Pb=new String("undefined");
var zn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===yn.Pb?b:a[d]);return c.join("")}};zn.prototype.toString=function(){return this.a("undefined")};zn.prototype.valueOf=zn.prototype.toString;yn.Pf=zn;yn.Sc={};yn.zg=function(a){return new zn(a)};var An={};yn.Ah=function(a,b){var c=fg();An[c]=[a,b];return c};yn.ye=function(a){var b=a?0:1;return function(c){var d=An[c];if(d&&"function"===typeof d[b])d[b]();An[c]=void 0}};yn.Yg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};yn.sh=function(a){if(a===yn.Pb)return a;var b=fg();yn.Sc[b]=a;return'google_tag_manager["'+Gd.B+'"].macro('+b+")"};yn.jh=function(a,b,c){a instanceof yn.Pf&&(a=a.a(yn.Ah(b,c)),b=Aa);return{ed:a,H:b}};var Bn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||df(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Cn=function(a){Q.hasOwnProperty("autoEventsSettings")||(Q.autoEventsSettings={});var b=Q.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Dn=function(a,b,c){Cn(a)[b]=c},En=function(a,b,c,d){var e=Cn(a),f=Sa(e,b,d);e[b]=c(f)},Fn=function(a,b,c){var d=Cn(a);return Sa(d,b,c)};var Gn=["input","select","textarea"],Hn=["button","hidden","image","reset","submit"],In=function(a){var b=a.tagName.toLowerCase();return!Ga(Gn,function(c){return c===b})||"input"===b&&Ga(Hn,function(c){return c===a.type.toLowerCase()})?!1:!0},Jn=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):gf(a,["form"],100)},Kn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(In(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Ln=!!B.MutationObserver,Mn=void 0,Nn=function(a){if(!Mn){var b=function(){var c=K.body;if(c)if(Ln)(new MutationObserver(function(){for(var e=0;e<Mn.length;e++)N(Mn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;bf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Mn.length;e++)N(Mn[e])}))})}};Mn=[];K.body?b():N(b)}Mn.push(a)};var io=B.clearTimeout,jo=B.setTimeout,T=function(a,b,c){if(Ki()){b&&N(b)}else return Ye(a,b,c)},ko=function(){return B.location.href},lo=function(a){return Ug(Wg(a),"fragment")},mo=function(a){return Vg(Wg(a))},no=function(a,b){return Hg(a,b||2)},oo=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=qn(a)):d=qn(a);return d},po=function(a,b){B[a]=b},V=function(a,b,c){b&&(void 0===B[a]||c&&!B[a])&&(B[a]=
b);return B[a]},qo=function(a,b,c){return $g(a,b,void 0===c?!0:!!c)},ro=function(a,b){if(Ki()){b&&N(b)}else $e(a,b)},so=function(a){return!!Fn(a,"init",!1)},to=function(a){Dn(a,"init",!0)},uo=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":$f;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(Mi("https://","http://",c))},vo=function(a,b){var c=a[b];return c};
var wo=yn.jh;function To(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Uo=new Ia;function Vo(a,b){function c(g){var k=Wg(g),l=Ug(k,"protocol"),m=Ug(k,"host",!0),n=Ug(k,"port"),q=Ug(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Wo(a){return Xo(a)?1:0}
function Xo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ea(c)){for(var d=0;d<c.length;d++)if(Wo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return To(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=Fa(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var n=String(c)+m,q=Uo.get(n);q||(q=new RegExp(c,m),Uo.set(n,q));l=q.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Vo(b,c)}return!1};var Yo={},Zo=encodeURI,W=encodeURIComponent,$o=af;var ap=function(a,b){if(!a)return!1;var c=Ug(Wg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var bp=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Yo.Zg=function(){var a=!1;return a};function uq(){return B.gaGlobal=B.gaGlobal||{}}var vq=function(){var a=uq();a.hid=a.hid||Ha();return a.hid},wq=function(a,b){var c=uq();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Fq=window,Gq=document,Hq=function(a){var b=Fq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Fq["ga-disable-"+a])return!0;try{var c=Fq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Yg("AMP_TOKEN",String(Gq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Gq.getElementById("__gaOptOutExtension")?!0:!1};function Kq(a){delete a.eventModel[H.fb];Mq(a.eventModel)}var Mq=function(a){Ka(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ma]||{};Ka(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Pq=function(a,b,c){Ql(b,c,a)},Qq=function(a,b,c){Ql(b,c,a,!0)},Sq=function(a,b){};
function Rq(a,b){}var Y={b:{}};

Y.b.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Y.b.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Y.b.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.priorityOverride=0})(function(a){return String(Mg(a.vtp_gtmEventId,"event"))})}();
Y.b.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.priorityOverride=0})(function(a){var b=no("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ug(Wg(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):mo(String(b)):String(b)})}();
Y.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Bn(c,"gtm.click");oo(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.priorityOverride=0})(function(b){if(!so("cl")){var c=V("document");bf(c,"click",a,!0);to("cl")}N(b.vtp_gtmOnSuccess)})}();
Y.b.j=["google"],function(){(function(a){Y.__j=a;Y.__j.g="j";Y.__j.h=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.b.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.priorityOverride=0})(function(a){return qo(a.vtp_name,no("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.g="access_globals";Y.__access_globals.h=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,q,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Fa(e,t))return}else if("write"===q){if(-1<Fa(f,t))return}else if("readwrite"===q){if(-1<Fa(f,t)&&-1<Fa(e,t))return}else if("execute"===q){if(-1<Fa(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
t+".");},K:a}})}();
Y.b.t=["google"],function(){(function(a){Y.__t=a;Y.__t.g="t";Y.__t.h=!0;Y.__t.priorityOverride=0})(function(){return(new Date).getTime()})}();
Y.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=no("gtm.url",1);c=c||ko();var d=b[a("vtp_component")];if(!d||"URL"==d)return mo(String(c));var e=Wg(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ea(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Ug(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Ug(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.b.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=no(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.b.ua=["google"],function(){var a,b={},c=function(e){Ef(function(){d(e)},[H.J,H.o])},d=function(e){var f={},g={},k={},l={},m={};if(e.vtp_gaSettings){var n=e.vtp_gaSettings;D(bp(n.vtp_fieldsToSet,"fieldName","value"),g);D(bp(n.vtp_contentGroup,"index","group"),k);D(bp(n.vtp_dimension,"index","dimension"),l);D(bp(n.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=D(n);e=D(e,q)}D(bp(e.vtp_fieldsToSet,
"fieldName","value"),g);D(bp(e.vtp_contentGroup,"index","group"),k);D(bp(e.vtp_dimension,"index","dimension"),l);D(bp(e.vtp_metric,"index","metric"),m);Cf(H.J)||(g.storage="none");Cf(H.o)||(g.allowAdFeatures=!1,g.storeGac=!1);var t=Ej(e.vtp_functionName);if(Ba(t)){var r="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,r=u+"."):(u="gtm"+fg(),r=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,
allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},y=function(P){var R=[].slice.call(arguments,
0);R[0]=r+R[0];t.apply(window,R)},x=function(P,R){return void 0===R?R:P(R)},A=function(P,R){if(R)for(var Va in R)R.hasOwnProperty(Va)&&y("set",P+Va,R[Va])},C=function(){},z=function(P,R,Va){var bc=0;if(P)for(var Na in P)if(P.hasOwnProperty(Na)&&(Va&&v[Na]||!Va&&void 0===v[Na])){var ob=w[Na]?Oa(P[Na]):P[Na];"anonymizeIp"!=
Na||ob||(ob=void 0);R[Na]=ob;bc++}return bc},E={name:u};e.vtp_transportUrl&&(g._x_19=e.vtp_transportUrl);z(g,E,!0);t("create",e.vtp_trackingId||f.trackingId,E);y("set","&gtm",pk(!0));vf()&&y("set","&gcs",Df());g._x_19&&(null==Ve&&delete g._x_19,
g._x_20&&!b[u]&&(b[u]=!0,t(Ij(u,g._x_20))));e.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(P,R){void 0!==e[R]&&y("set",P,e[R])})("nonInteraction","vtp_nonInteraction");A("contentGroup",k);A("dimension",l);A("metric",m);var G={};z(g,G,!1)&&y("set",G);var L;e.vtp_enableLinkId&&
y("require","linkid","linkid.js");y("set","hitCallback",function(){var P=g&&g.hitCallback;Ba(P)&&P();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());var S={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:x(String,e.vtp_eventLabel||f.label),eventValue:x(Ma,e.vtp_eventValue||f.value)};z(L,
S,!1);y("send",S);}else if("TRACK_SOCIAL"==e.vtp_trackType){var U={hitType:"social",socialNetwork:String(e.vtp_socialNetwork),socialAction:String(e.vtp_socialAction),socialTarget:String(e.vtp_socialActionTarget)};z(L,U,!1);y("send",U);}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==
e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var aa=
"_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:aa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var Da="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:Da})}L?y("send","pageview",L):y("send","pageview");e.vtp_autoLinkDomains&&Fj(r,e.vtp_autoLinkDomains,!!e.vtp_useHashAutoLink,!!e.vtp_decorateFormsAutoLink);
}if(!a){var va=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(va="internal/"+va);a=!0;var $a=bk(g._x_19,"/analytics.js"),pa=Mi("https:","http:","//www.google-analytics.com/"+va,g&&g.forceSSL);T("analytics.js"===va&&$a?$a:pa,function(){var P=Cj();P&&P.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else N(e.vtp_gtmOnFailure)};
Y.__ua=c;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.priorityOverride=0}();

Y.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.g="inject_script";Y.__inject_script.h=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(ie(Wg(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Y.b.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.g="cid";Y.__cid.h=!0;Y.__cid.priorityOverride=0})(function(){return Gd.B})}();


Y.b.aev=["google"],function(){function a(r,u){var v=Mg(r,"gtm");if(v)return v[u]}function b(r,u,v,w){w||(w="element");var y=r+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(r,w);if(A&&(x=v(A),n[y]=x,q.push(y),35<q.length)){var C=q.shift();delete n[C]}}return x}function c(r,u,v){var w=a(r,t[u]);return void 0!==w?w:v}function d(r,u){if(!r)return!1;var v=e(ko());Ea(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(r))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(r).indexOf(x))return!1;w.push(e(x))}}return!ap(r,w)}function e(r){m.test(r)||(r="http://"+r);return Ug(Wg(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+r,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return df(r,"value");case "button":return ef(r);default:return null}}function k(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)In(r.elements[v])&&u++;return u}}function l(r,u,v){var w=a(r,"interactedFormField");return w&&df(w,u)||v}var m=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Y.__aev=r;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.priorityOverride=0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,ef)||v;case "URL":var x;a:{var A=String(a(u,"elementUrl")||v||""),C=Wg(A),z=String(r.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,r.vtp_affiliatedDomains);break a;default:x=Ug(C,z,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===r.vtp_attribute)E=c(u,w,v);else{var G=r.vtp_attribute,L=a(u,"element");E=L&&df(L,G)||v||""}return E;case "MD":var S=r.vtp_mdValue,U=b(u,"MD",Un);return S&&U?Xn(U,S)||
v:U||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();

Y.b.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:ko()}function b(f,g){bf(f,"hashchange",function(k){var l=a(k);g({source:"hashchange",state:null,url:mo(l),R:lo(l)})})}function c(f,g){bf(f,"popstate",function(k){var l=a(k);g({source:"popstate",state:k.state,url:mo(l),R:lo(l)})})}function d(f,g,k){var l=g.history,m=l[f];if(Ba(m))try{l[f]=function(n,q,t){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:mo(ko()),
R:lo(ko())})}}catch(n){}}function e(){var f={source:null,state:V("history").state||null,url:mo(ko()),R:lo(ko())};return function(g){var k=f,l={};l[k.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||k.R!=g.R){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.R,"gtm.newUrlFragment":g.R,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;oo(m)}}}(function(f){Y.__hl=f;Y.__hl.g="hl";Y.__hl.h=!0;Y.__hl.priorityOverride=
0})(function(f){var g=V("self");if(!so("hl")){var k=e();b(g,k);c(g,k);d("pushState",g,k);d("replaceState",g,k);to("hl")}N(f.vtp_gtmOnSuccess)})}();
Y.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=V("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(k){function l(v){var w=!0;w&&b.push(m)}xj();var m={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:pk()};k.vtp_rdp&&(m.google_restricted_data_processing=!0);void 0!=no(H.O)&&!1!==no(H.O)&&(m.google_gtm_url_processor=
function(v){return v=$i(v)});var n=function(v){return function(w,y,x){var A="DATA_LAYER"==v?no(x):k[y];A&&(m[w]=A)}},q=n("JSON");q("google_conversion_currency","vtp_currencyCode");q("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(q=n(k.vtp_productReportingDataSource),q("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),q("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),q("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),
q("google_basket_discount","vtp_discount","discount"),q("google_conversion_items","vtp_items","items"),m.google_conversion_items&&m.google_conversion_items.map&&(m.google_conversion_items=m.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));var t=function(v,w){(m.google_additional_conversion_params=m.google_additional_conversion_params||{})[v]=w},r=function(v){return function(w,y,x,A){var C="DATA_LAYER"==v?no(x):k[y];A(C)&&t(w,C)}};
k.vtp_transportUrl&&(m.google_transport_url=k.vtp_transportUrl);var u=bk(k.vtp_transportUrl,"/pagead/conversion_async.js");u||(u=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");k.vtp_enableNewCustomerReporting&&(q=r(k.vtp_newCustomerReportingDataSource),q("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),q("vdltv",
"vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(m.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),m.google_read_gcl_cookie_opt_out=!1):m.google_read_gcl_cookie_opt_out=!0;"1"===Vh(!1)._up&&t("gtm_up","1");(function(){vf()?Ef(function(){var v=Cf(H.o),w=!v&&void 0!=no(H.O)&&!1!==no(H.O);!k.vtp_transportUrl&&w&&(m.google_transport_url="https://pagead2.googlesyndication.com/");
t("gcs",Df());l(v);v||yf(function(){m=D(m);!k.vtp_transportUrl&&m.google_transport_url&&delete m.google_transport_url;t("gcs",Df());t("gcu","1");l(!0)},H.o)},[H.o]):l(!0)})();a||(a=!0,T(u,f(),e(u)))};Y.__awct=g;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.priorityOverride=0}();Y.b.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=bp(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Y.b.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();
Y.b.hid=["google"],function(){(function(a){Y.__hid=a;Y.__hid.g="hid";Y.__hid.h=!0;Y.__hid.priorityOverride=0})(function(){return yn.Pb})}();
Y.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=K.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Xe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){N(g)}}}var c=function(d){if(K.body){var e=
d.vtp_gtmOnFailure,f=wo(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.ed,k=f.H;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(K.body,ff(g),k,e)()}else jo(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.priorityOverride=0}();






Y.b.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Xg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=gf(g,["a","area"],100);if(!g)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=Fn("lcl",k?"nv.mwt":"mwt",0),m;m=k?Fn("lcl","nv.ids",[]):Fn("lcl","ids",[]);if(m.length){var n=Bn(g,"gtm.linkClick",m);if(b(f,g,c)&&!k&&l&&g.href){var q=String(vo(g,"rel")||""),t=!!Ga(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&I(36);var r=V((vo(g,"target")||"_self").substring(1)),u=!0;if(oo(n,rn(function(){var v;if(v=u&&r){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Xg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(r.location.href=vo(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else oo(n,function(){},l||2E3);return!0}}};bf(c,"click",e,!1);bf(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=vo(d,"href"),g=f.indexOf("#"),k=vo(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===g)return!1;if(0<g){var l=mo(f),m=mo(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var g=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};En("lcl","mwt",k,0);e||En("lcl","nv.mwt",k,0)}var l=function(m){m.push(g);return m};En("lcl","ids",l,[]);e||En("lcl","nv.ids",l,[]);so("lcl")||(a(),to("lcl"));N(c.vtp_gtmOnSuccess)})}();


var Tq={};Tq.macro=function(a){if(yn.Sc.hasOwnProperty(a))return yn.Sc[a]},Tq.onHtmlSuccess=yn.ye(!0),Tq.onHtmlFailure=yn.ye(!1);Tq.dataLayer=Ig;Tq.callback=function(a){dg.hasOwnProperty(a)&&Ba(dg[a])&&dg[a]();delete dg[a]};function Uq(){Q[Gd.B]=Tq;Ua(eg,Y.b);jd=jd||yn;kd=Cd}
function Vq(){kf.gtm_3pds=!0;kf.gtag_cs_api=!0;Q=B.google_tag_manager=B.google_tag_manager||{};if(Q[Gd.B]){var a=Q.zones;a&&a.unregisterChild(Gd.B);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)cd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)fd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)ed.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);dd.push(q)}hd=Y;id=Wo;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Cm();Kd=new Jd(r);if(void 0!==
u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");eg[x]=w}Fm(v);Uq();xn();jj=!1;kj=0;if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)mj();else{bf(K,"DOMContentLoaded",mj);bf(K,"readystatechange",mj);if(K.createEventObject&&K.documentElement.doScroll){var A=!0;try{A=!B.frameElement}catch(G){}A&&nj()}bf(B,"load",mj)}Tm=!1;"complete"===K.readyState?Vm():bf(B,"load",Vm);a:{if(!xg)break a;B.setInterval(yg,864E5);}
bg=(new Date).getTime();}}
(function(a){a()})(Vq);

})()
