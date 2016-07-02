package ztco.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@RestController
class AdminController {


	@RequestMapping("properties")
	@ResponseBody
	java.util.Properties properties() {
		return System.getProperties();
	}
	
    @RequestMapping( value = "api/projects", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
    @ResponseBody
    public String greeting() {
    	JsonArray projects;
    	projects = getProjects();
        return projects.toString();
    }
    
	private JsonArray getProjects() {
		
		JsonArray projectsList = new JsonArray();
		
		JsonArray vendorIds = new JsonArray();
		vendorIds.add(234567891);
		vendorIds.add(245678912);
		vendorIds.add(256789123);
	
		JsonArray genConIds = new JsonArray();
		genConIds.add(312345678);
		genConIds.add(323456789);
		genConIds.add(334567891);
		
		JsonObject project = new JsonObject();
		project.addProperty("_id","123456789");
		project.addProperty("name","project one");
		project.addProperty("address","1234 Defense Hwy, Crofton MD, 21114");
		project.addProperty("authId","912345678");
		project.add("vendors",vendorIds);
		project.add("contractors",genConIds);
		
		projectsList.add(project);
		
		System.out.println(projectsList.toString());
		
  	    return projectsList;
	}

}
