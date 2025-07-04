import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from './User';
import { Property } from './Property';

export enum ComplaintStatus {
  CREATED = 'created',
  INSPECTING = 'inspecting',
  RESOLVED = 'resolved',
  DENIED = 'denied',
}

@Entity()
export class Complaint {
  @PrimaryGeneratedColumn({ name: 'complaint_id' })
  id: number;

  @ManyToOne(() => User, (user) => user.complaints)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Property, (property) => property.complaints)
  @JoinColumn({ name: 'property_id' })
  property: Property;

  @Column()
  message: string;

  @Column()
  status: ComplaintStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
