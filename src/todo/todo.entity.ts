import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Todo{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: String

    @Column({ default: false })
    completed: Boolean

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date

}