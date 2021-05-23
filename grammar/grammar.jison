%{
    const {Instruction} = require('./instructions.js')
%}

%lex

%options case-sensitive

%%

\s+											// se ignoran espacios en blanco

[0-9]+("."[0-9]+)?\b  	return 'NUMBER';
[0-9]+\b				return 'NUMBER';

"("                     return 'PAR_ABRE';
")"                     return 'PAR_CIERRA';


"+"					    return 'PLUS';
"-"					    return 'MINUS';
"^"                     return 'EXP';
"x"					    return 'MULTIPLICATION';
"/"					    return 'DIVISION';
"%"                     return 'MOD';
<<EOF>>				    return 'EOF';
.					   {}
/lex


%left 'PLUS' 'MINUS' 
%left 'MULTIPLICATION' 'DIVISION'
%left 'EXP' 'MOD'

%left UMINUS



%start ini

%% 

ini
	: expression EOF{
		return $1;
	}
    | error {$$= new Instruction('0','0','error')}
;

expression
    :MINUS expression %prec UMINUS		    {$$= new Instruction(new Instruction('0','0','number'),$2,'-')}
    |expression PLUS expression             {$$= new Instruction($1,$3,'+')} 
    |expression MINUS expression            {$$= new Instruction($1,$3,'-')} 
    |expression MULTIPLICATION expression   {$$= new Instruction($1,$3,'x')}   
    |expression DIVISION expression         {$$= new Instruction($1,$3,'/')} 
    |expression EXP expression              {$$= new Instruction($1,$3,'^')}  
    |expression MOD                         {$$= new Instruction($1,new Instruction('100','0','number'),'/')}
    |PAR_ABRE expression PAR_CIERRA         {$$= $2}
	|NUMBER	                                {$$= new Instruction($1,'0','number')}	
;

