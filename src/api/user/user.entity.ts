import { Column, Entity, ObjectID, Unique, ObjectIdColumn, BeforeInsert, Index } from 'typeorm';
import { Exclude } from 'class-transformer';
import * as crypto from 'crypto';

@Entity()
@Unique(["email"])
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @Index({ unique: true })
  email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  @Exclude()
  @Column({ select: false, readonly: true })
  password: string;

  @Column()
  name: string;
}
