INSERT INTO pet_types (type, description) VALUES
('guinea pig', 'Domesticated rodent'),
('reptile', 'Domesticated questionable enemy');

INSERT INTO adoptable_pets (name, img_url, age, vaccination_status, adoption_story, adoption_status, pet_type_id) VALUES
('Helena', 'https://www.reptilecentre.com/images/wmfixed/Reptile/frozen-guinea-pig-v1-495-495.jpg?v=2', 3, TRUE,'Is a sweet guineapig that loves belly rubs.', 'Pending', 1),
('Artemis', 'https://lafeber.com/vet/wp-content/uploads/Veiled-chameleon-by-Mrs-Logic-cropped-square.jpg', 5, FALSE,'Is a chameleon that gets excited at the sight of lettuce.', 'Pending', 2),
('Rocky', 'https://cdn.mos.cms.futurecdn.net/gJJFamQca86CibEeDmegk-1024-80.jpg', 7, FALSE,'Is a ornery guineapig that hates belly rubs.', 'Pending', 1),
('Harry', 'https://img1.grunge.com/img/gallery/the-truth-about-why-there-arent-snakes-in-ireland/intro-1547479326.jpg', 2, TRUE,'Is a snake with a huge appetite for bunnies.', 'Pending', 2);


INSERT INTO pet_surrender_applications (name, phone_number, email, pet_name, pet_age, pet_type_id, pet_img_url, vaccination_status, application_status) VALUES
('John', 6178825647, 'JohnM@gmail.com', 'Bob', 2, 2, 'snakeimg.com', FALSE , 'pending'),
('Jessica', 6177843921, 'JMatos@gmail.com', 'Tom', 8, 1, 'guineapig2img.com', TRUE, 'pending');

