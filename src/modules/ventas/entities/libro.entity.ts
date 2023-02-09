import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LibreriaEntity } from './libreria.entity';

export class LibroEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @CreateDateColumn({
    name: 'created_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
  @UpdateDateColumn({
    name: 'updated_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
  @DeleteDateColumn({
    name: 'deleted_date',
    type: 'timestamptz',
    nullable: true,
  })
  deletedAt: Date;
  ///// campos

  @Column('varchar', {
    name: 'NombreLibro',
    length: '40',
    unique: true,
    comment: 'NombreLibro',
  })
  NombreLibro: string;

  @Column('date', {
    name: 'IncioEstrenoLibro',
    unique: true,
    comment: 'Fecha de Estreno del Libro',
  })
  IncioOperacionCocienro: Date;

  @Column('varchar', {
    name: 'GenerodelLibro',
    length: '60',
    unique: true,
    comment: 'Genero del Libro',
  })
  GenerodelLibro: string;

  @Column('varchar', {
    name: 'Estreno Libro',
    length: '60',
    unique: true,
    comment: 'Donde se estreno el Libro',
  })
  ViviendaLibro: string;

  //Relaciones
  @OneToMany(() => LibroEntity, (libreria) => libreria.libro)
  libro: LibreriaEntity;
  libreria: any;
  // Relaciones

  @BeforeInsert()
  @BeforeUpdate()
  async setName() {
    if (!this.NombreLibro) {
      return;
    }
    this.NombreLibro = this.NombreLibro.toUpperCase();
  }
}
