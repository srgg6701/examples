function alertInfo(app_field){
    alert('No localApp['+app_field+']!\nSee console output');
    console.warn('localApp', window.localApp);
    return false;
}
function checkField(app_field){
    if(!window.localApp[app_field]){
        // returns false
        return alertInfo(app_field);
    }
    return true; 
}
/**
 * Walk through localApp and check if those fields exist
 */
function checkLocalApp(app_fields){
    if(!window.localApp) {
        alert('No localApp!');
    }else{
        if(Array.isArray(app_fields)) {
            for(var i=0, j=app_fields.length; i<j; i++){
                checkField(app_fields[i]);
            }
        } else if(app_fields.indexOf('.')!=-1) {
            var fArr = app_fields.split('.'), // 'prop1.prop2' = [prop1,prop2]
                fields_len = fArr.length,
                cnt=0,
                app,
                checkFArr = function(obj, arrField){ // 
                    //if(checkField(arrField)) { // prop1
                    if(obj[arrField]) { // prop1
                        app = obj[arrField];
                        console.log('%cHave object=>', 'color: blue', app);
                        ++cnt;
                        // if there is next field located even deeper
                        if(app[fArr[cnt]]){ // prop2
                            console.log('Go deeper to ', fArr[cnt]);
                            //checkFArr(arrField[cnt]); // prop1[prop2]
                            return checkFArr(app, fArr[cnt]); // prop1[prop2]
                        }else {
                            console.log('%cNo fArr['+cnt+']', 'color:violet', {fArr:fArr, cnt:cnt});
                            return cnt < fields_len ? false : true; // have come to the successful end
                        }
                    }else{
                        console.log('%cHave NO object=>', 'color: red', app);
                        return false;
                    }
                    return true; // finally we have no the property
                };
            return checkFArr(window.localApp, fArr[0]); // prop1
        } else if(typeof app_fields === 'string'){
            return checkField(app_fields);
        }
    }
    return true;    
}
