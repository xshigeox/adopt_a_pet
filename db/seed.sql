INSERT INTO pet_types (type, description) VALUES
('guinea pig', 'Domesticated rodent'),
('reptile', 'Domesticated questionable enemy');

INSERT INTO adoptable_pets (name, img_url, age, vaccination_status, adoption_story, adoption_status, pet_type_id) VALUES
('Helena', 'https://www.reptilecentre.com/images/wmfixed/Reptile/frozen-guinea-pig-v1-495-495.jpg?v=2', 3, TRUE,'Is a sweet guineapig that loves belly rubs.', 'Pending', 1),
('Artemis', 'https://lafeber.com/vet/wp-content/uploads/Veiled-chameleon-by-Mrs-Logic-cropped-square.jpg', 5, FALSE,'Is a chameleon that gets excited at the sight of lettuce.', 'Pending', 2),
('Rocky', 'https://cdn.mos.cms.futurecdn.net/gJJFamQca86CibEeDmegk-1024-80.jpg', 7, FALSE,'Is a ornery guineapig that hates belly rubs.', 'Pending', 1),
('Harry', 'https://img1.grunge.com/img/gallery/the-truth-about-why-there-arent-snakes-in-ireland/intro-1547479326.jpg', 2, TRUE,'Is a snake with a huge appetite for bunnies.', 'Pending', 2),
('Sticky', 'https://live.staticflickr.com/8576/15166690374_6dcf167afa_b.jpg', 1, TRUE,'This guy loves cickets', 'Pending', 2),
('Pancake', 'https://i.pinimg.com/originals/f8/bc/80/f8bc8082646c8bc7e7a87b9d6b02543f.jpg', 4, TRUE,'This guy loves to lounge around', 'Pending', 1),
('Dino', 'https://www.zillarules.com/-/media/images/zilla-na/us/blog-articles/myths-facts-about-bearded-dragon-care/bearded-dragon.jpg?h=350&w=350&la=en&hash=BB45C333590D6C0AF6E426FC419D6A3B224212BE', 3, TRUE,'Great lizard just looking to play.', 'Pending', 2),
('Nibbles', 'https://storage.needpix.com/rsynced_images/guinea-pig-850563_1280.jpg', 1, TRUE, 'He will chew everything, right into your heart', 'Pending', 1),
('Sharkeisha', 'https://i.pinimg.com/236x/33/a2/ee/33a2ee6acf44268d81d9021a654f06e0.jpg', 2, FALSE, 'Baby Shark doo doo doo doo dooo, also likes lettuce', 'Pending', 1),
('ChamWow', 'https://www.cbreptile.com/wp-content/uploads/2017/08/ambilobe-panther-chameleon-breeder.jpg', 4, TRUE, 'Will do what he needs to do to change. Just for you.', 'Pending', 2),
('Brownies', 'https://i.pinimg.com/originals/4d/b4/06/4db406f8c896c14f2a0dfa64e2744e79.jpg', 5, FALSE, 'Loves mice! Not for friends or play play though', 'Pending', 2),
('Napsy', 'https://media.giphy.com/media/ZLF9Loju0q3MA/giphy.gif', 3, FALSE, 'You will see her in your dreams.', 'Pending', 2),
('Connakry', 'https://media1.giphy.com/media/9ryDmaTgXFc90a6fah/giphy.gif', 1, FALSE, 'Ready or not here I come. Oh there you are hiding!! Likes to existentially think of life.', 'Pending', 1),
('Orange Fanta', 'https://cdn.pixabay.com/photo/2014/10/22/19/21/guinea-pig-498824__340.jpg', 3, FALSE, 'Loves carrots and will love you too', 'Pending', 1),
('Megan Thee Guinea Pig', 'https://merryabouttown.com/wp-content/uploads/2019/04/guinea-pig-1325841_1280.jpg', 15, FALSE, 'She got him swerving and breaking the law These windows tinted so nobody saw', 'Pending', 1),
('Boxy Brown', 'https://farm2.staticflickr.com/1889/43040326120_715b221842_b.jpg', 10, FALSE, 'Love lettuce, walking, and beating up the man you jive turkey', 'Pending', 2);

INSERT INTO pet_surrender_applications (name, phone_number, email, pet_name, pet_age, pet_type_id, pet_img_url, vaccination_status, application_status) VALUES
('John', 6178825647, 'JohnM@gmail.com', 'Bob', 2, 2, 'https://1.bp.blogspot.com/-8kABMMyDw_E/UCeYS-CqiRI/AAAAAAAAEmI/09PDWJEOToM/s1600/hd-snake-wallpaper-with-a-attacking-green-snake-wallpapers-backgrounds.jpg', FALSE , 'Pending'),
('Jessica', 6177843921, 'JMatos@gmail.com', 'Tom', 8, 1, 'https://animals.sandiegozoo.org/sites/default/files/2019-04/animals_guineapigs.jpg', TRUE, 'Pending');

INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id) VALUES
('Robert', 6178964573, 'RobertM@gmail.com', 'Rent', 'Pending', 1),
('Erica', 6173902820, 'ESmith@gmail.com', 'Own', 'Pending',3),
('Franklin', 6178930298, 'FranklinJ@gmail.com', 'Rent', 'Pending', 2),
('Nancy', 6172097654, 'NLee@gmail.com', 'Rent', 'Pending',4);

INSERT INTO admin_table (name, username, password) VALUES ('Lucas Green', 'root', 'root');

