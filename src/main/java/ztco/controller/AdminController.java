package ztco.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.JsonObject;

@Controller
class AdminController {

	@RequestMapping("/")
	String index() {
		return "index";
	}

	@RequestMapping("/perf")
	@ResponseBody
	JsonObject getPerfData() {
		JsonObject data = new JsonObject();
		data.addProperty("test", "this is a test");
		return data;
	}

	@RequestMapping("properties")
	@ResponseBody
	java.util.Properties properties() {
		return System.getProperties();
	}
}