INSERT INTO pet_types (type, description) VALUES
('guinea pig', 'Domesticated rodent'),
('reptile', 'Domesticated questionable enemy');

INSERT INTO adoptable_pets (name, img_url, age, vaccination_status, adoption_story, adoption_status, pet_type_id) VALUES
('Helena', 'guineapigimg.com', 3, TRUE,'Is a sweet guineapig that loves belly rubs.', 'Pending', 1),
('Artemis', 'chameleonimg.com', 5, FALSE,'Is a chameleon that gets excited at the sight of lettuce.', 'Pending', 2),
('Rocky', 'guineapig3img.com', 7, FALSE,'Is a ornery guineapig that hates belly rubs.', 'Pending', 1),
('Harry', 'snake2img.com', 2, TRUE,'Is a snake with a huge appetite for bunnies.', 'Pending', 2);


INSERT INTO pet_surrender_applications (name, phone_number, email, pet_name, pet_age, pet_type_id, pet_img_url, vaccination_status, application_status) VALUES
('John', 6178825647, 'JohnM@gmail.com', 'Bob', 2, 2, 'snakeimg.com', FALSE , 'Not adopted'),
('Jessica', 6177843921, 'JMatos@gmail.com', 'Tom', 8, 1, 'guineapig2img.com', TRUE, 'Not adopted');

