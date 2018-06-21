

/*  Execute this file from the command line by typing:
 *   psql restaurant <seeding.sql
*/

\COPY restaurant FROM './restaurant.txt' DELIMITER '|' 
-- \COPY payment_per_restaurant FROM './paymentPerRestaurant.txt' DELIMITER '|'
-- \COPY tag_per_restaurant FROM './tagPerRestaurant.txt' DELIMITER '|'
