# APPagro

Aplicativo mobile desenvolvido em React Native para monitoramento de saúde de animais, com integração de IA e IoT para auxiliar o setor agropecuário no acompanhamento de bovinos.

## ⚙️ Instruções de Execução

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local:

1. *Clone o repositório*:
   git clone https://github.com/codelize/APPagro.git
   

2. *Entre na pasta do projeto*:
   cd APPagro/
   

3. *Instale as dependências*:
   npm install
   

4. *Execute o projeto no Android*


         > Nota: 
         Para se logar, utilize as seguintes credenciais que estão registradas no Firebase. 
         usuário: adminuser@gmail.com 
         senha: SenhaAdmin12@


 💡 
                                     
O aplicativo Agro foi desenvolvido para auxiliar na gestão de animais em fazendas, 
oferecendo monitoramento de saúde e acesso ao histórico de cada animal. Ele também 
recomenda veterinários próximos, ajudando os produtores rurais a terem informações 
essenciais sempre acessíveis. Com integração ao Firebase, o app permite armazenar 
e acessar dados em tempo real sobre animais, consultas e profissionais.

A navegação é prática e intuitiva: o usuário pode acessar rapidamente as principais 
telas (Home e Meet) pela barra inferior e retornar à tela anterior com um gesto de 
arrastar ou clicando no botão de voltar. 


Cada tela possui funcionalidades específicas e bem organizadas:

Home: Exibe avisos recentes e especialistas favoritos, além de permitir o acesso a
outras telas (Meet, Consultas e Vidas) e o logoff.

Meet: Apresenta uma lista de veterinários com a opção de recarregar os cards ao final.

Consultas: Exibe todas as consultas realizadas, com filtros para busca específica.

Vidas: Lista todos os animais com informações básicas e a possibilidade de expandir 
para ver o histórico único de cada animal.

Experiência do Usuário (UX)
Pensando na usabilidade, o app exibe loadings e mensagens de erro claras e destaca os campos que 
precisam de correção, ajudando o usuário a preencher as informações corretamente. 
Indicadores visuais, como bordas em vermelho e mensagens específicas, orientam onde 
ajustar os dados.


<p align="center">
  <img src="https://private-user-images.githubusercontent.com/159176629/382938704-73142ec2-ec99-4b8a-9ab3-281b210e1dae.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NTk3OTIsIm5iZiI6MTczMDc1OTQ5MiwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzA0LTczMTQyZWMyLWVjOTktNGI4YS05YWIzLTI4MWIyMTBlMWRhZS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjIzMTMyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NjI2NGJkMTEzNzMzMzcxOWQzZTM3ZjQ4N2M3MWY5ZTY2ZDUzZmFmY2RlYzlhZTUzMzQzYWU4YmRiNTkwN2IyNiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.Hh-7NtnNLqxpgWq9vs4N4JsKWVbyUdutE9gELmL97Uc" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382944758-05520d45-4119-4128-97b7-147b05fcf1df.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjA5MTEsIm5iZiI6MTczMDc2MDYxMSwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTQ0NzU4LTA1NTIwZDQ1LTQxMTktNDEyOC05N2I3LTE0N2IwNWZjZjFkZi5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjI1MDExWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MjFiNDMzMGQzZjNiOTRiMGU2YzE0ZWE2MThlZWYxYTEyMzg3MTgwNzEwMmEwMDZhNjMyYmQyYWY1NmJkOWU2NiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.woAt8qpCxfEldRJpzEVmoY7sUeyraAjcK_wZQGWvQpo" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938711-130641f8-d0c6-4200-926e-2f9ed50a5672.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NTk3OTIsIm5iZiI6MTczMDc1OTQ5MiwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzExLTEzMDY0MWY4LWQwYzYtNDIwMC05MjZlLTJmOWVkNTBhNTY3Mi5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjIzMTMyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZWY1NDIyY2FhMmQzMDljYTlkMGI3MTZlN2RiZDlhMTZhMTAwZjlhYzlhMmUyOWZmYzJjMDNmY2E2ZTI1YzcxYSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.jeIbrJIbZz3US2o3UGMEEQrsmmVTynq5O4lIoLmlxSw" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938718-ee946f0b-d666-482a-ba04-aaf22f205558.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NTk3OTIsIm5iZiI6MTczMDc1OTQ5MiwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzE4LWVlOTQ2ZjBiLWQ2NjYtNDgyYS1iYTA0LWFhZjIyZjIwNTU1OC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjIzMTMyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ODU0MDY2MGJmNTM5ZWQwNjRlYWVlZDg5M2E3MzJmZTk0ZWY5MjgzODg0ZGMyYTlmNDE0NDAwNTRjYWRkMGE5OCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ._LjHedLanUm9qBUUda1_DV3OlereTqeBY7jPUgEsWPQ" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938722-9b8858ba-2d68-43db-accd-e5bdc10839d8.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NTk3OTIsIm5iZiI6MTczMDc1OTQ5MiwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzIyLTliODg1OGJhLTJkNjgtNDNkYi1hY2NkLWU1YmRjMTA4MzlkOC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjIzMTMyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OTgwMWJjMTQ5ZTY0YWI0NzI5ZDRmN2ZjNThlMWVmZTY0NjIyODFkMWExYmRkYzIyNWEzODQ1NWE2MmQxNzhhNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.OLkcJbmar_3X_MxwWz6Gs-OVljTggdsRmIcKmMJa0a8" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938725-75ecfb2e-ece1-4e8a-bccf-aa0969950330.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NTk3OTIsIm5iZiI6MTczMDc1OTQ5MiwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzI1LTc1ZWNmYjJlLWVjZTEtNGU4YS1iY2NmLWFhMDk2OTk1MDMzMC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjIzMTMyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZjIwMzA0N2Q0ZWJmZThkMGNjNjIyNjRiNTQzYjkwYTNmZmNkNjc5ZWJiMjA3NThhY2E5ZDgwZmE4ZGI0YjVmNSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.NTvNKOKBOoBAFZzQgXDMoOa8Sqr-3s0FFirfTTFvTCw" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938727-d5790931-3fc2-4ace-92f2-1a9532c102eb.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjAxMjQsIm5iZiI6MTczMDc1OTgyNCwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzI3LWQ1NzkwOTMxLTNmYzItNGFjZS05MmYyLTFhOTUzMmMxMDJlYi5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjIzNzA0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MDBlNmEzYTVlYzhmNmU0YWUwOTUwOTA2ZGE0ODcwZGY3Y2VhOTI4ZmQ4YmNmMTkxZTJiZjdlNzMwNDk1ZWQzOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.Y0XAodejS7Im2EtKSD5N9QqcJoWo-55YsSTZDb9L37Y" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938736-b7f27e85-86f2-441c-829d-a3880952042d.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjAxMjQsIm5iZiI6MTczMDc1OTgyNCwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzM2LWI3ZjI3ZTg1LTg2ZjItNDQxYy04MjlkLWEzODgwOTUyMDQyZC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjIzNzA0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9N2RhNmNkODdmZTNlNTM1OGI0YTg3ODE1MmZmMjNlMmJmMmEyNjk3ZWVmMmNhYzZhMmVlN2JiMWQ0ODU3YjkxMSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.hJUE_Qkh7cRfwTd7HIfDYSIJy--9ikIgPPCA91mCweQ" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938731-a50ffc2d-7aeb-4dc3-9e42-3ddfa99fde86.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjAxMjQsIm5iZiI6MTczMDc1OTgyNCwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzMxLWE1MGZmYzJkLTdhZWItNGRjMy05ZTQyLTNkZGZhOTlmZGU4Ni5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjIzNzA0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NTQwMmNmYzVmZmViOTZiNTdjYjhmMjBhYWE4YmIzYzZiODQ0YzVmOGQyYWY4NmQxYTc1MTMxZTk0ZjRlNTI5YyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.sZPW3lOAc6gCfDyoTbP5f8VQvLZrYDUsypwZSiskV8w" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938739-3aae287c-6c48-4581-a7a2-da6e7069ca45.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjAxMjQsIm5iZiI6MTczMDc1OTgyNCwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzM5LTNhYWUyODdjLTZjNDgtNDU4MS1hN2EyLWRhNmU3MDY5Y2E0NS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjIzNzA0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MDBlMWQwZWVmM2U3YWI4MjE3NzhjMjRkYTI4ZjUwZTIxYTk4NDU4MjVkNTgwMWQwMDMwZmU2NmQ1NGQ3YmRjOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.JF-9XAhM7DKR02ozLAsIb9QEIZQSjGUVmoqnn4-P_Lo" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938744-71d47d02-bb53-4d3b-9d73-d652d05b61e9.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjAxMjQsIm5iZiI6MTczMDc1OTgyNCwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzQ0LTcxZDQ3ZDAyLWJiNTMtNGQzYi05ZDczLWQ2NTJkMDViNjFlOS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjIzNzA0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9M2Q1OTVhZTVmYTdlOTUxYTFkNmU1N2U1NTlhNWNlM2NhMTMyMzFkNDc1MWZhYmJiZDUwMDQxZTRjN2Y4MjhlOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.oe9EfpiGEnLfSGAXN5YdHxReIreH_S_SRQk2M7GSzRw" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938747-f51eb70c-5182-4e48-a467-b1afb9ca5b98.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjA0NDAsIm5iZiI6MTczMDc2MDE0MCwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzQ3LWY1MWViNzBjLTUxODItNGU0OC1hNDY3LWIxYWZiOWNhNWI5OC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjI0MjIwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NmU4ZjYyMWE1NzdkM2M5N2Y1ODA5MmJhODBmMWYyYmQ1MmRjZTEyYjE0MmM0ZmQ2ZTA0NjI1YWFkMWU2MDVlNSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.adRDgUuXS7XOJQtx8U6o7mUgM4D8IAbk5gapWtJpyQU" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938753-c3efc71d-72c5-451f-8203-2f161e99d69a.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjA0NDAsIm5iZiI6MTczMDc2MDE0MCwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzUzLWMzZWZjNzFkLTcyYzUtNDUxZi04MjAzLTJmMTYxZTk5ZDY5YS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjI0MjIwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZTMwM2ViMzAzOTliNTI0ODYwOGZlZTU4YzQzMjlhMjVjNGMyZmRiMDA3NGUzZDc3NjNjNGMxMzAxN2E0ZWE3MyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.-qlmyhtBcUCVLRZcmdcq4pDSZQ4EB2fjBn_QthpRFZM" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938758-378d0b3c-44cd-418d-b049-7ca939572900.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjA0NDAsIm5iZiI6MTczMDc2MDE0MCwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzU4LTM3OGQwYjNjLTQ0Y2QtNDE4ZC1iMDQ5LTdjYTkzOTU3MjkwMC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjI0MjIwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ODFhNjlmYzYzZmUyNTA4MmZlY2JlZGNhZjYxNGUxM2I1MzhkY2FiM2EzMmNkMzA2ODk0YTQxMjE0ZGY1MDMwNSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.Wbd7TqDtsJXiUDdUkuVGpV8sYVn_07FA3-tD1dDlGIc" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938761-bad13701-347a-4471-b8f9-ef21f443e3e7.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjA0NDAsIm5iZiI6MTczMDc2MDE0MCwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzYxLWJhZDEzNzAxLTM0N2EtNDQ3MS1iOGY5LWVmMjFmNDQzZTNlNy5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjI0MjIwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MjZkNTM1MWZmZDljMjVjNjYzNjJlNGViZmY1ODJjYzQ0NTI5MmU3NWU3YWM2OTkwMGM1ZDk0MmJlY2ZhYmM2NiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.vcvycJi5-s3FI62zgWqim5ECp6fF_vR-LEuvwO2MYKI" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938764-b6210b03-72a1-4072-a5f3-bf2d67fadfb0.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjA0NDAsIm5iZiI6MTczMDc2MDE0MCwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzY0LWI2MjEwYjAzLTcyYTEtNDA3Mi1hNWYzLWJmMmQ2N2ZhZGZiMC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjI0MjIwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MmE3M2E1Y2Q1ZDk4MmMxNDNlN2MxZWEwNjg1MWQ1N2JmMDNkNzZkYTdhOTAzYjgyZTVkNzBhMzQ3MDBjYTM5NiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.7tGJPSaru7KggPawrvNXmpbRfN1DRZQTzGmtQoMpoPM" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938767-a09d550a-7327-45d1-8b86-2f888e04660a.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjA0NDAsIm5iZiI6MTczMDc2MDE0MCwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzY3LWEwOWQ1NTBhLTczMjctNDVkMS04Yjg2LTJmODg4ZTA0NjYwYS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjI0MjIwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9Y2E2YTg5MWNhMjBjNGEzMDE0MDhhNDEyZmU0M2I1MjQ2MTk2ZGU2OTcwM2M3YzFkMmU1ZTI0MzhiMWY4NDhhYyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.aKVi2wlGkygWJfSGeynqBICFzXDLZb99YlTYxsUfxYI" alt="image" width="250"/>
  <img src="https://private-user-images.githubusercontent.com/159176629/382938770-e891c9a9-467e-4cd6-9d88-76017eaad107.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3NjA0NDAsIm5iZiI6MTczMDc2MDE0MCwicGF0aCI6Ii8xNTkxNzY2MjkvMzgyOTM4NzcwLWU4OTFjOWE5LTQ2N2UtNGNkNi05ZDg4LTc2MDE3ZWFhZDEwNy5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTEwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMDRUMjI0MjIwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YzM3NTJjNzlhNTc2MDM1YThiN2EwYTZiYjVmYWFhMWE5MTAxMGUwNDEyMjAxYTVlN2MxNzkwNjc5Yzg2MzBjYiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.PMN77XTcsCghp447GcNPknYHDkEed7d8q5q7uEKWskA" alt="image" width="250"/>
 
</p>


         > RM E INTEGRANTES 
         RM99487  - Alef Gabriel Alves Silva
         RM99752  - Danilo Araujo Mendonça
         RM98249  - Felipe Sieiro Paim dos Santos 
         RM551509 - Leonardo Ferreira Lizier
         RM99838  - Rodrigo Gonçalves Teixeira Filho
