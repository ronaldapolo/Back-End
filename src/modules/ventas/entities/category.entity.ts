//Angel Checa 5VA

import { PrimaryColumn,CreateDateColumn,BeforeInsert,BeforeUpdate,Column,DeleteDateColumn,Entity,UpdateDateColumn,OneToMany } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('categories', { schema: 'ventas' })
export class CategoryEntity {

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

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];

  @Column('varchar', {
    name: 'name',
    unique: true,
    comment: 'titulo del producto',
  })
  name: string;

  @Column('varchar', {
    name: 'descripcion',
    comment: 'Descripcion del producto',
    nullable: true,
  })
  descripcion: string;

  @BeforeInsert()
  @BeforeUpdate()
  async setTitle() {
    if (this.name) {
      return;
    }
    this.name = this.name.toUpperCase().trim();
  }

}