SELECT "Comments".*, "Users".username FROM "Comments" 
join "Users" on "Users".id="Comments".user_id
WHERE "Comments".quote_id = $1;