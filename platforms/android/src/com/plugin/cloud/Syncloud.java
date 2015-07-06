package com.plugin.cloud;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;
import java.lang.*;
import java.util.*;


public class Syncloud extends CordovaPlugin {
    public static Map map =  new HashMap() ;
    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {

        if (action.equals("add")) {

            String id = data.getString(0);
            String username = data.getString(1);
            map.put(id,username);
            callbackContext.success();

            return true;

        } else if (action.equals("update")) {

            String id = data.getString(0);
            String username = data.getString(1);
            if(map.containsKey(id)){
                  map.put(id,username) ;
              }
            callbackContext.success();

            return true;

        } else if (action.equals("get")) {
            String id = data.getString(0);
            callbackContext.success(map.get(id).toString());
            return true;
        } else if (action.equals("getAll")) {
            JSONObject all= new JSONObject();
            for(Iterator i=map.keySet().iterator();i.hasNext();){
                Object key=i.next();
                all.put(key.toString(),map.get(key).toString());
            }
            callbackContext.success(all);
            return true;

        } else if (action.equals("delete")) {
            String id = data.getString(0);
            map.remove(id);
            callbackContext.success();
            return true;
        } else {
            callbackContext.error("this methode is not exist");
            return false;

        }
    }
}
