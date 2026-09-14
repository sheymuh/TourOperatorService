package com.touroperator.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api/catalog")
@CrossOrigin(origins = "http://localhost:5173")
public class CatalogController {

    @GetMapping
    public ResponseEntity<String> generateCatalog() {
        // Заглушка - будет реализовано в следующем шаге
        return ResponseEntity.ok("Catalog generated (placeholder)");
    }

    @PostMapping("/email")
    public ResponseEntity<Map<String, String>> sendCatalogByEmail(@RequestBody Map<String, String> requestData) {
        // Заглушка - будет реализовано в следующем шаге
        return ResponseEntity.ok(Map.of("message", "Catalog sent to email"));
    }
}
