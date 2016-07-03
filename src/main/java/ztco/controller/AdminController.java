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
    public String projects() {
    	JsonArray projects;
    	projects = getProjects();
        return projects.toString();
    }
    
    @RequestMapping( value = "api/budgets", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
    @ResponseBody
    public String budgets() {
    	JsonArray budgets;
    	budgets = getBudgets();
        return budgets.toString();
    }
    
    @RequestMapping( value = "api/vendors", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
    @ResponseBody
    public String vendors() {
    	JsonArray vendors;
    	vendors = getVendors();
        return vendors.toString();
    }
    
    @RequestMapping( value = "api/contractors", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
    @ResponseBody
    public String genContractors() {
    	JsonArray contractors;
    	contractors = getContractors();
        return contractors.toString();
    }
    
    
	private JsonArray getContractors() {
		
		JsonArray contractorList = new JsonArray();
		
		JsonObject contractor = new JsonObject();
		contractor.addProperty("_id","456789123");
		contractor.addProperty("name","contractor one");
		contractor.addProperty("address","1234 Defense Highway, Crofton MD 21114");
		contractor.addProperty("accountNumber","4567890123");
		
		for (int i=0;i<10;i++) {
			contractorList.add(contractor);
		}

  	    return contractorList;
	}

	private JsonArray getVendors() {
		
		JsonArray vendorList = new JsonArray();
		
		JsonObject vendor = new JsonObject();
		vendor.addProperty("_id","345678912");
		vendor.addProperty("name","vendor one");
		vendor.addProperty("address","1234 Defense Highway, Crofton MD 21114");
		vendor.addProperty("accountNumber","4567890123");
		
		for (int i=0;i<10;i++) {
			vendorList.add(vendor);
		}

  	    return vendorList;

	}

	private JsonArray getBudgets() {
		
		JsonArray budgetList = new JsonArray();
		
		JsonObject budget = new JsonObject();
		budget.addProperty("_id","234567891");
		budget.addProperty("name","budget one");
		budget.addProperty("allocated","1,000,000.00");
		budget.addProperty("onBudget",true);
		budget.addProperty("budget","759,000");
		
		for (int i=0;i<10;i++) {
			budgetList.add(budget);
		}

  	    return budgetList;

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
		
		for (int i=0;i<10;i++) {
			projectsList.add(project);
		}

  	    return projectsList;
	}

}
