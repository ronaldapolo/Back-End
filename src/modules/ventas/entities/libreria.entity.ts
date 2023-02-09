import { LibroEntity } from './libro.entity';
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

export class LibreriaEntity {
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

  @Column('varchar', {
    name: 'NombreLibreriaArea',
    length: '70',
    unique: true,
    comment: 'Nombre del area de la libreria',
  })
  NombreLibreriaArea: string;

  @Column('date', {
    name: 'FechaInicionFuncionLibreria',
    unique: true,
    comment: 'Fecha de Fundacion',
  })
  FechaInicioFuncionLibreria: Date;

  @Column('varchar', {
    name: 'PisoUbicacionLibreria',
    length: '40',
    unique: true,
    comment: 'Piso Ubicacion de Libreria',
  })
  PisoUbicacionLibreria: string;

  @Column('varchar', {
    name: 'NombreJefeDeLibreria',
    length: '20',
    unique: true,
    comment: 'Jefe de Libreria',
  })
  NombreJefeDeLibreria: string;

  // Relaciones
  @ManyToOne(() => LibroEntity, (libro) => libro.libreria)
  librerias: LibroEntity[];
  libros: any;
  // Relaciones

  @BeforeInsert()
  @BeforeUpdate()
  async setName() {
    if (!this.NombreLibreriaArea) {
      return;
    }
    this.NombreLibreriaArea = this.NombreLibreriaArea.toUpperCase();
  }
}
