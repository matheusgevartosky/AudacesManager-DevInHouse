import { TestBed } from '@angular/core/testing';

import { UsuarioNaoAutenticadoGuard } from './usuario-nao-autenticado.guard';

describe('UsuarioNaoAutenticadoGuard', () => {
  let guard: UsuarioNaoAutenticadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuarioNaoAutenticadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
