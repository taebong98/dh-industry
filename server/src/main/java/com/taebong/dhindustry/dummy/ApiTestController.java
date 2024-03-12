package com.taebong.dhindustry.dummy;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiTestController {

    @GetMapping("/test/v1")
    public String test1() {
        return "배포 자동화 테스트 v1.";
    }
}
