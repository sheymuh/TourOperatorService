package com.touroperator.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "quotes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Quote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tour_id", nullable = false)
    private Tour tour;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private String supplier;

    @Column(nullable = false)
    private String raceHotelCode;

    @Column(nullable = false)
    private String date;

    @Column(nullable = false)
    private Integer bookedCount = 0;

    @Column(nullable = false)
    private Integer availableCount;
}
