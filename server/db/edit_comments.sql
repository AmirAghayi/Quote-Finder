
UPDATE "Comments"
SET commentbody=$1
WHERE id=$2
returning *