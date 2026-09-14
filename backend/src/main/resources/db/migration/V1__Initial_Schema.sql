-- V1__Create_users_table.sql
CREATE TABLE "user" (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fio VARCHAR(255) NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- V1__Create_tours_table.sql
CREATE TABLE tour (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    program TEXT,
    destination VARCHAR(255),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- V1__Create_price_parameters_table.sql
CREATE TABLE price_parameter (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    tour_id BIGINT NOT NULL REFERENCES tour(id) ON DELETE CASCADE,
    season_type VARCHAR(50),
    room_type VARCHAR(100),
    meal_plan VARCHAR(100),
    base_cost DECIMAL(10, 2) NOT NULL DEFAULT 0,
    markup DECIMAL(10, 2) NOT NULL DEFAULT 0,
    final_cost DECIMAL(10, 2) NOT NULL DEFAULT 0,
    start_date DATE,
    end_date DATE,
    is_selected BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- V1__Create_services_table.sql
CREATE TABLE service (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    tour_id BIGINT NOT NULL REFERENCES tour(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- excursion, transfer, insurance
    cost DECIMAL(10, 2) NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- V1__Create_quotes_table.sql
CREATE TABLE quote (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    tour_id BIGINT REFERENCES tour(id) ON DELETE SET NULL,
    type VARCHAR(50) NOT NULL, -- flight, hotel
    supplier VARCHAR(255),
    race_hotel_code VARCHAR(255),
    date DATE NOT NULL,
    booked_count INTEGER DEFAULT 0,
    available_count INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- V1__Create_tour_packages_table.sql
CREATE TABLE tour_package (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    discount DECIMAL(5, 2) DEFAULT 0,
    total_cost DECIMAL(10, 2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- V1__Create_tour_package_price_parameter_table.sql
CREATE TABLE tour_package_price_parameter (
    id BIGSERIAL PRIMARY KEY,
    tour_package_id BIGINT NOT NULL REFERENCES tour_package(id) ON DELETE CASCADE,
    price_parameter_id BIGINT NOT NULL REFERENCES price_parameter(id) ON DELETE CASCADE,
    order_index INTEGER NOT NULL,
    UNIQUE(tour_package_id, price_parameter_id)
);

-- Indexes for performance
CREATE INDEX idx_tour_user_id ON tour(user_id);
CREATE INDEX idx_price_parameter_tour_id ON price_parameter(tour_id);
CREATE INDEX idx_service_tour_id ON service(tour_id);
CREATE INDEX idx_quote_tour_id ON quote(tour_id);
CREATE INDEX idx_tour_package_user_id ON tour_package(user_id);
