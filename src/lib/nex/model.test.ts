import { describe, it, expect } from 'vitest';
import { assumeConversation, closeConversation, transferConversation, isExcelFile, type Conversation } from './model';
const queue: Conversation={id:'c1',contactId:'p1',connectionId:'w1',status:'queue',botPaused:false,createdAt:'2026-10-12T13:24:00Z'};
describe('regras de atendimento',()=>{
 it('pausa o bot ao assumir atendimento humano',()=>{expect(assumeConversation(queue,'a1').botPaused).toBe(true)});
 it('não reativa o bot após encerramento',()=>{expect(closeConversation(assumeConversation(queue,'a1'),'Concluído').botPaused).toBe(true)});
 it('exige motivo de encerramento',()=>{expect(()=>closeConversation(queue,'')).toThrow('motivo')});
 it('impede assumir uma conversa já atribuída',()=>{expect(()=>assumeConversation(assumeConversation(queue,'a1'),'a2')).toThrow('já foi assumido')});
 it('impede transferência para offline',()=>{expect(()=>transferConversation(queue,{id:'a1',name:'Ana',email:'',team:'',online:false})).toThrow('offline')});
 it('aceita Excel xlsx',()=>{expect(isExcelFile('clientes.xlsx')).toBe(true)});
 it('aceita Excel xls',()=>{expect(isExcelFile('clientes.xls')).toBe(true)});
 it('não aceita CSV',()=>{expect(isExcelFile('clientes.csv')).toBe(false)});
});
