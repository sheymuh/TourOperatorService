package com.touroperator.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/quotes")
@CrossOrigin(origins = "http://localhost:5173")
public class QuoteController {

    @GetMapping
    public ResponseEntity<List<Map<String, Object>>> getQuotes(@AuthenticationPrincipal UserDetails userDetails) {
        // Заглушка - будет реализовано в следующем шаге
        return ResponseEntity.ok(List.of());
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> createQuote(@RequestBody Map<String, Object> quoteData) {
        // Заглушка - будет реализовано в следующем шаге
        return ResponseEntity.ok(Map.of("id", 1L, "message", "Quote created"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuote(@PathVariable Long id) {
        // Заглушка - будет реализовано в следующем шаге
        return ResponseEntity.noContent().build();
    }
}
