CREATE TABLE users ( 
    uid int not null auto_increment primary key, 
    username  VARCHAR(255) NOT NULL unique, 
    email varchar(255) not null unique,
    uPassword INT NOT NULL );


CREATE TABLE manager (
    mid INT NOT NULL AUTO_INCREMENT , 
    mname VARCHAR(255) NOT NULL , 
    uid INT NOT NULL unique, 
    PRIMARY KEY (mid),
    foreign key(uid) references users(uid)on delete cascade);


create table club(
    clubid int primary key auto_increment,
    clubname varchar(60) not null,
    clubformation varchar(10) not null,
    mid int not null unique, 
    foreign key(mid) references manager(mid) on delete cascade);


create table clubformation(
    clubid int primary key,
    gk int ,
    lb int ,
    lcb int ,
    rcb int ,
    rb int ,
    lm int ,
    cm int ,
    rm int ,
    lw int ,
    st int ,
    rw int ,
    sub1 int ,
    sub2 int ,
    sub3 int ,
    sub4 int ,
    foreign key(clubid) references club(clubid) on delete cascade,
    foreign key(gk) references player(pid) on delete cascade,
    foreign key(lb) references player(pid) on delete cascade,
    foreign key(lcb) references player(pid) on delete cascade,
    foreign key(rcb) references player(pid) on delete cascade,
    foreign key(rb) references player(pid) on delete cascade,
    foreign key(lm) references player(pid) on delete cascade,
    foreign key(cm) references player(pid) on delete cascade,
    foreign key(rm) references player(pid) on delete cascade,
    foreign key(lw) references player(pid) on delete cascade,
    foreign key(st) references player(pid) on delete cascade,
    foreign key(rw) references player(pid) on delete cascade,
    foreign key(sub1) references player(pid) on delete cascade,
    foreign key(sub2) references player(pid) on delete cascade,
    foreign key(sub3) references player(pid) on delete cascade,
    foreign key(sub4) references player(pid) on delete cascade
    );


    create table player(
        pid int primary key auto_increment,
        pname varchar(255),
        position varchar(10),
        country varchar(255),
        rating varchar(10),
        image varchar(255)
        );