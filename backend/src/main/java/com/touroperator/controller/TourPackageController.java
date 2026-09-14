package com.touroperator.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/packages")
@CrossOrigin(origins = "http://localhost:5173")
public class TourPackageController {

    @GetMapping
    public ResponseEntity<List<Map<String, Object>>> getPackages(@AuthenticationPrincipal UserDetails userDetails) {
        // Заглушка - будет реализовано в следующем шаге
        return ResponseEntity.ok(List.of());
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> createPackage(@RequestBody Map<String, Object> packageData) {
        // Заглушка - будет реализовано в следующем шаге
        return ResponseEntity.ok(Map.of("id", 1L, "message", "Package created"));
    }
}
