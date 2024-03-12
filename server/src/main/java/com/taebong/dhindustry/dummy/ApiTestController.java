package com.taebong.dhindustry.dummy;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiTestController {
    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello World!";
    }
}
