INSERT INTO "Users" (
    first_name,
    last_name,
    email_address,
    phone_number,
    username,
    password,
    profile_pic
 )
 VALUES
 ($1, $2, $3, $4, $5, $6, $7);