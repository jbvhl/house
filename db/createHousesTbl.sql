create table houses (
    id serial primary key,
    name varchar(55) not null,
    address varchar(255) not null,
    city VARCHAR(255) not NULL,
    state VARCHAR(255) not null,
    zipcode INTEGER not null
)