-- V2__Insert_initial_data.sql
-- Insert default user (password: admin123)
INSERT INTO "user" (email, password, fio, active) 
VALUES ('admin@touroperator.com', '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iCetm9Y5hKqPjzO3fLqUwRvGZS4W', 'Администратор Системы', TRUE);

-- Insert sample tours
INSERT INTO tour (user_id, name, description, program, destination, creation_date)
VALUES 
(1, 'Тур в Таиланд', 'Незабываемое путешествие в Таиланд с посещением Бангкока и Пхукета', 
 'День 1-3: Бангкок. День 4-7: Пхукет. День 8: Вылет.', 
 'Таиланд', CURRENT_TIMESTAMP),
(1, 'Тур в Италию', 'Романтическое путешествие по Италии: Рим, Флоренция, Венеция', 
 'День 1-3: Рим. День 4-6: Флоренция. День 7-9: Венеция.', 
 'Италия', CURRENT_TIMESTAMP),
(1, 'Тур в ОАЭ', 'Роскошный отдых в Дубае с экскурсиями', 
 'День 1-5: Дубай. День 6-7: Абу-Даби.', 
 'ОАЭ', CURRENT_TIMESTAMP);

-- Insert price parameters for tours
INSERT INTO price_parameter (user_id, tour_id, season_type, room_type, meal_plan, base_cost, markup, final_cost, start_date, end_date, is_selected)
VALUES 
(1, 1, 'HIGH', 'Standard', 'Breakfast', 50000.00, 10000.00, 60000.00, '2025-01-01', '2025-03-31', TRUE),
(1, 1, 'LOW', 'Standard', 'Breakfast', 40000.00, 8000.00, 48000.00, '2025-04-01', '2025-06-30', FALSE),
(1, 2, 'HIGH', 'Deluxe', 'Half Board', 80000.00, 15000.00, 95000.00, '2025-05-01', '2025-09-30', TRUE),
(1, 3, 'HIGH', 'Luxury', 'All Inclusive', 120000.00, 25000.00, 145000.00, '2025-01-01', '2025-12-31', TRUE);

-- Insert services for tours
INSERT INTO service (user_id, tour_id, name, type, cost)
VALUES 
(1, 1, 'Экскурсия на остров Пхукет', 'excursion', 5000.00),
(1, 1, 'Трансфер из аэропорта', 'transfer', 2000.00),
(1, 1, 'Медицинская страховка', 'insurance', 1500.00),
(1, 2, 'Экскурсия в Колизей', 'excursion', 3000.00),
(1, 2, 'Экскурсия в Ватикан', 'excursion', 4000.00),
(1, 2, 'Трансфер Рим-Флоренция', 'transfer', 6000.00),
(1, 3, 'Сафари в пустыне', 'excursion', 8000.00),
(1, 3, 'Посещение Бурдж-Халифа', 'excursion', 5000.00),
(1, 3, 'Расширенная страховка', 'insurance', 3000.00);

-- Insert quotes for tours
INSERT INTO quote (user_id, tour_id, type, supplier, race_hotel_code, date, booked_count, available_count)
VALUES 
(1, 1, 'flight', 'Thai Airways', 'TG-2025-001', '2025-02-15', 10, 40),
(1, 1, 'hotel', 'Phuket Resort', 'PH-HOTEL-001', '2025-02-15', 15, 35),
(1, 2, 'flight', 'Alitalia', 'AZ-2025-002', '2025-06-01', 20, 30),
(1, 2, 'hotel', 'Rome Grand Hotel', 'RM-HOTEL-002', '2025-06-01', 25, 25),
(1, 3, 'flight', 'Emirates', 'EK-2025-003', '2025-03-10', 30, 20),
(1, 3, 'hotel', 'Dubai Luxury Hotel', 'DB-HOTEL-003', '2025-03-10', 35, 15);

-- Insert tour packages
INSERT INTO tour_package (user_id, name, description, discount, total_cost)
VALUES 
(1, 'Семейный пакет Таиланд', 'Пакет для семьи из 4 человек со скидкой 15%', 15.00, 200000.00),
(1, 'Романтический уикенд Италия', 'Пакет для двоих с романтическими ужинами', 10.00, 180000.00);

-- Link tour packages with price parameters
INSERT INTO tour_package_price_parameter (tour_package_id, price_parameter_id, order_index)
VALUES 
(1, 1, 1),
(1, 2, 2),
(2, 3, 1);
