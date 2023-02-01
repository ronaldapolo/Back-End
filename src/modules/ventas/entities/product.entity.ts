//Angel Checa 5VA

import { PrimaryColumn,CreateDateColumn,BeforeInsert,BeforeUpdate,Column,DeleteDateColumn,Entity,ManyToMany,UpdateDateColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity('products', { schema: 'ventas' })
export class ProductEntity {

  @PrimaryColumn()
  id: number;

  @CreateDateColumn({
    name: 'created_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })

  createdAt: Date;
  @UpdateDateColumn({
    name: 'updated_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })

  updateAt: Date;
  @DeleteDateColumn({
    name: 'deleted_date',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @ManyToMany(() => CategoryEntity, (category) => category.products)
  category: CategoryEntity;

  @Column('varchar', {
    name: 'title',
    unique: true,
    comment: 'titulo del producto',
  })

  title: string;
  @Column('number', {
    name: 'price',
    comment: 'precio del producto con dos decimales',
  })

  price: number;
  @Column('varchar', {
    name: 'descripcion',
    comment: 'Descripcion del producto',
    nullable: true,
  })
  
  descripcion: string;

  @BeforeInsert()
  @BeforeUpdate()
  async setTitle() {
    if (this.title) {
      return;
    }
    this.title = this.title.toUpperCase().trim();
  }

}