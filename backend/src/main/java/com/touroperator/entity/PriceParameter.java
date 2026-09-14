package com.touroperator.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "price_parameters")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PriceParameter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tour_id", nullable = false)
    private Tour tour;

    @Column(nullable = false)
    private String seasonType;

    @Column(nullable = false)
    private String roomType;

    @Column(nullable = false)
    private String mealPlan;

    @Column(nullable = false)
    private BigDecimal baseCost;

    @Column(nullable = false)
    private BigDecimal markup;

    @Column(nullable = false)
    private BigDecimal finalCost;

    @Column(nullable = false)
    private LocalDate startDate;

    @Column(nullable = false)
    private LocalDate endDate;

    @Column(nullable = false)
    private Boolean selected = false;
}
