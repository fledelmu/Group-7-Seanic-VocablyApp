DROP TABLE IF EXISTS "public"."student_data_table";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."student_data_table" (
    "id" interval,
    "student_name" text,
    "student_score" int4
);

