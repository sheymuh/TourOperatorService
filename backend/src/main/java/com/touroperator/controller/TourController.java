package com.touroperator.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tours")
@CrossOrigin(origins = "http://localhost:5173")
public class TourController {

    @GetMapping
    public ResponseEntity<List<Map<String, Object>>> getTours(@AuthenticationPrincipal UserDetails userDetails) {
        // Заглушка - будет реализовано в следующем шаге
        return ResponseEntity.ok(List.of());
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> createTour(@RequestBody Map<String, Object> tourData) {
        // Заглушка - будет реализовано в следующем шаге
        return ResponseEntity.ok(Map.of("id", 1L, "message", "Tour created"));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> updateTour(@PathVariable Long id, @RequestBody Map<String, Object> tourData) {
        // Заглушка - будет реализовано в следующем шаге
        return ResponseEntity.ok(Map.of("id", id, "message", "Tour updated"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTour(@PathVariable Long id) {
        // Заглушка - будет реализовано в следующем шаге
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/clone")
    public ResponseEntity<Map<String, Object>> cloneTour(@PathVariable Long id) {
        // Заглушка - будет реализовано в следующем шаге
        return ResponseEntity.ok(Map.of("id", id + 1000, "message", "Tour cloned"));
    }
}
