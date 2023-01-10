CREATE TABLE users ( 
    userid int not null auto_increment primary key, 
    username  VARCHAR(255) NOT NULL unique, 
    email varchar(255) not null unique,
    uPassword INT NOT NULL );


CREATE TABLE manager (
    mid INT NOT NULL AUTO_INCREMENT , 
    mname VARCHAR(255) NOT NULL , 
    uid INT NOT NULL , 
    PRIMARY KEY (mid),
    foreign key(uid) references users(uid)on delete cascade);


create table club(
    clubid int primary key auto_increment,
    clubname varchar(60) not null,
    clubformation varchar(10) not null,
    mid int not null, 
    foreign key(mid) references manager(mid) on delete cascade);
