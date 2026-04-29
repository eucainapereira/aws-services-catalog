/* ================================================================
   AWS Services Catalog — popup.js
   ~200 serviços AWS em 17 categorias oficiais
   ================================================================ */

const AWS_DATA = {

  // ── 1. COMPUTE ──────────────────────────────────────────────
  "Compute": {
    icon: "⚡",
    color: "#FF9900",
    services: [
      { name:"Amazon EC2", short:"EC2", emoji:"🖥️",
        description:"Capacidade computacional redimensionável na nuvem. Oferece centenas de tipos de instância (General Purpose, Compute/Memory/Storage Optimized, Accelerated Computing) com controle total sobre SO, rede e armazenamento.",
        useCase:"Hospedar uma aplicação web de e-commerce que escala automaticamente durante o Black Friday usando Auto Scaling Groups e Application Load Balancer.",
        subservices: ["AMI (Amazon Machine Image)", "VPC / Subnets", "Security Groups", "Key Pairs", "Instance Types", "EBS Volumes"],
        docs:"https://docs.aws.amazon.com/ec2/" },
      { name:"AWS Lambda", short:"Lambda", emoji:"λ",
        description:"Executa código serverless em resposta a eventos sem gerenciar servidores. Suporta Node.js, Python, Java, Go, Ruby, .NET e runtimes customizados. Cobra apenas pelo tempo de execução real (milissegundos).",
        useCase:"Processar automaticamente imagens enviadas ao S3, gerando thumbnails e extraindo metadados sem manter servidores ociosos 24/7.",
        subservices: ["Triggers / Events", "Lambda Layers", "Destinations", "Environment Variables", "Provisioned Concurrency"],
        docs:"https://docs.aws.amazon.com/lambda/" },
      { name:"Amazon ECS", short:"ECS", emoji:"🐳",
        description:"Orquestração de containers Docker totalmente gerenciada, integrada com IAM, ALB, CloudWatch e Fargate. Elimina a necessidade de instalar e manter seu próprio cluster de orquestração.",
        useCase:"Orquestrar microsserviços de um sistema bancário (pagamentos, autenticação, notificações) com escalabilidade independente por serviço.",
        subservices: ["Task Definitions", "Clusters & Services", "Fargate / EC2 Launch Type", "Container Insights", "Task Roles"],
        docs:"https://docs.aws.amazon.com/ecs/" },
      { name:"Amazon EKS", short:"EKS", emoji:"☸️",
        description:"Kubernetes gerenciado que elimina a manutenção do plano de controle. Integra-se nativamente com VPC, IAM, ALB Ingress Controller e serviços de observabilidade da AWS.",
        useCase:"Executar uma plataforma de streaming de vídeo em microsserviços Kubernetes aproveitando todo o ecossistema cloud-native with segurança gerenciada pela AWS.",
        subservices: ["Managed Node Groups", "Fargate Profiles", "Add-ons", "Control Plane Logging", "OIDC Provider"],
        docs:"https://docs.aws.amazon.com/eks/" },
      { name:"AWS Fargate", short:"Fargate", emoji:"🚀",
        description:"Computação serverless para containers — elimina completamente o gerenciamento de servidores ou clusters. Determina automaticamente os recursos necessários (CPU/memória) por workload.",
        useCase:"Executar tarefas batch de processamento de dados sem gerenciar instâncias EC2, pagando apenas pelo uso exato dos containers durante a execução.",
        subservices: ["Clusters", "Task Definitions", "Task Execution Roles", "VPC Networking"],
        docs:"https://docs.aws.amazon.com/fargate/" },
      { name:"AWS Elastic Beanstalk", short:"Beanstalk", emoji:"🌱",
        description:"PaaS que automatiza deploy e scaling de aplicações web. Suporta Java, .NET, Python, Node.js, Ruby, Go e PHP. Gerencia automaticamente balanceador de carga, Auto Scaling e monitoramento.",
        useCase:"Fazer deploy de uma API REST Flask sem configurar manualmente VPC, EC2, ALB e grupos de Auto Scaling — ideal para times sem DevOps dedicado.",
        subservices: ["Environments", "Applications", "Application Versions", "Saved Configurations"],
        docs:"https://docs.aws.amazon.com/elasticbeanstalk/" },
      { name:"AWS Batch", short:"Batch", emoji:"📦",
        description:"Processamento em lote totalmente gerenciado que provisiona dinamicamente a capacidade computacional ideal para cada job. Suporta filas, prioridades e dependências entre jobs.",
        useCase:"Processar milhões de transações financeiras diárias distribuindo o trabalho em centenas de instâncias EC2 gerenciadas e encerradas automaticamente.",
        subservices: ["Compute Environments", "Job Queues", "Job Definitions", "Jobs"],
        docs:"https://docs.aws.amazon.com/batch/" },
      { name:"Amazon Lightsail", short:"Lightsail", emoji:"💡",
        description:"Plataforma simplificada com servidores virtuais, bancos de dados, redes e armazenamento a preços fixos mensais. Interface simplificada para usuários sem experiência avançada em AWS.",
        useCase:"Hospedar um site WordPress ou pequena loja virtual com custo previsível e configuração em poucos cliques, sem expertise em infraestrutura.",
        subservices: ["Instances", "Containers", "Databases", "Networking", "Storage"],
        docs:"https://docs.aws.amazon.com/lightsail/" },
      { name:"EC2 Image Builder", short:"Image Builder", emoji:"🏗️",
        description:"Pipeline automatizado para criar, manter e validar imagens de máquina Amazon (AMIs) e imagens de container. Aplica patches de segurança automaticamente e testa as imagens.",
        useCase:"Automatizar a criação de AMIs gold-image mensalmente com os últimos patches de segurança, garantindo que todas as novas instâncias EC2 partam de uma imagem segura e validada.",
        subservices: ["Recipes", "Infrastructure Config", "Distribution Settings", "Pipelines"],
        docs:"https://docs.aws.amazon.com/imagebuilder/" },
      { name:"AWS App Runner", short:"App Runner", emoji:"🏃",
        description:"Serviço totalmente gerenciado que constrói e executa aplicações web containerizadas diretamente de código-fonte ou imagem de container, sem gerenciar infraestrutura.",
        useCase:"Fazer deploy de uma API Node.js diretamente do GitHub em segundos sem escrever Dockerfiles, Kubernetes manifests ou configurar redes e load balancers.",
        subservices: ["Services", "Connections", "VPC Connectors", "Observability Config"],
        docs:"https://docs.aws.amazon.com/apprunner/" },
      { name:"AWS Outposts", short:"Outposts", emoji:"🏭",
        description:"Infraestrutura AWS física entregue no datacenter do cliente, permitindo executar serviços AWS on-premises com a mesma API, ferramentas e hardware proprietário da AWS.",
        useCase:"Executar workloads sensíveis à latência ou com requisitos regulatórios de residência de dados on-premises usando serviços nativos AWS como RDS, EKS e S3.",
        subservices: ["Outposts", "Sites", "Orders", "Capacity Groups"],
        docs:"https://docs.aws.amazon.com/outposts/" },
      { name:"AWS Wavelength", short:"Wavelength", emoji:"〰️",
        description:"Infraestrutura AWS embutida nas redes 5G das operadoras de telecomunicações, permitindo deploy de aplicações com latência ultra-baixa (single-digit milliseconds) para dispositivos 5G.",
        useCase:"Desenvolver aplicações de realidade aumentada ou jogos móveis que exigem latência abaixo de 10ms conectando-se à rede 5G sem passar pela internet pública.",
        subservices: ["Wavelength Zones", "Carrier Gateways", "Edge Locations"],
        docs:"https://docs.aws.amazon.com/wavelength/" },
      { name:"AWS Local Zones", short:"Local Zones", emoji:"📍",
        description:"Extensões das Regiões AWS colocadas próximas a grandes centros populacionais para executar workloads com requisitos de latência muito baixa para usuários locais.",
        useCase:"Executar um estúdio de produção de vídeo virtual em Los Angeles com latência de milissegundos para criadores de conteúdo locais, usando instâncias EC2 na Local Zone de LA.",
        subservices: ["Local Zones", "VPC Subnets", "Direct Connect Integration"],
        docs:"https://docs.aws.amazon.com/local-zones/" },
      { name:"AWS Serverless Application Repository", short:"SAR", emoji:"📚",
        description:"Repositório gerenciado de aplicações serverless prontas para uso. Permite descobrir, implantar e publicar aplicações compostas por funções Lambda, APIs e outros recursos serverless.",
        useCase:"Adicionar em minutos uma solução de thumbnailing de imagens ao seu projeto, implantando um padrão de referência do repositório em vez de desenvolvê-lo do zero.",
        subservices: ["Applications", "Application Versions", "Deployments"],
        docs:"https://docs.aws.amazon.com/serverlessrepo/" },
      { name:"AWS Nitro Enclaves", short:"Nitro Enclaves", emoji:"🔒",
        description:"Ambientes computacionais isolados e altamente seguros criados a partir de instâncias EC2 para processar dados ultrasensíveis. Sem acesso a rede, armazenamento persistente ou operador.",
        useCase:"Processar chaves criptográficas, dados biométricos e informações de cartão de crédito em um ambiente completamente isolado dentro de instâncias EC2 certificadas.",
        subservices: ["Enclaves", "Attestation", "Enclave Images (EIF)"],
        docs:"https://docs.aws.amazon.com/enclaves/" },
      { name:"AWS Parallel Computing Service", short:"PCS", emoji:"🧮",
        description:"Serviço gerenciado de HPC (High Performance Computing) que simplifica a criação e operação de clusters de computação de alto desempenho usando o scheduler HPC mais utilizado do mundo.",
        useCase:"Executar simulações de dinâmica de fluidos computacional (CFD) ou modelagem climática em clusters de centenas de instâncias HPC sem gerenciar o software do cluster.",
        subservices: ["Clusters", "Schedulers", "Compute Node Groups", "Login Nodes"],
        docs:"https://docs.aws.amazon.com/pcs/" },
      { name:"Amazon EC2 Auto Scaling", short:"Auto Scaling", emoji:"📈",
        description:"Escala automaticamente a quantidade de instâncias EC2 baseado em políticas de utilização (CPU, rede, métricas customizadas), agendamento ou modelos preditivos com ML.",
        useCase:"Manter entre 4 e 40 instâncias EC2 de um sistema de pedidos, escalando automaticamente com base na CPU e reduzindo 60% do custo com capacidade ociosa em horários de baixa.",
        subservices: ["Auto Scaling Groups", "Launch Configurations", "Scaling Policies", "Scheduled Actions"],
        docs:"https://docs.aws.amazon.com/autoscaling/" },
      { name:"VMware Cloud on AWS", short:"VMware Cloud", emoji:"☁️",
        description:"Infraestrutura VMware nativa (vSphere, vSAN, NSX) executando em bare metal na nuvem AWS. Permite migrar ou estender datacenters VMware sem re-escrever aplicações.",
        useCase:"Migrar 500 VMs VMware de um datacenter on-premises para a AWS sem refatorar, mantendo ferramentas vCenter e networking NSX existentes com acesso a serviços nativos AWS.",
        subservices: ["SDDCs", "Clusters", "Hosts", "vCenter Integration"],
        docs:"https://docs.aws.amazon.com/vmware/" }
    ]
  },

  // ── 2. STORAGE ──────────────────────────────────────────────
  "Storage": {
    icon: "🗄️",
    color: "#3F8624",
    services: [
      { name:"Amazon S3", short:"S3", emoji:"🪣",
        description:"Armazenamento de objetos com durabilidade de 99.999999999% (11 noves), escalabilidade ilimitada e múltiplas classes de armazenamento (Standard, Intelligent-Tiering, Glacier). Suporta versionamento, lifecycle rules e replicação cross-region.",
        useCase:"Servir como origin de uma CDN CloudFront para assets estáticos (imagens, CSS, JS) de um site com milhões de usuários globais, com custo mínimo por GB.",
        subservices: ["Buckets & Objects", "Storage Classes", "Lifecycle Policies", "Bucket Policies / ACLs", "Versioning", "Replication"],
        docs:"https://docs.aws.amazon.com/s3/" },
      { name:"Amazon EBS", short:"EBS", emoji:"💾",
        description:"Volumes de armazenamento em bloco de alta performance para instâncias EC2. Tipos disponíveis: gp3, io2 Block Express (SSD), st1 e sc1 (HDD). Suporta snapshots automáticos e criptografia.",
        useCase:"Persistir um banco de dados PostgreSQL de produção em volume SSD io2 de alta IOPS, com snapshots automáticos diários para recuperação de desastres.",
        subservices: ["Volumes", "Snapshots", "Lifecycle Manager (DLM)", "Multi-Attach", "Encryption"],
        docs:"https://docs.aws.amazon.com/ebs/" },
      { name:"Amazon EFS", short:"EFS", emoji:"📂",
        description:"Sistema de arquivos NFS elástico que escala automaticamente de GB a PB. Pode ser montado simultaneamente em milhares de instâncias EC2 e containers ECS/EKS em múltiplas AZs.",
        useCase:"Compartilhar uploads de usuários entre 50 instâncias EC2 de uma aplicação web sem sincronização manual — todas leem e escrevem no mesmo sistema de arquivos.",
        subservices: ["File Systems", "Mount Targets", "Access Points", "Lifecycle Management", "Replication"],
        docs:"https://docs.aws.amazon.com/efs/" },
      { name:"Amazon S3 Glacier", short:"Glacier", emoji:"🏔️",
        description:"Armazenamento de baixo custo para arquivamento de dados raramente acessados. Oferece S3 Glacier Instant Retrieval, Flexible Retrieval (minutos-horas) e Deep Archive (até 12h, menor custo da AWS).",
        useCase:"Arquivar logs de auditoria e registros médicos por 7+ anos para conformidade regulatória com custo mínimo, com acesso apenas em auditorias ou investigações.",
        subservices: ["Vaults", "Archives", "Vault Lock Policies", "Data Retrieval Policies", "S3 Integration"],
        docs:"https://docs.aws.amazon.com/amazonglacier/" },
      { name:"AWS Storage Gateway", short:"Storage GW", emoji:"🔌",
        description:"Integração híbrida entre datacenter on-premises e armazenamento AWS. Modos: File Gateway (S3/NFS/SMB), Tape Gateway (backup virtual) e Volume Gateway (iSCSI block).",
        useCase:"Substituir uma biblioteca de fitas físicas de backup por um Tape Gateway virtual que envia automaticamente os backups para o S3/Glacier, mantendo compatibilidade com o software de backup existente.",
        subservices: ["File Gateway", "Volume Gateway", "Tape Gateway", "Hardware Appliance"],
        docs:"https://docs.aws.amazon.com/storagegateway/" },
      { name:"AWS Backup", short:"Backup", emoji:"🛡️",
        description:"Gerenciamento centralizado e automatizado de backup de recursos AWS (EC2, RDS, DynamoDB, EFS, FSx, Storage Gateway). Define políticas de retenção e conformidade em toda a organização.",
        useCase:"Criar uma política de RPO de 1 hora e retenção de 90 dias que proteja automaticamente todos os bancos de dados RDS e volumes EBS em múltiplas contas AWS.",
        subservices: ["Backup Plans", "Backup Vaults", "Restore Testing", "Legal Holds"],
        docs:"https://docs.aws.amazon.com/backup/" },
      { name:"Amazon FSx for Windows", short:"FSx Windows", emoji:"🪟",
        description:"Sistema de arquivos Windows Server totalmente gerenciado com suporte completo a SMB, DFS, Active Directory e cotas de usuário. Construído sobre SSDs de alta performance com backups automáticos.",
        useCase:"Migrar um file server Windows on-premises com 50TB de dados compartilhados para a nuvem, mantendo compatibilidade total com aplicações que usam SMB e Active Directory.",
        subservices: ["File Systems", "Backups", "DFS Namespaces", "Shadow Copies"],
        docs:"https://docs.aws.amazon.com/fsx/latest/WindowsGuide/" },
      { name:"Amazon FSx for Lustre", short:"FSx Lustre", emoji:"⚡",
        description:"Sistema de arquivos de alta performance baseado em Lustre para workloads HPC, ML e processamento de vídeo. Integra-se nativamente com S3, podendo cachear dados do S3 localmente.",
        useCase:"Treinar modelos de deep learning com acesso a terabytes de dados de treinamento no S3 com throughput de centenas de GB/s, sem copiar os dados previamente.",
        subservices: ["Persistent/Scratch Storage", "S3 Integration", "Data Repository Associations", "Backups"],
        docs:"https://docs.aws.amazon.com/fsx/latest/LustreGuide/" },
      { name:"Amazon FSx for NetApp ONTAP", short:"FSx ONTAP", emoji:"🗃️",
        description:"Sistema de arquivos NetApp ONTAP totalmente gerenciado com suporte a NFS, SMB e iSCSI. Oferece recursos avançados como deduplificação, compressão, snapshots e replicação SnapMirror.",
        useCase:"Migrar aplicações empresariais que dependem de recursos específicos do ONTAP (snapshots granulares, deduplicação) sem refatorar o código ou alterar protocolos de armazenamento.",
        subservices: ["Storage Virtual Machines", "Volumes", "Snapshots", "SnapMirror"],
        docs:"https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/" },
      { name:"Amazon FSx for OpenZFS", short:"FSx OpenZFS", emoji:"🐡",
        description:"Sistema de arquivos OpenZFS totalmente gerenciado com snapshots instantâneos, clones, compressão e capacidade de escalabilidade vertical. Compatível com uma vasta gama de aplicações Linux/Unix.",
        useCase:"Migrar volumes de desenvolvimento e CI/CD que dependem de snapshots instantâneos e clones de volume para criar ambientes de teste isolados em segundos.",
        subservices: ["File Systems", "Volumes", "Snapshots", "Backups"],
        docs:"https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/" },
      { name:"AWS Snow Family", short:"Snow Family", emoji:"❄️",
        description:"Dispositivos físicos para transferência massiva de dados (Snowcone: 8TB, Snowball Edge: 80TB, Snowmobile: 100PB). Também suporta computação edge em ambientes desconectados.",
        useCase:"Migrar 500TB de dados de uma planta industrial sem conexão de internet estável para a AWS usando Snowball Edge, evitando meses de transferência via rede.",
        subservices: ["Snowcone", "Snowball Edge", "Snowmobile", "Data Transfer Jobs"],
        docs:"https://docs.aws.amazon.com/snowball/" },
      { name:"AWS Transfer Family", short:"Transfer Family", emoji:"↔️",
        description:"Serviço totalmente gerenciado de transferência de arquivos usando os protocolos SFTP, AS2, FTPS e FTP, integrado diretamente com S3 e EFS como backend de armazenamento.",
        useCase:"Integrar com parceiros comerciais que enviam arquivos EDI via SFTP, redirecionando os uploads automaticamente para S3 sem alterar os processos dos parceiros.",
        subservices: ["SFTP/FTPS/FTP Servers", "Users", "Workflows"],
        docs:"https://docs.aws.amazon.com/transfer/" },
      { name:"AWS DataSync", short:"DataSync", emoji:"🔄",
        description:"Transferência automatizada e acelerada de dados entre on-premises e AWS (S3, EFS, FSx) ou entre serviços AWS. Transfere dados até 10x mais rápido com compressão e verificação de integridade.",
        useCase:"Migrar 200TB de arquivos de um NAS on-premises para o EFS em semanas, com sincronização incremental automática e verificação de integridade pós-transferência.",
        subservices: ["Tasks", "Locations", "Agents", "Filtering"],
        docs:"https://docs.aws.amazon.com/datasync/" }
    ]
  },

  // ── 3. DATABASE ─────────────────────────────────────────────
  "Database": {
    icon: "🗃️",
    color: "#0073BB",
    services: [
      { name:"Amazon RDS", short:"RDS", emoji:"🐘",
        description:"Banco de dados relacional gerenciado para MySQL, PostgreSQL, MariaDB, Oracle e SQL Server. Automatiza provisionamento, patching, backups, Multi-AZ failover e réplicas de leitura.",
        useCase:"Hospedar o banco PostgreSQL de um sistema hospitalar com alta disponibilidade Multi-AZ, failover automático em menos de 60s e backups diários criptografados com retenção de 35 dias.",
        subservices: ["DB Instances", "Multi-AZ Deployment", "Read Replicas", "DB Snapshots", "Option Groups", "Parameter Groups"],
        docs:"https://docs.aws.amazon.com/rds/" },
      { name:"Amazon Aurora", short:"Aurora", emoji:"🌌",
        description:"Banco relacional cloud-native compatível com MySQL e PostgreSQL com performance 5x (MySQL) e 3x (PostgreSQL) superiores. Armazenamento autoscale de 10GB a 128TB com 6 cópias em 3 AZs.",
        useCase:"Migrar um sistema crítico de vendas para Aurora PostgreSQL com Global Database, replicando para uma segunda região com lag abaixo de 1 segundo para DR.",
        subservices: ["Aurora Serverless v2", "Global Database", "Backtrack", "Parallel Query", "Read Replicas (up to 15)"],
        docs:"https://docs.aws.amazon.com/aurora/" },
      { name:"Amazon DynamoDB", short:"DynamoDB", emoji:"⚡",
        description:"Banco de dados NoSQL serverless com performance de single-digit milliseconds em qualquer escala. Suporta key-value e documentos, com tabelas globais multi-região e streams em tempo real.",
        useCase:"Armazenar sessões e perfis de usuários de um app mobile com 50M de usuários ativos, garantindo latência de <10ms independente de picos de acesso.",
        subservices: ["Tables / Items", "GSI & LSI Indexes", "DynamoDB Streams", "DAX (Accelerator)", "Global Tables", "TTL (Time to Live)"],
        docs:"https://docs.aws.amazon.com/dynamodb/" },
      { name:"Amazon ElastiCache", short:"ElastiCache", emoji:"⚡",
        description:"Cache in-memory gerenciado compatível com Redis e Memcached. Reduz a latência de leitura de bancos de dados de segundos para microssegundos, com clustering e failover automático.",
        useCase:"Cachear resultados de queries analíticas complexas do RDS em Redis para reduzir o tempo de resposta de um dashboard executivo de 8 segundos para 50 milissegundos.",
        subservices: ["Redis/Memcached Clusters", "Global Datastore", "Replication Groups", "Parameter Groups"],
        docs:"https://docs.aws.amazon.com/elasticache/" },
      { name:"Amazon Redshift", short:"Redshift", emoji:"📊",
        description:"Data warehouse em nuvem de escala de petabytes com processamento massivamente paralelo (MPP). Suporta SQL padrão, integra-se com S3 via Redshift Spectrum e usa ML para otimização automática.",
        useCase:"Consolidar dados de vendas e marketing de 20 sistemas distintos para análises de BI, consultando bilhões de linhas em segundos para relatórios executivos.",
        subservices: ["RA3 Nodes", "Redshift Spectrum", "Serverless", "Data Sharing", "WLM (Workload Mgmt)"],
        docs:"https://docs.aws.amazon.com/redshift/" },
      { name:"Amazon DocumentDB", short:"DocumentDB", emoji:"📄",
        description:"Banco de dados de documentos gerenciado compatível com MongoDB 3.6, 4.0 e 5.0. Armazenamento que auto-escala até 64TB com 6 cópias dos dados em 3 AZs.",
        useCase:"Migrar um banco de dados MongoDB on-premises de um catálogo de produtos com esquemas flexíveis para a nuvem sem alterar o código da aplicação.",
        subservices: ["Clusters & Instances", "Replica Sets", "Snapshots", "Global Clusters"],
        docs:"https://docs.aws.amazon.com/documentdb/" },
      { name:"Amazon Neptune", short:"Neptune", emoji:"🕸️",
        description:"Banco de dados de grafos gerenciado e otimizado para grafos altamente conectados. Suporta Gremlin (Property Graph), SPARQL (RDF) e openCypher. Armazena bilhões de relacionamentos.",
        useCase:"Construir um sistema de detecção de fraudes que mapeia relações entre contas, dispositivos e transações para identificar redes de contas fraudulentas em tempo real.",
        subservices: ["Clusters", "Gremlin/SPARQL Engine", "Graph Data Models", "Snapshots"],
        docs:"https://docs.aws.amazon.com/neptune/" },
      { name:"Amazon Keyspaces", short:"Keyspaces", emoji:"🗝️",
        description:"Banco de dados Apache Cassandra totalmente gerenciado e serverless, compatível com drivers CQL. Auto-escala throughput e armazenamento automaticamente, sem gerenciar clusters Cassandra.",
        useCase:"Migrar uma aplicação IoT que usa Cassandra on-premises para a nuvem sem alterar código de aplicação, eliminando a operação de clusters Cassandra de alta disponibilidade.",
        subservices: ["Keyspaces", "Tables", "CQL Integration", "Serverless/Provisioned"],
        docs:"https://docs.aws.amazon.com/keyspaces/" },
      { name:"Amazon Timestream", short:"Timestream", emoji:"⏱️",
        description:"Banco de dados de séries temporais serverless e totalmente gerenciado para IoT e telemetria operacional. Armazena trilhões de eventos por dia, 1000x mais rápido e 1/10 do custo do RDBMS.",
        useCase:"Ingerir e analisar métricas de 10 milhões de sensores industriais em tempo real, detectando anomalias e calculando médias móveis com queries SQL nativas.",
        subservices: ["Databases", "Tables", "Scheduled Queries", "Magnetic Tiering"],
        docs:"https://docs.aws.amazon.com/timestream/" },
      { name:"Amazon QLDB", short:"QLDB", emoji:"📒",
        description:"Banco de dados ledger totalmente gerenciado com journal imutável e verificável criptograficamente. Registra o histórico completo de todas as mudanças de dados, não podendo ser apagado ou alterado.",
        useCase:"Rastrear o histórico completo de transferências de ativos em uma plataforma de supply chain, provando criptograficamente que os registros não foram adulterados.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/qldb/" },
      { name:"Amazon MemoryDB for Redis", short:"MemoryDB", emoji:"🧠",
        description:"Banco de dados in-memory durável e compatível com Redis, ideal para workloads que exigem dados primários ultra-rápidos. Oferece durabilidade com journal Multi-AZ — dados não são perdidos em falhas.",
        useCase:"Usar como banco de dados principal (não apenas cache) de uma aplicação de leaderboard de jogos online que exige latência de microssegundos com zero perda de dados.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/memorydb/" }
    ]
  },

  // ── 4. NETWORKING ────────────────────────────────────────────
  "Networking": {
    icon: "🌐",
    color: "#8C4FFF",
    services: [
      { name:"Amazon VPC", short:"VPC", emoji:"🏠",
        description:"Rede virtual privada isolada logicamente dentro da AWS. Permite definir sub-redes, tabelas de roteamento, NAT Gateways, Internet Gateways e ACLs. Suporte a IPv4 e IPv6.",
        useCase:"Criar arquitetura de rede em camadas com subnets públicas para ALB, privadas para aplicação e isoladas para RDS, replicando a segmentação de um datacenter físico.",
        subservices: ["Subnets", "Route Tables", "Internet Gateways", "NAT Gateways", "Security Groups / NACLs", "Peering Connections"],
        docs:"https://docs.aws.amazon.com/vpc/" },
      { name:"Amazon CloudFront", short:"CloudFront", emoji:"⚡",
        description:"CDN global com 400+ pontos de presença que distribui conteúdo com latência mínima. Protege contra DDoS, suporta HTTPS/HTTP2/HTTP3, Lambda@Edge e origens customizadas.",
        useCase:"Distribuir globalmente uma plataforma de streaming de vídeo, entregando conteúdo do ponto de presença mais próximo do usuário e reduzindo latência em até 70%.",
        subservices: ["Distributions", "Origins & Origin Groups", "Behaviors / TTL", "Edge Locations", "Function / Lambda@Edge", "WAF Integration"],
        docs:"https://docs.aws.amazon.com/cloudfront/" },
      { name:"Amazon Route 53", short:"Route 53", emoji:"🗺️",
        description:"DNS gerenciado com alta disponibilidade e roteamento inteligente por latência, geolocalização, peso e failover. Registra domínios e monitora saúde de endpoints.",
        useCase:"Configurar failover automático que redireciona tráfego para região de DR quando a região primária cai, garantindo RPO/RTO menores que 60 segundos.",
        subservices: ["Hosted Zones", "Record Sets", "Health Checks", "Domain Registration", "Traffic Flow", "Resolver"],
        docs:"https://docs.aws.amazon.com/route53/" },
      { name:"Elastic Load Balancing", short:"ELB", emoji:"⚖️",
        description:"Distribui tráfego entre múltiplos destinos. ALB para HTTP/HTTPS/gRPC por URI, NLB para TCP/UDP de ultra alta performance, GLB para appliances de segurança de rede.",
        useCase:"Distribuir requisições HTTP entre instâncias EC2 de uma API, removendo automaticamente instâncias não saudáveis das verificações de saúde em tempo real.",
        subservices: ["ALB", "NLB", "GLB", "Target Groups", "Listeners"],
        docs:"https://docs.aws.amazon.com/elasticloadbalancing/" },
      { name:"AWS Direct Connect", short:"Direct Connect", emoji:"🔗",
        description:"Conexão de rede privada e dedicada entre datacenter on-premises e AWS com 1Gbps a 100Gbps de largura de banda e latência consistente, evitando a internet pública.",
        useCase:"Conectar o datacenter principal de um banco à AWS com baixa latência e alta segurança para uma arquitetura híbrida de processamento de transações financeiras.",
        subservices: ["Connections", "Virtual Interfaces (VIF)", "Direct Connect Gateways", "Locations"],
        docs:"https://docs.aws.amazon.com/directconnect/" },
      { name:"AWS Transit Gateway", short:"Transit GW", emoji:"🌉",
        description:"Hub central que interconecta VPCs e redes on-premises no modelo hub-and-spoke. Suporta roteamento multicast, segmentação de rede e peering entre regiões.",
        useCase:"Gerenciar a conectividade de rede de 100 VPCs em uma empresa com múltiplas unidades de negócio, centralizando roteamento e inspeções de segurança.",
        subservices: ["Transit Gateways", "Attachments", "Route Tables", "Multicast"],
        docs:"https://docs.aws.amazon.com/transit-gateway/" },
      { name:"AWS WAF", short:"WAF", emoji:"🛡️",
        description:"Firewall de aplicações web que filtra requisições HTTP/HTTPS por regras IP, geo-bloqueio, rate-limiting, SQL injection, XSS, bots e regras de reputação de IPs.",
        useCase:"Proteger uma API de pagamentos contra ataques de injeção SQL e scraping automatizado, bloqueando 10.000 requisições maliciosas por hora sem impactar usuários legítimos.",
        subservices: ["Web ACLs", "Rule Groups", "IP Sets", "Regex Pattern Sets"],
        docs:"https://docs.aws.amazon.com/waf/" },
      { name:"Amazon API Gateway", short:"API Gateway", emoji:"🚪",
        description:"Serviço totalmente gerenciado para criar, publicar e proteger APIs REST, HTTP e WebSocket em qualquer escala. Suporta autorização, throttling, caching e transformação de requisições.",
        useCase:"Expor funções Lambda como uma API RESTful para um aplicativo mobile, com autenticação Cognito, rate limiting por usuário e cache de 5 minutos para endpoints estáticos.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/apigateway/" },
      { name:"AWS Global Accelerator", short:"Global Accelerator", emoji:"🌍",
        description:"Melhora a performance de aplicações globais usando a rede backbone privada da AWS (anycast), redirecionando usuários para o endpoint mais próximo e saudável.",
        useCase:"Reduzir a latência de um jogo online global em 40%, roteando jogadores automaticamente pelo backbone AWS até a região mais próxima em vez da internet pública.",
        subservices: ["Accelerators", "Listeners", "Endpoint Groups", "Standard/Custom Filters"],
        docs:"https://docs.aws.amazon.com/global-accelerator/" },
      { name:"AWS PrivateLink", short:"PrivateLink", emoji:"🔐",
        description:"Conectividade privada entre VPCs e serviços AWS sem expor tráfego à internet pública. Permite expor serviços SaaS para clientes via endpoint privado na VPC deles.",
        useCase:"Conectar com segurança um serviço de pagamento externo SaaS à VPC da sua aplicação sem usar internet pública ou VPN, eliminando riscos de exposição de dados.",
        subservices: ["VPC Endpoints", "Endpoint Services", "Interface Endpoints"],
        docs:"https://docs.aws.amazon.com/vpc/latest/privatelink/" },
      { name:"AWS VPN", short:"VPN", emoji:"🔒",
        description:"Conexão segura criptografada entre datacenter/escritório on-premises e a AWS. Oferece Site-to-Site VPN (IPsec) e Client VPN (OpenVPN) para acesso remoto de usuários.",
        useCase:"Permitir que desenvolvedores remotos acessem recursos em subnets privadas (RDS, ElastiCache) via Client VPN com autenticação por certificado mutual TLS.",
        subservices: ["Site-to-Site VPN", "Virtual Private Gateways", "Customer Gateways", "VPN Tunnels"],
        docs:"https://docs.aws.amazon.com/vpn/" },
      { name:"AWS App Mesh", short:"App Mesh", emoji:"🕸️",
        description:"Service mesh que fornece visibilidade de ponta a ponta e controles de tráfego para microsserviços rodando em ECS, EKS, EC2 ou Kubernetes. Usa o proxy Envoy como sidecar.",
        useCase:"Implementar circuit breaker, retries automáticos e rastreamento distribuído entre 20 microsserviços sem modificar o código da aplicação, apenas configurando o mesh.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/app-mesh/" },
      { name:"AWS Network Firewall", short:"Network Firewall", emoji:"🔥",
        description:"Firewall de rede gerenciado e com estado para inspeção profunda de pacotes em VPCs. Suporta regras baseadas em domínio, protocolo, porta e assinaturas Suricata.",
        useCase:"Inspecionar todo o tráfego de saída de uma VPC para internet, bloqueando conexões a domínios maliciosos conhecidos e exfiltrações de dados, sem gerenciar appliances físicos.",
        subservices: ["Firewalls", "Rule Groups", "Logging Config", "Policies"],
        docs:"https://docs.aws.amazon.com/network-firewall/" },
      { name:"Amazon VPC Lattice", short:"VPC Lattice", emoji:"🔷",
        description:"Plano de rede de serviços (service networking) que simplifica a comunicação, a segurança e o monitoramento entre serviços e contas AWS, sem necessidade de service mesh complexo.",
        useCase:"Conectar microsserviços em diferentes contas AWS e VPCs com políticas de autorização IAM consistentes, sem configurar VPC peering ou Transit Gateway manualmente.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/vpc-lattice/" }
    ]
  },

  // ── 5. SECURITY & COMPLIANCE ─────────────────────────────────
  "Security & Compliance": {
    icon: "🔐",
    color: "#DD344C",
    services: [
      { name:"AWS IAM", short:"IAM", emoji:"👤",
        description:"Gerencia acesso a recursos AWS com políticas JSON granulares para usuários, grupos, roles e serviços. Suporta MFA, federação de identidade SAML/OIDC e permission boundaries.",
        useCase:"Criar um role IAM com permissão mínima (least privilege) para Lambda: acesso de leitura apenas ao bucket S3 específico e escrita no CloudWatch Logs, nada mais.",
        subservices: ["Users & Groups", "Roles", "Policies (JSON)", "MFA", "Identity Providers (SAML/OIDC)", "Access Analyzer"],
        docs:"https://docs.aws.amazon.com/iam/" },
      { name:"AWS KMS", short:"KMS", emoji:"🔑",
        description:"Criação e controle de chaves de criptografia gerenciadas usando HSMs validados FIPS 140-2. Integra-se com 100+ serviços AWS para criptografia transparente de dados em repouso.",
        useCase:"Criptografar dados de pacientes em RDS e S3 com chaves gerenciadas pelo cliente (CMK), auditando cada uso da chave no CloudTrail para conformidade LGPD/HIPAA.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/kms/" },
      { name:"AWS Secrets Manager", short:"Secrets Mgr", emoji:"🗝️",
        description:"Protege e rotaciona automaticamente segredos (senhas de BD, chaves de API, tokens) eliminando credenciais hardcoded no código. Rotação automática sem downtime para RDS, Redshift e outros.",
        useCase:"Armazenar credenciais do RDS de produção com rotação automática a cada 30 dias — aplicações obtêm a senha atual via API sem nenhuma configuração manual.",
        subservices: ["Secrets", "Rotation Lambda", "Resource Policies"],
        docs:"https://docs.aws.amazon.com/secretsmanager/" },
      { name:"Amazon GuardDuty", short:"GuardDuty", emoji:"🛡️",
        description:"Detecção de ameaças com ML que analisa CloudTrail, VPC Flow Logs, DNS e EKS audit logs em busca de comportamentos maliciosos, mineração de criptomoedas e exfiltração de dados.",
        useCase:"Detectar automaticamente quando uma instância EC2 começa a comunicar com IPs de C&C de malware ou quando credenciais IAM são usadas de localização geograficamente impossível.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/guardduty/" },
      { name:"AWS Shield", short:"Shield", emoji:"🔰",
        description:"Proteção DDoS gerenciada em dois níveis: Standard (gratuito, automático para todos) e Advanced (detecção sofisticada, suporte 24/7 do DDoS Response Team e créditos de custo).",
        useCase:"Proteger infraestrutura crítica de e-commerce durante Black Friday contra ataques DDoS volumétricos de múltiplos Tbps com mitigação automática em menos de 1 segundo.",
        subservices: ["Shield Standard", "Shield Advanced", "DRT Access"],
        docs:"https://docs.aws.amazon.com/shield/" },
      { name:"Amazon Cognito", short:"Cognito", emoji:"👥",
        description:"Autenticação, autorização e gerenciamento de usuários para apps web e mobile. Suporta login social (Google, Apple, Facebook), SAML, OIDC, MFA e User Pools com atributos customizados.",
        useCase:"Implementar autenticação com login via Google no app mobile com tokens JWT, controle de acesso baseado em grupos (admin/premium/free) e MFA opcional.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/cognito/" },
      { name:"AWS CloudTrail", short:"CloudTrail", emoji:"📋",
        description:"Registra todas as chamadas de API feitas na conta AWS (quem, o quê, quando, de onde). Envia logs para S3 e CloudWatch Logs para auditoria, conformidade e análise forense.",
        useCase:"Investigar uma brecha de segurança determinando exatamente quais recursos foram acessados, modificados ou deletados, e qual identidade (usuário/role) realizou cada ação.",
        subservices: ["Trails", "Event History", "Insights", "Lake"],
        docs:"https://docs.aws.amazon.com/cloudtrail/" },
      { name:"AWS Security Hub", short:"Security Hub", emoji:"🏛️",
        description:"Console centralizado de postura de segurança que agrega, organiza e prioriza alertas do GuardDuty, Inspector, Macie, Config, Firewall Manager e mais de 70 parceiros integrados.",
        useCase:"Ter uma visão unificada de todas as descobertas de segurança de toda a organização AWS, priorizando automaticamente as de maior criticidade para o time de segurança.",
        subservices: ["Standards", "Controls", "Findings", "Insights"],
        docs:"https://docs.aws.amazon.com/securityhub/" },
      { name:"Amazon Macie", short:"Macie", emoji:"🔍",
        description:"Descoberta e proteção automática de dados sensíveis (PII, credenciais, dados financeiros) em buckets S3 usando ML. Identifica buckets mal configurados e dados expostos publicamente.",
        useCase:"Escanear automaticamente 500 buckets S3 para detectar SSNs, CPFs, números de cartão e credenciais expostos, recebendo alertas de conformidade LGPD imediatamente.",
        subservices: ["S3 Buckets", "Findings", "Custom Data Identifiers", "Jobs"],
        docs:"https://docs.aws.amazon.com/macie/" },
      { name:"Amazon Inspector", short:"Inspector", emoji:"🔬",
        description:"Avaliação de vulnerabilidades contínua e automatizada para instâncias EC2, imagens de container no ECR e funções Lambda. Correlaciona CVEs com exploração ativa para priorização.",
        useCase:"Detectar automaticamente vulnerabilidades críticas (Log4Shell, ProxyLogon) em todas as instâncias EC2 e imagens Docker, gerando tickets prioritários para o time de segurança.",
        subservices: ["Assessments", "Templates", "Findings", "Software Composition"],
        docs:"https://docs.aws.amazon.com/inspector/" },
      { name:"AWS Certificate Manager", short:"ACM", emoji:"📜",
        description:"Provisiona, gerencia e renova certificados SSL/TLS automaticamente para CloudFront, ALB, API Gateway e outros serviços AWS. Certificados públicos são gratuitos e renovados automaticamente.",
        useCase:"Eliminar expiração acidental de certificados SSL atribuindo um certificado ACM ao ALB com renovação automática, sem configurar cronjob e sem custo adicional.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/acm/" },
      { name:"AWS IAM Identity Center", short:"IAM IdC", emoji:"🎫",
        description:"SSO gerenciado (anterior AWS SSO) que centraliza o acesso a múltiplas contas AWS e aplicações corporativas. Integra-se com Azure AD, Okta, LDAP e outros Identity Providers.",
        useCase:"Permitir que 500 funcionários façam login em dezenas de contas AWS com suas credenciais corporativas do Azure AD, sem gerenciar usuários IAM individuais em cada conta.",
        subservices: ["SSO Instances", "Permission Sets", "Identity Store"],
        docs:"https://docs.aws.amazon.com/singlesignon/" },
      { name:"Amazon Detective", short:"Detective", emoji:"🕵️",
        description:"Investiga automaticamente potenciais incidentes de segurança criando grafos de comportamento usando ML a partir de GuardDuty, CloudTrail e VPC Flow Logs. Acelera análises forenses.",
        useCase:"Investigar rapidamente um alerta do GuardDuty de EC2 comprometida, visualizando automaticamente todas as conexões de rede, chamadas de API e processos relevantes no período.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/detective/" },
      { name:"AWS Firewall Manager", short:"FW Manager", emoji:"🏰",
        description:"Administração centralizada de regras de WAF, Shield Advanced, Security Groups, Network Firewall e Route 53 Resolver DNS Firewall em todas as contas de uma AWS Organizations.",
        useCase:"Aplicar automaticamente uma política de WAF com regras de OWASP Top 10 em todos os ALBs de 40 contas de uma organização, garantindo conformidade sem acesso manual a cada conta.",
        subservices: ["Security Policies", "Resource Groups", "Compliance"],
        docs:"https://docs.aws.amazon.com/firewall-manager/" }
    ]
  },

  // ── 6. MACHINE LEARNING & AI ─────────────────────────────────
  "Machine Learning & AI": {
    icon: "🤖",
    color: "#01A88D",
    services: [
      { name:"Amazon SageMaker", short:"SageMaker", emoji:"🧠",
        description:"Plataforma ML end-to-end para construir, treinar e implantar modelos em qualquer escala. Inclui Studio (IDE), Feature Store, Pipelines, Model Monitor, Data Wrangler e AutoML.",
        useCase:"Treinar e implantar um modelo de detecção de fraudes em cartão de crédito processando 50.000 transações/segundo com latência abaixo de 100ms usando endpoints SageMaker.",
        subservices: ["Studio", "Notebooks", "Training Jobs", "Endpoints", "Autopilot"],
        docs:"https://docs.aws.amazon.com/sagemaker/" },
      { name:"Amazon Rekognition", short:"Rekognition", emoji:"👁️",
        description:"Análise de imagens e vídeos com deep learning: detecção de objetos, cenas, faces, textos, celebridades, EPIs, conteúdo inapropriado e atividades em vídeo em tempo real.",
        useCase:"Verificar identidade de novos usuários em um banco digital comparando selfie com foto do documento (liveness check + face matching) com 99%+ de precisão.",
        subservices: ["Face Comparison", "Label Detection", "PPE Detection", "Celebrity Rec"],
        docs:"https://docs.aws.amazon.com/rekognition/" },
      { name:"Amazon Comprehend", short:"Comprehend", emoji:"📝",
        description:"NLP gerenciado para extrair entidades (nomes, locais, organizações), sentimentos, frases-chave, idiomas, PII e tópicos de textos. Treino customizado com seus próprios dados.",
        useCase:"Analisar 100.000 reviews de clientes diariamente para classificar sentimentos e extrair tópicos mais mencionados, otimizando a estratégia de produto automaticamente.",
        subservices: ["Entities", "Key Phrases", "Sentiment", "Custom Models"],
        docs:"https://docs.aws.amazon.com/comprehend/" },
      { name:"Amazon Translate", short:"Translate", emoji:"🌍",
        description:"Tradução automática neural de alta qualidade entre 75+ idiomas com terminologia customizável. Suporta tradução em tempo real e em lote para grandes volumes de conteúdo.",
        useCase:"Traduzir artigos de um portal de notícias para 30 idiomas automaticamente, atingindo mercados globais sem uma equipe de tradução humana para conteúdos de alta frequência.",
        subservices: ["Translation Jobs", "Parallel Data", "Custom Terminology"],
        docs:"https://docs.aws.amazon.com/translate/" },
      { name:"Amazon Polly", short:"Polly", emoji:"🗣️",
        description:"Text-to-Speech com vozes realistas em 30+ idiomas. Suporta SSML para controlar pronúncia, pausa, volume e entonação. Vozes neurais para qualidade de fala próxima ao humano.",
        useCase:"Gerar automaticamente versões em áudio de artigos de notícias, permitindo que usuários ouçam o conteúdo durante o deslocamento sem contratar locutores profissionais.",
        subservices: ["Standard/Neural Voices", "Lexicons", "Speech Marks"],
        docs:"https://docs.aws.amazon.com/polly/" },
      { name:"Amazon Lex", short:"Lex", emoji:"💬",
        description:"Cria chatbots e assistentes de voz com Automatic Speech Recognition (ASR) e Natural Language Understanding (NLU) — a mesma tecnologia do Alexa. Suporte a múltiplos canais.",
        useCase:"Construir um chatbot bancário que processa saques, consulta de saldo e bloqueio de cartão via texto ou voz no app, sem intervenção humana para 80% das solicitações.",
        subservices: ["Bots", "Intents", "Slots", "Versões / Aliases"],
        docs:"https://docs.aws.amazon.com/lexv2/" },
      { name:"Amazon Bedrock", short:"Bedrock", emoji:"💎",
        description:"Acesso via API unificada a modelos de fundação (FMs) de Anthropic (Claude 3), Stability AI, Cohere, Meta (Llama), Mistral e Amazon Titan. Inclui RAG com Knowledge Bases e Agents.",
        useCase:"Construir um assistente de código que usa Claude 3 para revisar PRs, sugerir melhorias e gerar documentação, integrado ao pipeline CI/CD com IAM e VPC privada.",
        subservices: ["Foundation Models", "Knowledge Bases", "Agents", "Guardrails"],
        docs:"https://docs.aws.amazon.com/bedrock/" },
      { name:"Amazon Textract", short:"Textract", emoji:"📃",
        description:"Extrai texto, dados de formulários, tabelas e assinaturas de documentos digitalizados (PDFs, imagens) com precisão superior ao OCR tradicional. Entende layout e contexto do documento.",
        useCase:"Automatizar o processamento de 10.000 contratos PDF mensais, extraindo dados estruturados de campos de formulário e tabelas para popular sistemas ERP sem digitação manual.",
        subservices: ["Document Analysis", "Form Extraction", "Table Detection"],
        docs:"https://docs.aws.amazon.com/textract/" },
      { name:"Amazon Transcribe", short:"Transcribe", emoji:"🎙️",
        description:"Speech-to-Text automático com identificação de falantes, vocabulário customizado, filtros de palavras e reconhecimento de diferentes sotaques em 30+ idiomas. Suporta streaming.",
        useCase:"Transcrever automaticamente 500 horas/dia de chamadas de call center para análise de qualidade, cumprimento de scripts e detecção de insatisfação do cliente.",
        subservices: ["Transcription Jobs", "Vocabularies", "Language ID"],
        docs:"https://docs.aws.amazon.com/transcribe/" },
      { name:"Amazon Forecast", short:"Forecast", emoji:"📈",
        description:"Previsão de séries temporais baseada em ML que automaticamente seleciona e combina os melhores algoritmos (DeepAR+, Prophet, NPTS) sem expertise em ML necessária.",
        useCase:"Prever a demanda de produtos para otimização de estoque de uma rede varejista com 50.000 SKUs, reduzindo rupturas de estoque em 30% e excesso de inventário em 20%.",
        subservices: ["Datasets", "Predictors", "Forecasts", "Explainability"],
        docs:"https://docs.aws.amazon.com/forecast/" },
      { name:"Amazon Personalize", short:"Personalize", emoji:"🎯",
        description:"Sistema de recomendações em tempo real com ML — a mesma tecnologia usada em amazon.com. Personalize produtos, conteúdo e buscas para cada usuário sem expertise em ML.",
        useCase:"Implementar recomendações personalizadas de produtos em um e-commerce, aumentando a taxa de conversão em 35% ao sugerir itens relevantes com base no histórico do usuário.",
        subservices: ["Datasets", "Solutions", "Campaigns", "Filters"],
        docs:"https://docs.aws.amazon.com/personalize/" },
      { name:"Amazon Kendra", short:"Kendra", emoji:"🔎",
        description:"Busca inteligente empresarial com ML que entende linguagem natural. Conecta-se a SharePoint, S3, RDS, Salesforce e 40+ fontes de dados para busca unificada e precisa.",
        useCase:"Criar um mecanismo de busca interno que permite que funcionários encontrem documentos em SharePoint, wikis e bases de conhecimento com perguntas em linguagem natural.",
        subservices: ["Indexes", "Data Sources", "Faceted Search", "Queries"],
        docs:"https://docs.aws.amazon.com/kendra/" },
      { name:"Amazon CodeGuru", short:"CodeGuru", emoji:"👨‍💻",
        description:"Revisão automatizada de código com ML (CodeGuru Reviewer) e profiling de aplicações Java e Python em produção (CodeGuru Profiler) para identificar gargalos de CPU/custo.",
        useCase:"Detectar automaticamente race conditions, resource leaks e vulnerabilidades de segurança em PRs do GitHub antes do merge, sem revisão manual de cada linha de código.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/codeguru/" },
      { name:"Amazon Lookout for Vision", short:"Lookout Vision", emoji:"🔍",
        description:"Detecta defeitos visuais em produto industriais via visão computacional com poucos exemplos de treinamento. Identifica anomalias em imagens de linha de produção em tempo real.",
        useCase:"Inspecionar visualmente 1.000 peças por hora em uma linha de montagem automotiva, detectando riscos, bolhas e deformações com 99% de precisão, 24/7.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/lookout-for-vision/" },
      { name:"Amazon Lookout for Metrics", short:"Lookout Metrics", emoji:"📉",
        description:"Detecta anomalias em métricas de negócio (vendas, tráfego, conversão) automaticamente usando ML. Identifica a causa raiz das anomalias e agrupa por dimensões relevantes.",
        useCase:"Detectar automaticamente quando as taxas de conversão de uma campanha de marketing caem anormalmente e identificar qual segmento de usuário ou região foi afetado.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/lookout-for-metrics/" },
      { name:"Amazon Fraud Detector", short:"Fraud Detector", emoji:"🚨",
        description:"Detecta fraudes online em tempo real usando ML customizado para o perfil de fraude de cada negócio. Cria modelos de detecção de fraude sem expertise em ML.",
        useCase:"Avaliar o risco de fraude de novos cadastros e transações em um marketplace em milissegundos, bloqueando automaticamente criação de contas fraudulentas.",
        subservices: ["Detectors", "Models", "Variables", "Rules"],
        docs:"https://docs.aws.amazon.com/frauddetector/" },
      { name:"Amazon HealthLake", short:"HealthLake", emoji:"🏥",
        description:"Armazenamento em conformidade HIPAA, transformação e análise de dados de saúde no formato FHIR. Usa NLP para extrair entidades médicas de notas clínicas não estruturadas.",
        useCase:"Centralizar dados de saúde de 50 hospitais em formato FHIR padronizado e executar modelos preditivos para identificar pacientes em risco de reinternação em 30 dias.",
        subservices: ["Data Stores", "Queries", "FHIR Integration"],
        docs:"https://docs.aws.amazon.com/healthlake/" },
      { name:"AWS Panorama", short:"Panorama", emoji:"📷",
        description:"Dispositivo e SDK para adicionar visão computacional a câmeras IP existentes no edge, sem transmitir vídeo para a nuvem. Executa modelos de ML localmente com latência mínima.",
        useCase:"Monitorar a ocupação de espaços físicos em uma fábrica com câmeras existentes, contando trabalhadores em zonas de risco e emitindo alertas de segurança em tempo real.",
        subservices: ["Appliances", "Applications", "Devices", "Package Mgmt"],
        docs:"https://docs.aws.amazon.com/panorama/" }
    ]
  },

  // ── 7. ANALYTICS & DATA ──────────────────────────────────────
  "Analytics & Data": {
    icon: "📈",
    color: "#E7157B",
    services: [
      { name:"Amazon Kinesis Data Streams", short:"Kinesis Streams", emoji:"🌊",
        description:"Coleta e processa grandes streams de dados em tempo real com latência de sub-segundos. Suporta múltiplos consumidores simultâneos e retenção de dados de 1 a 365 dias.",
        useCase:"Processar logs de clickstream de 5M usuários simultâneos em tempo real para detectar fraudes e personalizar a experiência no mesmo momento da navegação.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/kinesis/latest/APIReference/" },
      { name:"Kinesis Data Firehose", short:"Firehose", emoji:"🔥",
        description:"Captura, transforma e entrega dados de streaming ao S3, Redshift, OpenSearch, Splunk e destinos HTTP customizados. Totalmente serverless com transformação via Lambda.",
        useCase:"Entregar continuamente logs de aplicação ao S3 particionados por data/hora para análise posterior no Athena, com compressão automática e sem gerenciar infraestrutura.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/firehose/" },
      { name:"AWS Glue", short:"Glue", emoji:"🔧",
        description:"Integração de dados serverless com Glue Studio (visual ETL), Data Catalog, crawlers automáticos de schema, DataBrew (data quality visual) e Glue Streaming (ETL em tempo real).",
        useCase:"Criar pipelines ETL que consolidam dados de 15 bancos distintos em um data lake no S3, descobrindo automaticamente schemas e preparando dados para análise no Athena.",
        subservices: ["Data Catalog", "ETL Jobs", "Crawlers", "DataBrew"],
        docs:"https://docs.aws.amazon.com/glue/" },
      { name:"Amazon Athena", short:"Athena", emoji:"🦉",
        description:"Consulta interativa serverless de dados no S3 usando SQL padrão (Presto/Trino). Cobra por terabyte escaneado. Suporta Parquet, ORC, JSON, CSV e formatos de tabela Iceberg, Hudi.",
        useCase:"Analisar 10 anos de logs de segurança armazenados no S3 para investigar um incidente executando SQL diretamente, sem provisionar nenhum servidor ou banco de dados.",
        subservices: ["Workgroups", "Data Sources", "Named Queries", "Result Caching"],
        docs:"https://docs.aws.amazon.com/athena/" },
      { name:"Amazon QuickSight", short:"QuickSight", emoji:"📊",
        description:"BI cloud-native com SPICE Engine (in-memory), ML Insights (anomaly detection, forecasting), Stories e dashboards interativos. Pagamento por sessão, sem servidores BI para gerenciar.",
        useCase:"Criar dashboards executivos de KPIs de vendas, estoque e NPS acessíveis em qualquer dispositivo, com alertas automáticos baseados em ML inseridos no relatório.",
        subservices: ["Datasets", "Analysis", "Dashboards", "Spice Engine"],
        docs:"https://docs.aws.amazon.com/quicksight/" },
      { name:"Amazon EMR", short:"EMR", emoji:"⚙️",
        description:"Plataforma gerenciada de big data com Apache Spark, Hive, HBase, Presto, Flink e outros frameworks. Suporta clusters serverless (EMR Serverless) e EKS para Spark.",
        useCase:"Processar 50TB de dados de log por dia com Apache Spark no EMR, executando transformações complexas que seriam impossíveis em uma instância única de banco de dados.",
        subservices: ["Clusters", "Steps", "Notebooks", "Instance Groups"],
        docs:"https://docs.aws.amazon.com/emr/" },
      { name:"AWS Lake Formation", short:"Lake Formation", emoji:"🏞️",
        description:"Cria, segura e gerencia Data Lakes no S3. Centraliza permissões de acesso a dados (column-level security), rastreia linhagem de dados e orquestra workflows de ingestão.",
        useCase:"Construir um data lake centralizado para uma organização com 20 equipes, aplicando controle de acesso por coluna para que cada time veja apenas os dados que precisa.",
        subservices: ["Data Lake Locations", "Blueprints", "Permissions"],
        docs:"https://docs.aws.amazon.com/lake-formation/" },
      { name:"Amazon OpenSearch Service", short:"OpenSearch", emoji:"🔭",
        description:"Sucesso gerenciado do Elasticsearch com OpenSearch. Análise de logs, busca full-text, OpenSearch Dashboards (Kibana), alertas, anomaly detection e k-NN para busca vetorial.",
        useCase:"Centralizar e indexar logs de 200 microsserviços para busca e análise operacional em tempo real, detectando padrões de erro com dashboards customizados.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/opensearch-service/" },
      { name:"Amazon MSK", short:"MSK", emoji:"📨",
        description:"Apache Kafka totalmente gerenciado com provisionamento, patching e configuração automatizados. Suporta MSK Serverless para escala automática sem gerenciar capacidade de broker.",
        useCase:"Construir um pipeline de eventos em tempo real para um banco digital usando Kafka gerenciado, propagando cada transação para múltiplos consumidores (compliance, analytics, notificações).",
        subservices: ["Clusters", "Brokers", "Connectors", "Topics (Kafka)"],
        docs:"https://docs.aws.amazon.com/msk/" },
      { name:"AWS Data Exchange", short:"Data Exchange", emoji:"🤝",
        description:"Marketplace para buscar, assinar e usar dados de terceiros diretamente na AWS. Mais de 3.000 produtos de dados de provedores como Reuters, Refinitiv e Foursquare.",
        useCase:"Assinar dados de tráfego de pedestres da Foursquare para enriquecer análises de localização de lojas, recebendo atualizações diretamente no S3 sem pipeline de ingestão customizado.",
        subservices: ["Datasets", "Data Sets", "Revisions", "Subscriptions"],
        docs:"https://docs.aws.amazon.com/data-exchange/" },
      { name:"AWS Clean Rooms", short:"Clean Rooms", emoji:"🤲",
        description:"Permite que múltiplas empresas colaborem em análises conjuntas de dados sem compartilhar os dados brutos entre si. Cada parte mantém controle sobre seus próprios dados.",
        useCase:"Uma rede varejista e uma empresa de mídia analisam o impacto de campanhas publicitárias sem compartilhar dados de clientes — cada empresa mantém seus dados protegidos.",
        subservices: ["Collaborations", "Memberships", "Queries"],
        docs:"https://docs.aws.amazon.com/clean-rooms/" },
      { name:"Amazon DataZone", short:"DataZone", emoji:"🗂️",
        description:"Portal de governança de dados que cataloga, descobre, compartilha e gerencia dados de negócio com controles de acesso. Cria um marketplace interno de dados para toda a organização.",
        useCase:"Criar um catálogo de dados interno onde equipes de marketing, finanças e produto descobrem e solicitam acesso a datasets aprovados sem envolver a equipe de dados em cada pedido.",
        subservices: ["Domains", "Projects", "Metadata Inventory", "Catalog"],
        docs:"https://docs.aws.amazon.com/datazone/" },
      { name:"Amazon FinSpace", short:"FinSpace", emoji:"💹",
        description:"Data management e analytics para o setor financeiro com conformidade regulatória integrada. Catalogação, exploração e preparação de dados financeiros como time-series e market data.",
        useCase:"Centralizar dados de mercado proprietários de um fundo de hedge com controles de acesso rigorosos, facilitando análises quantitativas por equipes de research.",
        subservices: ["Environments", "Datasets", "Time Series Analytics"],
        docs:"https://docs.aws.amazon.com/finspace/" },
      { name:"Amazon MWAA", short:"MWAA", emoji:"🌬️",
        description:"Apache Airflow totalmente gerenciado para orquestrar workflows de dados. Auto-escala workers automaticamente e integra-se com serviços AWS como S3, EMR, Glue e Redshift.",
        useCase:"Orquestrar um pipeline ETL complexo com 50 tarefas dependentes que processa dados de múltiplas fontes e carrega no Redshift diariamente, sem gerenciar o Airflow.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/mwaa/" },
      { name:"Amazon CloudSearch", short:"CloudSearch", emoji:"🔍",
        description:"Solução de busca full-text gerenciada baseada em Apache Solr. Configura, gerencia e escala domínios de busca automaticamente com suporte a facets, highlighting e sugestões.",
        useCase:"Adicionar busca avançada com filtros por faceta, auto-complete e ranking customizado a um catálogo de 2 milhões de produtos de e-commerce sem gerenciar clusters Solr.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/cloudsearch/" },
      { name:"Amazon Elastic Transcoder", short:"Transcoder", emoji:"🎬",
        description:"Transcodificação de mídia serverless no S3. Converte arquivos de vídeo e áudio entre formatos (MP4, WebM, MP3, FLAC) com presets otimizados para dispositivos e plataformas.",
        useCase:"Converter automaticamente vídeos enviados por usuários para formatos otimizados (H.264 MP4 para web, HLS para streaming) disparando um pipeline via S3 event notification.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/elastic-transcoder/" }
    ]
  },

  // ── 8. DEVOPS & DEVELOPER TOOLS ──────────────────────────────
  "DevOps & Dev Tools": {
    icon: "⚙️",
    color: "#FF4F8B",
    services: [
      { name:"AWS CodePipeline", short:"CodePipeline", emoji:"🚀",
        description:"Serviço de entrega contínua (CD) que automatiza stages de release: source, build, test e deploy. Integra-se com GitHub, GitLab, Bitbucket, CodeCommit, Jenkins e mais.",
        useCase:"Automatizar deploy de aplicação web onde cada commit no GitHub dispara testes unitários no CodeBuild, build de imagem Docker e deploy no ECS em produção.",
        subservices: ["Pipeline Stages", "Artifact Store", "Transitions", "Manual Approval", "Custom Actions"],
        docs:"https://docs.aws.amazon.com/codepipeline/" },
      { name:"AWS CodeBuild", short:"CodeBuild", emoji:"🔨",
        description:"Integração contínua (CI) serverless que compila, testa e produz artefatos. Escala automaticamente e cobra por minuto de build. Suporta Docker, Maven, Gradle, npm, pip e mais.",
        useCase:"Executar testes unitários e de integração em cada PR, gerando relatórios de cobertura de código e publicando imagens Docker no ECR apenas em builds bem-sucedidos.",
        subservices: ["Build Projects", "Build Logs", "Report Groups", "Build Artifacts"],
        docs:"https://docs.aws.amazon.com/codebuild/" },
      { name:"AWS CodeDeploy", short:"CodeDeploy", emoji:"📦",
        description:"Automatiza deploys de código para EC2, ECS, Lambda e servidores on-premises. Suporta rolling updates, blue/green deployments e canary releases com rollback automático em falhas.",
        useCase:"Fazer deploy blue/green de uma nova versão de API no ECS, substituindo gradualmente o tráfego e fazendo rollback automático se a taxa de erro aumentar.",
        subservices: ["Applications", "Deployment Groups", "Deployment Configs"],
        docs:"https://docs.aws.amazon.com/codedeploy/" },
      { name:"AWS CodeCommit", short:"CodeCommit", emoji:"📁",
        description:"Repositório git totalmente gerenciado, altamente disponível e criptografado. Integra-se nativamente com IAM para controle de acesso granular sem gerenciar servidores git.",
        useCase:"Hospedar repositórios de código na AWS com acesso controlado por roles IAM, integrando diretamente com CodePipeline para CI/CD sem dependências externas.",
        subservices: ["Repositories", "Branches", "Pull Requests", "Triggers"],
        docs:"https://docs.aws.amazon.com/codecommit/" },
      { name:"AWS CodeArtifact", short:"CodeArtifact", emoji:"📦",
        description:"Repositório de artefatos de software gerenciado para npm, PyPI, Maven, NuGet, Swift e Cargo. Atua como proxy e cache de repositórios públicos com controle de acesso IAM.",
        useCase:"Centralizar dependências de todos os projetos de uma organização com aprovação de pacotes, bloqueando versões com vulnerabilidades críticas antes de chegar aos builds.",
        subservices: ["Domains", "Repositories", "Package Groups"],
        docs:"https://docs.aws.amazon.com/codeartifact/" },
      { name:"AWS CloudFormation", short:"CloudFormation", emoji:"📐",
        description:"Infraestrutura como código (IaC) que provisiona recursos AWS de templates YAML/JSON. Gerencia dependências, rollback automático e drift detection para detectar mudanças manuais.",
        useCase:"Provisionar toda a infraestrutura de um ambiente (VPC, RDS, ECS, ALB, WAF) automaticamente a partir de templates versionados no Git, garantindo ambientes idênticos.",
        subservices: ["Stacks", "StackSets", "Templates", "Change Sets"],
        docs:"https://docs.aws.amazon.com/cloudformation/" },
      { name:"AWS CDK", short:"CDK", emoji:"🏗️",
        description:"Framework de IaC que usa TypeScript, Python, Java ou C# para definir infraestrutura AWS. Compila para CloudFormation com abstrações de alto nível (Constructs L1-L3).",
        useCase:"Definir toda a infraestrutura de um SaaS em TypeScript reutilizando constructs customizados para criar ambientes staging e produção com uma única base de código.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/cdk/" },
      { name:"Amazon CloudWatch", short:"CloudWatch", emoji:"📡",
        description:"Monitoramento e observabilidade completo: métricas, logs, traces, dashboards, alarmes, anomaly detection, ServiceLens, Container Insights e Lambda Insights.",
        useCase:"Criar alarme que escala automaticamente o ECS quando o P99 de latência supera 500ms e envia alerta via SNS para o time de plantão com contexto do dashboard.",
        subservices: ["Metrics", "Alarms", "Logs", "Dashboards", "Synthetics"],
        docs:"https://docs.aws.amazon.com/cloudwatch/" },
      { name:"AWS X-Ray", short:"X-Ray", emoji:"🔭",
        description:"Rastreamento distribuído para debug e análise de aplicações distribuídas e microsserviços. Gera mapa de serviços, identifica bottlenecks e analisa erros entre componentes.",
        useCase:"Debugar por que 5% das requisições de uma API de checkout têm latência de 10s, rastreando visualmente o caminho de cada requisição entre Lambda, DynamoDB e SQS.",
        subservices: ["Segments", "Service Maps", "Sampling Rules", "Traces"],
        docs:"https://docs.aws.amazon.com/xray/" },
      { name:"Amazon ECR", short:"ECR", emoji:"🐋",
        description:"Registro de imagens Docker totalmente gerenciado com scan de vulnerabilidades (Enhanced com Inspector), replication cross-region, lifecycle policies e caching de pull-through.",
        useCase:"Armazenar imagens Docker com scan automático de CVEs críticos, impedindo que imagens vulneráveis sejam implantadas em produção via política de CodePipeline.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/ecr/" },
      { name:"AWS Cloud9", short:"Cloud9", emoji:"☁️",
        description:"IDE cloud-based que roda no browser com terminal completo, depurador, suporte a 40+ linguagens e compartilhamento de sessão em tempo real para pair programming.",
        useCase:"Desenvolver e debugar funções Lambda diretamente no browser com acesso a recursos da VPC privada, sem configurar ambiente de desenvolvimento local.",
        subservices: ["Environments", "IDEs", "Terminal", "Lambda Integration"],
        docs:"https://docs.aws.amazon.com/cloud9/" },
      { name:"AWS CloudShell", short:"CloudShell", emoji:"🐚",
        description:"Shell baseado em browser com AWS CLI pré-instalada, autenticado com as credenciais do seu user IAM. Inclui 1GB de armazenamento persistente e diversas ferramentas pré-instaladas.",
        useCase:"Executar comandos AWS CLI de qualquer computador sem instalar nada — abra o browser, acesse o console e o CloudShell já possui suas permissões IAM configuradas.",
        subservices: ["Home Directory", "Environment", "Persistence", "Security"],
        docs:"https://docs.aws.amazon.com/cloudshell/" },
      { name:"Amazon CodeCatalyst", short:"CodeCatalyst", emoji:"🪐",
        description:"Plataforma unificada de desenvolvimento colaborativo com repositórios git, CI/CD, gestão de issues e ambientes de desenvolvimento (Dev Environments) integrados.",
        useCase:"Criar um projeto completo de desenvolvimento onde o time gerencia código, pipelines e sprints em um único lugar, sem integrar múltiplas ferramentas externas.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/codecatalyst/" },
      { name:"AWS Fault Injection Simulator", short:"FIS", emoji:"💥",
        description:"Serviço de chaos engineering gerenciado para injetar falhas controladas (terminate EC2, throttle API, inject CPU stress) em ambientes AWS e validar a resiliência da aplicação.",
        useCase:"Simular falha de uma AZ inteira em produção controlada para verificar que o Multi-AZ failover do RDS e o routing do ALB funcionam dentro do RTO definido nas políticas.",
        subservices: ["Experiments", "Templates", "Actions", "Targets"],
        docs:"https://docs.aws.amazon.com/fis/" },
      { name:"AWS SAM", short:"SAM", emoji:"📄",
        description:"Framework open-source para definir e implantar aplicações serverless. Estende CloudFormation com sintaxe simplificada para Lambda, API Gateway, DynamoDB e Step Functions.",
        useCase:"Definir uma API serverless completa (Lambda + API Gateway + DynamoDB) em 30 linhas de YAML SAM template, testando localmente e deployando com sam deploy.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/serverless-application-model/" },
      { name:"AWS CloudTrail Lake", short:"CT Lake", emoji:"🏞️",
        description:"Data lake gerenciado para eventos do CloudTrail que permite consultas SQL avançadas sobre eventos de auditoria, integrando dados de múltiplas contas e regiões em um único repositório.",
        useCase:"Executar queries SQL complexas sobre 2 anos de eventos CloudTrail de 50 contas para investigar padrões de acesso incomuns e gerar relatórios de conformidade.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake.html" }
    ]
  },

  // ── 9. APPLICATION INTEGRATION ───────────────────────────────
  "App Integration": {
    icon: "🔗",
    color: "#FF7A08",
    services: [
      { name:"Amazon SQS", short:"SQS", emoji:"📬",
        description:"Fila de mensagens gerenciada para desacoplar e escalar microsserviços. Dois tipos: Standard (alta throughput, pelo menos uma entrega) e FIFO (ordem exata, exatamente uma entrega).",
        useCase:"Desacoplar um sistema de pedidos de e-commerce do processamento de pagamento criando uma fila SQS entre eles, absorvendo picos de Black Friday sem perder pedidos.",
        subservices: ["Standard/FIFO Queues", "Dead Letter Queues (DLQ)", "Visibility Timeout", "Delay Queues", "Short/Long Polling"],
        docs:"https://docs.aws.amazon.com/sqs/" },
      { name:"Amazon SNS", short:"SNS", emoji:"📢",
        description:"Pub/sub gerenciado que envia notificações push para SQS, Lambda, HTTP/S endpoints, email, SMS e aplicações mobile (iOS, Android) simultaneamente a milhões de assinantes.",
        useCase:"Notificar simultaneamente 5 sistemas (analytics, estoque, email, SMS, auditoria) quando um novo pedido é criado, publicando uma mensagem e distribuindo para todos os assinantes.",
        subservices: ["Topics", "Subscriptions", "Filtering", "Fan-out"],
        docs:"https://docs.aws.amazon.com/sns/" },
      { name:"Amazon EventBridge", short:"EventBridge", emoji:"⚡",
        description:"Bus de eventos serverless que conecta aplicações usando eventos de serviços AWS, apps SaaS (Zendesk, Salesforce, Datadog) e eventos customizados com regras de roteamento.",
        useCase:"Reagir a mudanças de estado em serviços AWS (ex: instância EC2 terminada, objeto S3 criado) disparando funções Lambda, Step Functions e Pipes sem polling.",
        subservices: ["Event Buses", "Rules", "Pipes", "Schema Registry"],
        docs:"https://docs.aws.amazon.com/eventbridge/" },
      { name:"Amazon MQ", short:"MQ", emoji:"📮",
        description:"Broker de mensagens gerenciado compatível com Apache ActiveMQ e RabbitMQ. Facilita a migração de aplicações que usam mensageria JMS, AMQP, STOMP, MQTT para a nuvem.",
        useCase:"Migrar um sistema de mensageria RabbitMQ on-premises para a nuvem sem refatorar o código da aplicação, mantendo compatibilidade total com os protocolos existentes.",
        subservices: ["Brokers (ActiveMQ/RabbitMQ)", "Configurations", "Users"],
        docs:"https://docs.aws.amazon.com/amazon-mq/" },
      { name:"AWS Step Functions", short:"Step Functions", emoji:"🔢",
        description:"Orquestração de workflows serverless com máquinas de estado visual. Express Workflows (alta velocidade, <5min) e Standard Workflows (longa duração, até 1 ano). Integra 200+ serviços.",
        useCase:"Orquestrar um processo de aprovação de crédito com 12 etapas (validação, scoring, aprovação humana, assinatura de contrato) que pode aguardar dias por respostas humanas.",
        subservices: ["Standard/Express Workflows", "States", "Activities", "Transitions"],
        docs:"https://docs.aws.amazon.com/step-functions/" },
      { name:"Amazon AppFlow", short:"AppFlow", emoji:"🌊",
        description:"Integração de dados bidirecional entre SaaS (Salesforce, HubSpot, Slack, Google Analytics, SAP) e AWS (S3, Redshift) com transformações sem código e agendamento.",
        useCase:"Sincronizar dados de leads do Salesforce para o Redshift diariamente para análise cruzada com dados de comportamento do produto, sem pipeline de integração customizado.",
        subservices: ["Flows", "Connectors", "Mappings", "SaaS Integration"],
        docs:"https://docs.aws.amazon.com/appflow/" },
      { name:"AWS AppSync", short:"AppSync", emoji:"🔄",
        description:"API GraphQL gerenciada com suporte a tempo real (subscriptions via WebSocket), offline sync e resolvers para DynamoDB, Lambda, RDS, HTTP e outros backends.",
        useCase:"Construir um feed de atividades em tempo real para um app colaborativo onde múltiplos usuários veem atualizações instantâneas via subscriptions GraphQL sem gerenciar WebSockets.",
        subservices: ["GraphQL APIs", "Resolvers", "Data Sources", "Caching"],
        docs:"https://docs.aws.amazon.com/appsync/" },
      { name:"Amazon SWF", short:"SWF", emoji:"🔀",
        description:"Coordenação de tarefas distribuídas para workflows de longa duração com componentes: Tasks, Deciders e Workers. Mantém o estado de execução e histórico completo de cada workflow.",
        useCase:"Orquestrar o processo de fulfillment de pedidos de um e-commerce (pagamento, expedição, notificação) que pode levar dias, com retry automático e rastreamento de cada etapa.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/swf/" }
    ]
  },

  // ── 10. MANAGEMENT & GOVERNANCE ──────────────────────────────
  "Management & Governance": {
    icon: "🏛️",
    color: "#E75480",
    services: [
      { name:"AWS Organizations", short:"Organizations", emoji:"🏢",
        description:"Gerenciamento centralizado de múltiplas contas AWS com Service Control Policies (SCPs) para aplicar guardrails de segurança, faturamento consolidado e estrutura de OUs hierárquica.",
        useCase:"Estruturar 50 contas AWS de uma empresa em OUs por ambiente (prod, staging, dev) e departamento, bloqueando via SCP a criação de recursos em regiões não aprovadas.",
        subservices: ["Accounts", "OUs", "Service Control Policies (SCP)"],
        docs:"https://docs.aws.amazon.com/organizations/" },
      { name:"AWS Control Tower", short:"Control Tower", emoji:"🗼",
        description:"Configuração automatizada e governança contínua de ambientes multi-conta AWS com landing zones, guardrails preventivos/detectivos e Account Factory para provisionar novas contas.",
        useCase:"Provisionar automaticamente novas contas AWS para times de desenvolvimento já configuradas com VPCs, logging centralizado, SSO e guardrails de segurança em minutos.",
        subservices: ["Landing Zones", "Guardrails", "OU Management"],
        docs:"https://docs.aws.amazon.com/controltower/" },
      { name:"AWS Config", short:"Config", emoji:"📋",
        description:"Registra e avalia configurações de recursos AWS continuamente. Define conformidade via Config Rules (managed e customizadas) e detecta desvios com timeline de mudanças.",
        useCase:"Garantir que todos os buckets S3 estão com bloqueio de acesso público ativo, gerando alertas automáticos e registrando quem modificou a configuração de cada bucket.",
        subservices: ["Rules", "Conformance Packs", "Aggregators", "Snapshots"],
        docs:"https://docs.aws.amazon.com/config/" },
      { name:"AWS Systems Manager", short:"SSM", emoji:"🔧",
        description:"Conjunto de ferramentas para gerenciar instâncias EC2 e servidores on-premises: Session Manager (acesso seguro sem chave SSH), Patch Manager, Parameter Store, Run Command e Fleet Manager.",
        useCase:"Acessar instâncias EC2 em subnets privadas sem chave SSH ou bastion host via Session Manager, auditando toda sessão no CloudTrail para conformidade.",
        subservices: ["Parameter Store", "Session Manager", "Patch Manager", "Automation"],
        docs:"https://docs.aws.amazon.com/systems-manager/" },
      { name:"AWS OpsWorks", short:"OpsWorks", emoji:"⚙️",
        description:"Gerenciamento de configuração baseado em Chef e Puppet totalmente gerenciado. Automatiza a configuração de servidores, deploys e operações recorrentes usando receitas Chef/Puppet.",
        useCase:"Gerenciar configuração de 200 instâncias EC2 com receitas Chef automatizando instalação de pacotes, configuração de serviços e patches de segurança de forma consistente.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/opsworks/" },
      { name:"AWS Service Catalog", short:"Service Catalog", emoji:"🛒",
        description:"Catálogo de produtos TI aprovados (templates CloudFormation, Terraform) que equipes de desenvolvimento podem implantar de forma autônoma dentro dos padrões corporativos.",
        useCase:"Criar um catálogo interno onde times de desenvolvimento provisionam ambientes aprovados (RDS + ElastiCache + ECS) com um clique, sem precisar do time de infra.",
        subservices: ["Portfolios", "Products", "Constraints", "Versions"],
        docs:"https://docs.aws.amazon.com/servicecatalog/" },
      { name:"AWS Trusted Advisor", short:"Trusted Advisor", emoji:"💡",
        description:"Recomendações automáticas de otimização nas categorias: custo, performance, segurança, fault tolerance e limites de serviço. Verifica mais de 500 checks na conta AWS.",
        useCase:"Identificar automaticamente instâncias EC2 subutilizadas que podem ser reduzidas (rightsizing), buckets S3 públicos indevidos e grupos de segurança com accesso 0.0.0.0/0.",
        subservices: ["Checks", "Recommendations", "Cost Opt", "Security"],
        docs:"https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html" },
      { name:"AWS Health Dashboard", short:"Health", emoji:"🩺",
        description:"Visibilidade personalizada de eventos de saúde e manutenções da AWS que afetam sua conta e recursos específicos. Integra-se com EventBridge para automação de respostas.",
        useCase:"Receber alertas automáticos quando a AWS agenda manutenção em instâncias RDS específicas da sua conta, disparando automação de failover preventivo.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/health/" },
      { name:"AWS License Manager", short:"License Manager", emoji:"📝",
        description:"Rastreia e gerencia licenças de software (Oracle, Microsoft, SAP) em ambientes AWS e on-premises. Aplica limites para evitar multas por não conformidade de licenciamento.",
        useCase:"Gerenciar licenças Oracle Database da empresa centralizando o rastreamento de uso em instâncias EC2 e RDS para evitar penalidades de auditoria de licenças.",
        subservices: ["License Configurations", "Marketplace Licenses", "Entitlements"],
        docs:"https://docs.aws.amazon.com/license-manager/" },
      { name:"Amazon Managed Grafana", short:"Grafana", emoji:"📊",
        description:"Grafana totalmente gerenciado integrado com fontes de dados AWS como CloudWatch, OpenSearch, X-Ray, Athena e Timestream. Autenticação via IAM Identity Center.",
        useCase:"Criar dashboards de observabilidade unificados com métricas do CloudWatch, traces do X-Ray e logs do OpenSearch em um único painel Grafana sem manter a infraestrutura.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/grafana/" },
      { name:"Amazon Managed Prometheus", short:"AMP", emoji:"📡",
        description:"Prometheus totalmente gerenciado compatível com métricas Kubernetes/EKS. Auto-escala ingestão, armazenamento e queries sem gerenciar a infraestrutura do Prometheus.",
        useCase:"Coletar métricas de um cluster EKS com 100+ nós no Prometheus gerenciado e visualizar no Grafana gerenciado, sem operar a pilha de monitoramento Kubernetes.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/prometheus/" },
      { name:"AWS Proton", short:"Proton", emoji:"⚛️",
        description:"Deploy automatizado de infraestrutura e código para arquiteturas de microsserviços e serverless. Plataforma self-service para devs com templates aprovados pelo time de plataforma.",
        useCase:"Permitir que desenvolvedores façam deploy de novos microsserviços em padrão aprovado (ECS+ALB+CloudWatch+CodePipeline) via console, sem precisar do time de infraestrutura.",
        subservices: ["Service Templates", "Env Templates", "Pipeline Management"],
        docs:"https://docs.aws.amazon.com/proton/" },
      { name:"AWS Resilience Hub", short:"Resilience Hub", emoji:"🔄",
        description:"Avaliação contínua da resiliência de aplicações AWS contra objetivos de RTO e RPO definidos. Sugere recomendações de melhorias e gera relatórios de conformidade.",
        useCase:"Validar que a arquitetura de uma aplicação crítica atende ao RTO de 1h e RPO de 15min definidos no BCP, identificando componentes únicos de falha para corrigir.",
        subservices: ["Applications", "Assessments", "Resilience Policies"],
        docs:"https://docs.aws.amazon.com/resilience-hub/" },
      { name:"AWS Audit Manager", short:"Audit Manager", emoji:"📂",
        description:"Coleta automaticamente evidências para auditorias de conformidade (PCI DSS, HIPAA, GDPR, SOC 2). Mapeia controles de conformidade para recursos AWS e gera relatórios de auditoria.",
        useCase:"Preparar automaticamente evidências de conformidade SOC 2 coletando logs, configurações e relatórios de acesso da conta AWS, reduzindo semanas de trabalho manual.",
        subservices: ["Assessments", "Controls", "Evidence", "Frameworks"],
        docs:"https://docs.aws.amazon.com/audit-manager/" }
    ]
  },

  // ── 11. IOT ──────────────────────────────────────────────────
  "IoT": {
    icon: "📡",
    color: "#1A9C3E",
    services: [
      { name:"AWS IoT Core", short:"IoT Core", emoji:"📡",
        description:"Plataforma IoT gerenciada que conecta bilhões de dispositivos à nuvem via MQTT, HTTPS e WebSocket. Regras que roteiam mensagens para Lambda, S3, DynamoDB, Kinesis e outros.",
        useCase:"Conectar 1 milhão de sensores de temperatura de uma rede de supermercados, roteando alertas de temperatura fora do range para Lambda que notifica automaticamente o gerente.",
        subservices: ["Thing Registry", "Rule Engine", "Device Shadows", "Broker"],
        docs:"https://docs.aws.amazon.com/iot/" },
      { name:"AWS IoT Greengrass", short:"Greengrass", emoji:"🌿",
        description:"Estende serviços AWS para dispositivos edge IoT. Executa funções Lambda, ML inference, sincronização de estado e mensageria local mesmo sem conexão com a nuvem.",
        useCase:"Executar um modelo de ML para detecção de defeitos em produto diretamente em uma máquina de fábrica sem latência de rede, sincronizando resultados para a nuvem quando online.",
        subservices: ["Components", "Deployments", "Local Triggers"],
        docs:"https://docs.aws.amazon.com/greengrass/" },
      { name:"AWS IoT Analytics", short:"IoT Analytics", emoji:"📊",
        description:"Pipeline de análise de dados IoT totalmente gerenciado. Coleta, processa, enriquece, armazena e analisa dados de dispositivos IoT em escala sem gerenciar infraestrutura.",
        useCase:"Analisar dados de 500.000 medidores de energia inteligentes para detectar padrões de consumo, prever demanda e identificar comportamentos anômalos indicativos de fraude.",
        subservices: ["Channels", "Pipelines", "Data Stores", "Datasets"],
        docs:"https://docs.aws.amazon.com/iotanalytics/" },
      { name:"AWS IoT Events", short:"IoT Events", emoji:"⚡",
        description:"Monitora continuamente eventos de dispositivos para detectar padrões e trigger de alarmes baseados em estados. Modela detectores de eventos com máquinas de estado visuais.",
        useCase:"Monitorar vibração e temperatura de motores industriais para detectar automaticamente padrões de degradação e acionar ordens de manutenção preventiva antes da falha.",
        subservices: ["Detector Models", "Inputs", "Actions"],
        docs:"https://docs.aws.amazon.com/iotevents/" },
      { name:"AWS IoT SiteWise", short:"IoT SiteWise", emoji:"🏭",
        description:"Coleta, organiza e analisa dados de equipamentos industriais em escala. Cria modelos de ativos hierárquicos (fábrica > linha > máquina > sensor) com métricas calculadas.",
        useCase:"Monitorar a eficiência global de equipamento (OEE) de 10 linhas de produção coletando dados de 5.000 sensores e calculando disponibilidade, performance e qualidade em tempo real.",
        subservices: ["Assets", "Models", "Portals", "Data Streams"],
        docs:"https://docs.aws.amazon.com/iot-sitewise/" },
      { name:"AWS IoT TwinMaker", short:"TwinMaker", emoji:"🔄",
        description:"Cria gêmeos digitais de ambientes físicos (edifícios, fábricas) conectando dados de sensores IoT, câmeras e sistemas legados para criar representações virtuais em 3D.",
        useCase:"Criar um gêmeo digital de uma fábrica onde operadores visualizam em 3D a temperatura, vibração e status de cada máquina em tempo real, clicando para ver histórico e alertas.",
        subservices: ["Workspaces", "Entities", "Scenes", "Components"],
        docs:"https://docs.aws.amazon.com/iot-twinmaker/" },
      { name:"AWS IoT FleetWise", short:"FleetWise", emoji:"🚗",
        description:"Coleta e transfere dados de veículos para a nuvem de forma eficiente. Define quais dados dos ECUs coletar baseado em condições, reduzindo o volume transferido.",
        useCase:"Coletar dados de 100.000 caminhões de uma frota apenas quando o motor opera fora da faixa normal, enviando telemetria seletiva para análise preditiva de manutenção.",
        subservices: ["Vehicles", "Campaigns", "Signal Catalogs"],
        docs:"https://docs.aws.amazon.com/iot-fleetwise/" },
      { name:"AWS IoT Device Defender", short:"Device Defender", emoji:"🛡️",
        description:"Segurança para dispositivos IoT com auditoria de configurações, detecção de anomalias de comportamento e alertas quando dispositivos desviam do comportamento esperado.",
        useCase:"Detectar quando um dispositivo IoT começa a se comunicar com IPs desconhecidos ou transmitir volumes incomuns de dados, indicando possível comprometimento.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/iot-device-defender/" },
      { name:"AWS IoT Device Management", short:"Device Mgmt", emoji:"📱",
        description:"Registra, organiza, monitora e gerencia remotamente dispositivos IoT em escala. Suporta grupos, jobs de atualização em massa e tunneling seguro para acesso remoto.",
        useCase:"Enviar atualizações de firmware para 500.000 dispositivos IoT em campo de forma gradual (rolling), monitorando o progresso e revertendo dispositivos com falha automaticamente.",
        subservices: ["Jobs", "Fleet Indexing", "Secure Tunneling"],
        docs:"https://docs.aws.amazon.com/iot-device-management/" },
      { name:"FreeRTOS", short:"FreeRTOS", emoji:"🔌",
        description:"Sistema operacional de tempo real para microcontroladores com bibliotecas que facilitam a conexão e atualização segura de dispositivos IoT de baixo consumo com a AWS.",
        useCase:"Desenvolver firmware para sensores IoT em microcontroladores ESP32 que se conectam ao IoT Core via TLS, com OTA seguro pelo FreeRTOS sem infraestrutura customizada.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/freertos/" },
      { name:"Amazon Monitron", short:"Monitron", emoji:"📡",
        description:"Sistema end-to-end de monitoramento de condição de máquinas com sensores de vibração e temperatura, gateway e dashboard ML que detecta anomalias de equipamentos industriais.",
        useCase:"Instalar sensores Monitron em 200 motores de uma fábrica para detectar vibrações anômalas e prever falhas mecânicas semanas antes da quebra, evitando paradas não planejadas.",
        subservices: ["Gateways", "Sensors", "Projects", "Condition Monitoring"],
        docs:"https://docs.aws.amazon.com/Monitron/" },
      { name:"AWS IoT ExpressLink", short:"ExpressLink", emoji:"🔗",
        description:"Módulos de conectividade pré-certificados de parceiros de hardware que simplificam a integração de dispositivos com os serviços AWS IoT, eliminando desenvolvimento de firmware seguro.",
        useCase:"Adicionar conectividade segura à nuvem AWS a um sensor industrial usando um módulo ExpressLink pré-certificado, sem desenvolver stack de segurança TLS do zero.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/iot-expresslink/" }
    ]
  },

  // ── 12. MEDIA SERVICES ───────────────────────────────────────
  "Media Services": {
    icon: "🎬",
    color: "#9B59B6",
    services: [
      { name:"Amazon Kinesis Video Streams", short:"Kinesis Video", emoji:"📹",
        description:"Ingest, processamento e reprodução de fluxos de vídeo de dispositivos conectados para análise ML (Rekognition Video), playback e armazenamento. Suporta WebRTC para comunicação de baixa latência.",
        useCase:"Processar feeds de câmeras de segurança de 500 lojas em tempo real com Rekognition Video para detecção de comportamentos suspeitos sem armazenar terabytes de vídeo.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/kinesisvideostreams/" },
      { name:"AWS Elemental MediaConvert", short:"MediaConvert", emoji:"🎞️",
        description:"Transcodificação de vídeo em nuvem baseada em arquivos para broadcast e streaming multiscreen. Suporta HDR, Dolby Vision, codec H.265/HEVC, DRM e inserção de metadata.",
        useCase:"Transcodar filmes em 4K HDR do estúdio para múltiplos formatos (HLS, DASH, MP4) e resoluções (4K, 1080p, 720p, 360p) para entrega em todas as plataformas e conexões.",
        subservices: ["Jobs", "Queues", "Presets", "Output Groups"],
        docs:"https://docs.aws.amazon.com/mediaconvert/" },
      { name:"AWS Elemental MediaLive", short:"MediaLive", emoji:"📺",
        description:"Serviço de encoding de vídeo ao vivo para broadcast e streaming. Cria streams de alta qualidade para delivery em televisores, tablets e smartphones com redundância integrada.",
        useCase:"Transmitir um evento esportivo ao vivo para 5 milhões de espectadores em múltiplas plataformas simultaneamente, com failover automático entre encoders primário e backup.",
        subservices: ["Channels", "Inputs", "Multiplexes"],
        docs:"https://docs.aws.amazon.com/medialive/" },
      { name:"AWS Elemental MediaPackage", short:"MediaPackage", emoji:"📦",
        description:"Empacotamento e originação de vídeo just-in-time. Cria streams HLS, DASH e CMAF com proteção de conteúdo (DRM) e time-shifted viewing (start-over e catch-up TV).",
        useCase:"Distribuir um canal de TV ao vivo com replay (watch-from-beginning), proteção DRM e personalização de anúncios sem gerenciar servidores de empacotamento de vídeo.",
        subservices: ["Channels", "Endpoints", "Packaging Groups"],
        docs:"https://docs.aws.amazon.com/mediapackage/" },
      { name:"AWS Elemental MediaStore", short:"MediaStore", emoji:"💾",
        description:"Armazenamento de objetos otimizado para mídia ao vivo com baixíssima latência de acesso e alta throughput de ingestão. Ideal como origem para streaming ao vivo.",
        useCase:"Usar como origem confiável de baixa latência para streams ao vivo de uma plataforma de e-sports, eliminando buffering causado por latência de armazenamento de objeto padrão.",
        subservices: ["Containers", "Container Policies", "Lifecycle"],
        docs:"https://docs.aws.amazon.com/mediastore/" },
      { name:"AWS Elemental MediaTailor", short:"MediaTailor", emoji:"📺",
        description:"Personalização de anúncios server-side (SSAI) para streaming. Insere anúncios personalizados nos streams de vídeo de forma nativa, impossibilitando o bloqueio por ad blockers.",
        useCase:"Monetizar um serviço AVOD (streaming gratuito) inserindo anúncios personalizados por perfil de usuario em streams HLS sem degradar a qualidade da experiência de reprodução.",
        subservices: ["Campaigns", "Configurations", "Ad Insertion"],
        docs:"https://docs.aws.amazon.com/mediatailor/" },
      { name:"Amazon Interactive Video Service", short:"IVS", emoji:"🎮",
        description:"Streaming ao vivo interativo de baixa latência (< 3s) para aplicações como Twitch/TikTok Live. SDK para web, iOS e Android com chat, enquetes e efeitos em tempo real.",
        useCase:"Adicionar transmissões ao vivo com interação em tempo real a um app de vendas ao vivo, onde apresentadores demonstram produtos e espectadores fazem perguntas e compram simultaneamente.",
        subservices: ["Channels", "Stream Keys", "Recording Config"],
        docs:"https://docs.aws.amazon.com/ivs/" },
      { name:"Amazon Nimble Studio", short:"Nimble Studio", emoji:"🎨",
        description:"Estúdio de criação de conteúdo visual em nuvem para equipes de animação, VFX e pós-produção. Acesso remoto a workstations gráficas potentes (G4/G5) com armazenamento compartilhado.",
        useCase:"Permitir que artistas de VFX trabalhem remotamente em workstations na nuvem com GPUs de última geração para renderização em tempo real de cenas com centenas de elementos.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/nimble-studio/" }
    ]
  },

  // ── 13. MIGRATION & TRANSFER ─────────────────────────────────
  "Migration & Transfer": {
    icon: "🚚",
    color: "#2571A3",
    services: [
      { name:"AWS Migration Hub", short:"Migration Hub", emoji:"🗺️",
        description:"Ponto central para rastrear o progresso de migrações de aplicações para a AWS. Consolida dados de descoberta e migração de AWS e parceiros (Cloudamize, TSO Logic).",
        useCase:"Gerenciar a migração de 500 servidores on-premises para a AWS em um projeto de 18 meses, rastreando o status de cada servidor em um único dashboard consolidado.",
        subservices: ["Portfolios", "Strategy", "Refactor", "Network Manager"],
        docs:"https://docs.aws.amazon.com/migrationhub/" },
      { name:"Application Discovery Service", short:"ADS", emoji:"🔍",
        description:"Descobre automaticamente servidores on-premises, suas dependências e desempenho para planejar migrações. Agentes e conectores VMware coletam dados de configuração e uso.",
        useCase:"Descobrir automaticamente todos os 200 servidores no datacenter, mapeando dependências entre aplicações para identificar quais migrar juntos e planejar a ordem das migrações.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/application-discovery/" },
      { name:"AWS Database Migration Service", short:"DMS", emoji:"🔄",
        description:"Migra bancos de dados para AWS com downtime mínimo. Suporta migração homogênea (MySQL→RDS MySQL) e heterogênea (Oracle→Aurora) com replicação contínua de CDC.",
        useCase:"Migrar um banco Oracle on-premises de 5TB para Aurora PostgreSQL com zero downtime, replicando mudanças em tempo real durante o cutover de apenas 30 minutos.",
        subservices: ["Replication Instances", "Tasks", "Endpoints"],
        docs:"https://docs.aws.amazon.com/dms/" },
      { name:"AWS Application Migration Service", short:"MGN", emoji:"🚁",
        description:"Lift-and-shift (rehost) de servidores físicos e VMs para EC2 com replicação contínua de bloco e cutover automatizado. Sucessor do CloudEndure Migration.",
        useCase:"Migrar 100 servidores físicos de um datacenter para EC2 em semanas com riscos mínimos, testando o cutover várias vezes antes do migração definitiva de produção.",
        subservices: ["Source Servers", "Replication", "Test/Cutover"],
        docs:"https://docs.aws.amazon.com/mgn/" },
      { name:"AWS Mainframe Modernization", short:"M2", emoji:"🖥️",
        description:"Plataforma para modernizar e migrar workloads mainframe (IBM z/OS, Unisys) para a AWS, com dois padrões: replatform (managed runtime) e refactor (transformação de código).",
        useCase:"Migrar um sistema COBOL de processamento de folha de pagamento de um mainframe IBM para a AWS em managed runtime, reduzindo custos de licença em 70% sem reescrever código.",
        subservices: ["Environments", "Applications", "Batch/CICS"],
        docs:"https://docs.aws.amazon.com/mainframe-modernization/" },
      { name:"AWS Schema Conversion Tool", short:"SCT", emoji:"🔄",
        description:"Converte automaticamente schemas e a maioria do código de stored procedures de bancos comerciais (Oracle, SQL Server) para bancos open-source compatíveis com AWS.",
        useCase:"Converter automaticamente 80% do schema Oracle e procedures de um sistema legado para Aurora PostgreSQL, reduzindo o trabalho manual de conversão de meses para dias.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/" },
      { name:"Migration Hub Refactor Spaces", short:"Refactor Spaces", emoji:"🔀",
        description:"Facilita a refatoração incremental de aplicações monolíticas para microsserviços criando um proxy de roteamento que direciona tráfego entre o monolito legado e os novos serviços.",
        useCase:"Migrar gradualmente endpoints de uma API monolítica para microsserviços Lambda, redirecionando rota por rota sem downtime e com rollback instantâneo.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/migrationhub-refactor-spaces/" }
    ]
  },

  // ── 14. BUSINESS APPLICATIONS ────────────────────────────────
  "Business Apps": {
    icon: "💼",
    color: "#C0392B",
    services: [
      { name:"Amazon Connect", short:"Connect", emoji:"📞",
        description:"Contact center cloud omnicanal com IA integrada (análise de sentimento em tempo real, chatbots Lex, sugestões de agente Einstein). Paga por minuto de uso, sem licenças fixas.",
        useCase:"Lançar um contact center de 500 agentes em 2 semanas integrado com CRM via Lambda, roteando chamadas por IA para o agente mais adequado e transcrevendo todas as chamadas.",
        subservices: ["Instances", "Flows", "Queues", "Routing Profiles"],
        docs:"https://docs.aws.amazon.com/connect/" },
      { name:"Amazon SES", short:"SES", emoji:"📧",
        description:"Serviço de email gerenciado de alto volume para envio transacional, marketing e notificações. Suporta SMTP, API REST, DKIM, SPF, DMARC e rastreamento de bounces/reclamações.",
        useCase:"Enviar 10 milhões de emails transacionais mensais (confirmações de pedidos, redefinição de senha) com custo de US$0,10 por 1.000 emails e alta deliverability.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/ses/" },
      { name:"Amazon Chime", short:"Chime", emoji:"💬",
        description:"Comunicação empresarial unificada: vídeoconferência, chat, chamadas de voz e conteúdo compartilhado. Amazon Chime SDK para adicionar comunicação em tempo real a aplicações.",
        useCase:"Usar o Chime SDK para adicionar vídeo chamadas médico-paciente nativas dentro de um app de telemedicina, sem terceiros como Twilio, com conformidade HIPAA.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/chime/" },
      { name:"Amazon WorkMail", short:"WorkMail", emoji:"📬",
        description:"Email e calendário corporativo gerenciado compatível com Microsoft Outlook e clientes IMAP. Criptografia, conformidade e integração com Active Directory via Directory Service.",
        useCase:"Migrar 2.000 caixas de email corporativas do Exchange on-premises para uma solução gerenciada na AWS, mantendo compatibilidade total com Outlook sem alterar clientes.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/workmail/" },
      { name:"Amazon Pinpoint", short:"Pinpoint", emoji:"📌",
        description:"Engajamento multicanal de clientes: email, SMS, push, voz e in-app messaging. Segmentação de audiência, jornadas automatizadas, A/B testing e analytics de campanha.",
        useCase:"Criar uma jornada de onboarding automatizada que envia email D+0, push D+3 e SMS D+7 para novos usuários que não completaram o perfil, medindo conversão de cada canal.",
        subservices: ["Campaigns", "Segments", "Journeys", "Analytics"],
        docs:"https://docs.aws.amazon.com/pinpoint/" },
      { name:"AWS Wickr", short:"Wickr", emoji:"🔐",
        description:"Mensagens cifradas de ponta a ponta para empresas e governos com conformidade integrada. Arquivamento obrigatório de mensagens, controle administrativo e sem metadados expostos.",
        useCase:"Comunicação segura para times de segurança e C-suite que requerem confidencialidade absoluta com registro completo para conformidade regulatória.",
        subservices: ["Networks", "Users", "Security Groups"],
        docs:"https://docs.aws.amazon.com/wickr/" },
      { name:"Amazon Honeycode", short:"Honeycode", emoji:"🍯",
        description:"Plataforma no-code para criar aplicações web e mobile com planilhas como backend. Permite que usuários de negócio criem apps de gestão sem escrita de código.",
        useCase:"Criar um aplicativo de gestão de aprovações de despesas para equipes de vendas em campo sem envolver a equipe de desenvolvimento, usando interface visual de planilha.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://honeycode.aws/" },
      { name:"AWS AppFabric", short:"AppFabric", emoji:"🧵",
        description:"Conecta aplicações SaaS (Slack, Zoom, Salesforce, Jira) para agregar logs de segurança em um formato padrão e automatizar fluxos de trabalho entre apps usando IA.",
        useCase:"Centralizar logs de auditoria de 10 aplicações SaaS diferentes no Security Lake para detectar vulnerabilidades de acesso em todo o ecossistema corporativo.",
        subservices: ["App Bundles", "SaaS Connectors", "Ingestions", "Security Framework"],
        docs:"https://docs.aws.amazon.com/appfabric/" }
    ]
  },

  // ── 15. END USER COMPUTING ───────────────────────────────────
  "End User Computing": {
    icon: "💻",
    color: "#7D3C98",
    services: [
      { name:"Amazon WorkSpaces", short:"WorkSpaces", emoji:"🖥️",
        description:"Desktop Virtual (DaaS) gerenciado na nuvem com acesso de qualquer dispositivo. Suporta Windows e Linux com armazenamento persistente e acesso seguro integrado ao Active Directory.",
        useCase:"Prover ambientes de trabalho seguros para 3.000 funcionários remotos sem gerenciar hardware, com acesso a recursos corporativos via VPN integrada e conformidade de dados.",
        subservices: ["Directories", "Bundles", "Workspaces", "Images"],
        docs:"https://docs.aws.amazon.com/workspaces/" },
      { name:"Amazon AppStream 2.0", short:"AppStream", emoji:"📺",
        description:"Streaming de aplicações desktop para browsers sem instalar software localmente. Centraliza aplicações em instâncias EC2 e as entrega a usuários na web com qualidade gráfica.",
        useCase:"Entregar software de engenharia CAD pesado para engenheiros remotos via browser, sem instalar licenças em notebooks locais e sem comprometer a propriedade intelectual dos arquivos.",
        subservices: ["Stacks", "Fleets", "Images", "User Pool"],
        docs:"https://docs.aws.amazon.com/appstream2/" },
      { name:"Amazon WorkDocs", short:"WorkDocs", emoji:"📄",
        description:"Plataforma de criação, colaboração e armazenamento de conteúdo corporativo gerenciado. Integra-se com Active Directory, Office 365 e Amazon WorkMail com versionamento completo.",
        useCase:"Centralizar documentação de projetos de engenharia com versionamento, comentários e aprovações formais, substituindo drive compartilhado sem controle de versão.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/workdocs/" },
      { name:"Amazon WorkLink", short:"WorkLink", emoji:"🔗",
        description:"Acesso seguro móvel a intranets e aplicações web internas via SAML federado sem VPN. Renderiza páginas na nuvem e envia apenas pixels para o dispositivo móvel.",
        useCase:"Permitir que vendedores acessem o ERP interno via smartphone sem VPN ou configuração de dispositivo, com acesso encerrado automaticamente ao sair da aplicação.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/worklink/" }
    ]
  },

  // ── 16. FRONT-END & MOBILE ───────────────────────────────────
  "Front-End & Mobile": {
    icon: "📱",
    color: "#F39C12",
    services: [
      { name:"AWS Amplify", short:"Amplify", emoji:"🔌",
        description:"Plataforma de desenvolvimento full-stack para web e mobile: CI/CD com preview de branches, hosting, autenticação (Cognito), APIs (AppSync/API Gateway), armazenamento (S3) e analytics.",
        useCase:"Construir e fazer deploy de um app React com autenticação, API GraphQL e armazenamento de arquivos em menos de 1 hora usando Amplify CLI e Studio sem configurar backends manualmente.",
        subservices: ["Hosting", "Studio", "Backend Environments", "CLI"],
        docs:"https://docs.aws.amazon.com/amplify/" },
      { name:"Amazon Location Service", short:"Location Svc", emoji:"📍",
        description:"Adiciona funcionalidades de localização (mapas, geocoding, rotas, geofences e rastreamento de ativos) a aplicações sem compartilhar dados com provedores de mapa de terceiros.",
        useCase:"Rastrear a localização em tempo real de frotas de entrega, exibindo rotas otimizadas e enviando alertas quando veículos entram ou saem de geofences definidos.",
        subservices: ["Maps", "Places", "Geofences", "Trackers"],
        docs:"https://docs.aws.amazon.com/location/" },
      { name:"AWS Device Farm", short:"Device Farm", emoji:"📲",
        description:"Plataforma de teste de apps mobile e web em dispositivos físicos reais (iOS, Android) na nuvem. Executa testes automatizados (Appium, XCUITest, Espresso) em centenas de dispositivos.",
        useCase:"Executar testes de um app de banco em 50 modelos de smartphones reais simultaneamente para validar compatibilidade antes do lançamento na App Store e Play Store.",
        subservices: ["Test Projects", "Device Pools", "Runs", "Remote Access"],
        docs:"https://docs.aws.amazon.com/devicefarm/" }
    ]
  },

  // ── 17. BLOCKCHAIN, QUANTUM & SATELLITES ─────────────────────
  "Blockchain & Quantum": {
    icon: "⚛️",
    color: "#5D6D7E",
    services: [
      { name:"Amazon Managed Blockchain", short:"Blockchain", emoji:"⛓️",
        description:"Cria e gerencia redes blockchain compatíveis com Hyperledger Fabric e Ethereum. Elimina a complexidade de configurar nós de blockchain, armazenamento e segurança de chaves.",
        useCase:"Criar uma rede supply chain blockchain entre 10 parceiros para rastrear autenticidade de produtos de luxo da manufatura ao consumidor final com registros imutáveis.",
        subservices: ["Networks", "Members", "Nodes", "Proposals"],
        docs:"https://docs.aws.amazon.com/managed-blockchain/" },
      { name:"Amazon Braket", short:"Braket", emoji:"⚛️",
        description:"Ambiente de exploração e experimentação de computação quântica com acesso a computadores quânticos reais (IonQ, Rigetti, OQC) e simuladores gerenciados pela AWS.",
        useCase:"Pesquisar e desenvolver algoritmos de otimização quântica para problemas de logística (roteamento de veículos, otimização de carteira) comparando múltiplos hardware quânticos.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/braket/" },
      { name:"AWS Ground Station", short:"Ground Station", emoji:"🛰️",
        description:"Rede global de antenas gerenciadas para comunicação com satélites, download de dados e controle de missão. Paga por minuto de contato sem construir infraestrutura terrestre.",
        useCase:"Baixar imagens de satélite de observação da Terra diretamente para instâncias EC2 próximas às antenas, processando imagens com ML segundos após o downlink.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/ground-station/" },
      { name:"AWS RoboMaker", short:"RoboMaker", emoji:"🤖",
        description:"Ambiente gerenciado para desenvolvimento, simulação e deploy de aplicações robóticas baseadas em ROS (Robot Operating System), com integração a serviços AWS de IA e IoT.",
        useCase:"Simular um robô de armazém em centenas de ambientes virtuais simultaneamente para treinar o algoritmo de navegação antes de implantar o firmware nos robôs físicos.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/robomaker/" },
      { name:"Amazon GameLift", short:"GameLift", emoji:"🎮",
        description:"Serviços gerenciados para hosting de servidores de jogos multiplayer: servidores dedicados com escalabilidade automática, matchmaking, lobbies e anti-cheat integrado.",
        useCase:"Hospedar servidores de um jogo FPS multiplayer que escalam automaticamente de 10 a 100.000 jogadores simultâneos, com matchmaking por latência garantindo partidas com <50ms.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/gamelift/" },
      { name:"AWS SimSpace Weaver", short:"SimSpace Weaver", emoji:"🌐",
        description:"Serviço gerenciado para executar simulações espaciais em grande escala (cidades inteiras, multidões) distribuídas em múltiplas instâncias EC2 automaticamente.",
        useCase:"Simular o fluxo de 500.000 pedestres em um estádio para otimizar rotas de evacuação de emergência, distribuindo a simulação em dezenas de instâncias automaticamente.",
        subservices: ["Simulations", "Schemas", "Deployments"],
        docs:"https://docs.aws.amazon.com/simspaceweaver/" }
    ]
  },

  // ── 18. COST MANAGEMENT ─────────────────────────────────────
  "Cost Management": {
    icon: "💰",
    color: "#27AE60",
    services: [
      { name:"AWS Cost Explorer", short:"Cost Explorer", emoji:"📊",
        description:"Ferramenta visual para analisar custos e uso da AWS ao longo do tempo. Cria relatórios customizados, identifica tendências de gastos e fornece previsões de custos futuros com ML.",
        useCase:"Analisar a evolução dos custos mensais por serviço e conta, identificando que o custo de EC2 cresceu 40% no último trimestre devido a instâncias oversized.",
        subservices: ["Cost/Usage Reports", "Savings Plans", "Forecasting"],
        docs:"https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html" },
      { name:"AWS Budgets", short:"Budgets", emoji:"💵",
        description:"Define orçamentos customizados de custo, uso e reservas com alertas automáticos por email e SNS quando limites são atingidos. Suporta ações automáticas de remediação.",
        useCase:"Criar um orçamento mensal de US$50.000 para a conta de produção com alertas em 50%, 80% e 100%, e ação automática para bloquear criação de novas instâncias EC2 em 110%.",
        subservices: ["Cost Budgets", "Usage Budgets", "Alerts", "Actions"],
        docs:"https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html" },
      { name:"AWS Compute Optimizer", short:"Compute Optimizer", emoji:"⚙️",
        description:"Recomendações de rightsizing baseadas em ML para EC2, Auto Scaling, EBS, Lambda e ECS Fargate. Analisa métricas de utilização e sugere o tipo de recurso ideal.",
        useCase:"Identificar que 30% das instâncias EC2 de produção estão oversized (m5.xlarge poderia ser m5.large), economizando US$15.000/mês sem impacto na performance.",
        subservices: ["EC2 Recommendations", "EBS Recommendations", "Lambda Recs"],
        docs:"https://docs.aws.amazon.com/compute-optimizer/" },
      { name:"AWS Cost and Usage Report", short:"CUR", emoji:"📄",
        description:"Relatório mais detalhado de custos da AWS com dados granulares por recurso, hora, tags e conta. Exporta para S3 em CSV/Parquet para análise com Athena, Redshift ou QuickSight.",
        useCase:"Exportar dados detalhados de custo para Athena e criar dashboards de chargeback por time, alocando custos de infraestrutura compartilhada baseado em tags de custo.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/cur/" },
      { name:"AWS Savings Plans", short:"Savings Plans", emoji:"💳",
        description:"Modelo de preço flexível que oferece até 72% de desconto em troca de compromisso de uso por 1 ou 3 anos. Aplica-se automaticamente a EC2, Fargate e Lambda em qualquer região.",
        useCase:"Economizar 40% no custo anual de EC2 comprometendo-se com US$10/hora de uso por 1 ano em Compute Savings Plans, cobrindo EC2, Fargate e Lambda automaticamente.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/savingsplans/" },
      { name:"Reserved Instances", short:"Reserved Inst.", emoji:"📋",
        description:"Capacidade reservada de EC2, RDS, ElastiCache, OpenSearch e Redshift com descontos de até 75% comparado a On-Demand. Compromisso de 1 ou 3 anos com pagamento flexível.",
        useCase:"Reservar 20 instâncias m5.xlarge por 3 anos com pagamento antecipado total, reduzindo o custo de EC2 de produção de US$50.000/mês para US$15.000/mês.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html" },
      { name:"AWS Pricing Calculator", short:"Pricing Calc", emoji:"🧮",
        description:"Ferramenta web para estimar custos de arquiteturas AWS antes de implementar. Permite comparar configurações de serviços e compartilhar estimativas com stakeholders.",
        useCase:"Estimar o custo mensal de uma nova arquitetura (ALB + ECS Fargate + RDS Aurora + ElastiCache) antes da aprovação do projeto, comparando com arquitetura on-premises.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://calculator.aws/" },
      { name:"AWS Billing Conductor", short:"Billing Conductor", emoji:"🎼",
        description:"Customiza a lógica de faturamento para criar visões simplificadas de custos, aplicar margens e criar grupos de faturamento para showback e chargeback internos.",
        useCase:"Criar faturas customizadas para cada unidade de negócio mostrando apenas seus custos com markup de 15% para infraestrutura compartilhada, sem expor preços negociados.",
        subservices: ["Billing Groups", "Pricing Plans", "Reports"],
        docs:"https://docs.aws.amazon.com/billingconductor/" }
    ]
  },

  // ── 19. CONTAINERS ──────────────────────────────────────────
  "Containers": {
    icon: "🐳",
    color: "#1C90D6",
    services: [
      { name:"Amazon ECS Anywhere", short:"ECS Anywhere", emoji:"🐳",
        description:"Extensão do ECS para executar e gerenciar containers em infraestrutura on-premises ou em outras nuvens, usando o mesmo plano de controle e APIs do ECS na AWS.",
        useCase:"Gerenciar containers de microsserviços em servidores on-premises de um data center com as mesmas ferramentas e pipeline CI/CD usados para ECS na nuvem.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-anywhere.html" },
      { name:"Amazon EKS Anywhere", short:"EKS Anywhere", emoji:"☸️",
        description:"Opção de implantação de Kubernetes do EKS que permite criar e operar clusters Kubernetes on-premises em bare metal ou VMware vSphere com ferramentas gerenciadas pela AWS.",
        useCase:"Executar clusters Kubernetes em datacenter próprio para cargas de trabalho com requisitos regulatórios de residência de dados, com gestão unificada via EKS console.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://anywhere.eks.amazonaws.com/" },
      { name:"Amazon EKS Distro", short:"EKS-D", emoji:"📦",
        description:"Distribuição Kubernetes baseada no Amazon EKS que permite executar clusters Kubernetes consistentes em qualquer infraestrutura. Usa os mesmos componentes validados do EKS.",
        useCase:"Construir clusters Kubernetes que rodam em qualquer ambiente (on-premises, edge, outras nuvens) com a mesma base de código e patches de segurança que o EKS utiliza.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://distro.eks.amazonaws.com/" },
      { name:"AWS Copilot", short:"Copilot", emoji:"✈️",
        description:"CLI que simplifica o deploy de aplicações containerizadas no ECS e App Runner. Automatiza criação de Dockerfile, pipeline CI/CD, networking, e monitoramento.",
        useCase:"Fazer deploy de um backend Python Flask no ECS Fargate com load balancer, auto-scaling e pipeline CI/CD usando apenas 3 comandos CLI, sem escrever CloudFormation.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://aws.github.io/copilot-cli/" },
      { name:"Red Hat OpenShift on AWS", short:"ROSA", emoji:"🎩",
        description:"Red Hat OpenShift totalmente gerenciado na AWS, combinando o ecossistema Kubernetes enterprise do OpenShift com a infraestrutura nativa AWS e suporte conjunto Red Hat/AWS.",
        useCase:"Executar uma plataforma de aplicação enterprise com OpenShift na AWS para equipes que já usam ferramentas Red Hat, sem gerenciar a infraestrutura do cluster.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/rosa/" }
    ]
  },

  // ── 20. SECURITY EXTRAS ─────────────────────────────────────
  "Security Extras": {
    icon: "🔒",
    color: "#CD6155",
    services: [
      { name:"AWS CloudHSM", short:"CloudHSM", emoji:"🔑",
        description:"Hardware Security Modules (HSMs) dedicados na nuvem AWS para gerar e gerenciar chaves criptográficas com controle exclusivo. Validado FIPS 140-2 Level 3.",
        useCase:"Armazenar chaves de criptografia de uma instituição financeira em HSMs dedicados com controle exclusivo do cliente, cumprindo requisitos PCI DSS de nível mais alto.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/cloudhsm/" },
      { name:"AWS Private Certificate Authority", short:"Private CA", emoji:"📜",
        description:"Autoridade Certificadora (CA) privada gerenciada para emitir e gerenciar certificados TLS privados para comunicação interna entre serviços, APIs e dispositivos IoT.",
        useCase:"Emitir automaticamente certificados TLS para 500 microsserviços internos para mutual TLS (mTLS), com rotação automática sem interrupção de serviço.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/privateca/" },
      { name:"Amazon Security Lake", short:"Security Lake", emoji:"🛡️",
        description:"Data lake centralizado de segurança que consolida dados de segurança de AWS, SaaS e on-premises no formato Open Cybersecurity Schema Framework (OCSF).",
        useCase:"Centralizar logs de firewall, VPC Flow Logs, CloudTrail e endpoints de segurança em um formato padronizado OCSF para análise unificada de ameaças.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/security-lake/" },
      { name:"Amazon Verified Permissions", short:"Verified Perms", emoji:"✅",
        description:"Serviço de autorização granular e escalável baseado no Cedar Policy Language para aplicações customizadas. Separa lógica de autorização do código da aplicação.",
        useCase:"Implementar controle de acesso baseado em políticas para um SaaS multi-tenant onde cada tenant tem regras de permissão diferentes sem hardcoding no código da aplicação.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/verifiedpermissions/" },
      { name:"AWS Resource Access Manager", short:"RAM", emoji:"🤝",
        description:"Compartilha recursos AWS (subnets, Transit Gateways, Route 53 resolvers) com outras contas AWS dentro da organização sem criar cópias ou usar VPC peering.",
        useCase:"Compartilhar um Transit Gateway central com 40 contas de uma organização, permitindo conectividade de rede sem configurar peering individual entre VPCs.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/ram/" },
      { name:"AWS Signer", short:"Signer", emoji:"✍️",
        description:"Serviço gerenciado de assinatura de código para garantir integridade e procedência de código de funções Lambda, imagens de container e IoT firmware updates.",
        useCase:"Assinar digitalmente funções Lambda no pipeline CI/CD para garantir que apenas código aprovado seja implantado em produção, rejeitando artefatos adulterados.",
        subservices: ["Signing Profiles", "Signing Jobs", "Signed Images"],
        docs:"https://docs.aws.amazon.com/signer/" },
      { name:"AWS Artifact", short:"Artifact", emoji:"📑",
        description:"Portal central para acessar relatórios de conformidade e segurança da AWS (SOC, PCI, ISO, FedRAMP) e aceitar acordos de conformidade (BAA, GDPR DPA).",
        useCase:"Baixar o relatório SOC 2 Type II da AWS para apresentar em auditorias de clientes enterprise que exigem evidências de conformidade do provedor de nuvem.",
        subservices: ["Reports", "Agreements", "Compliance Resources"],
        docs:"https://docs.aws.amazon.com/artifact/" },
      { name:"AWS Network Manager", short:"Network Manager", emoji:"🌐",
        description:"Console central para gerenciar e monitorar a rede global AWS (Transit Gateways, VPNs, Direct Connect) e rede WAN corporativa com integração a SD-WAN partners.",
        useCase:"Visualizar e monitorar a topologia de rede global da empresa com 15 regiões AWS, 30 VPNs e 5 Direct Connects em um único dashboard centralizado.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/networkmanager/" }
    ]
  },

  // ── 21. DEVELOPER AI ────────────────────────────────────────
  "Developer AI": {
    icon: "🤖",
    color: "#6C3483",
    services: [
      { name:"Amazon Q", short:"Amazon Q", emoji:"💎",
        description:"Assistente de IA generativa para desenvolvimento de software e operações de negócios. Responde perguntas, gera código, transforma código legado e automatiza tarefas com conhecimento da AWS.",
        useCase:"Pedir ao Amazon Q para explicar o código de uma aplicação legada Java e gerar automaticamente um plano de migração para microsserviços com estimativas de esforço.",
        subservices: ["Business Expert", "Code Transformation", "Security Advisor", "Data Integration"],
        docs:"https://docs.aws.amazon.com/amazonq/" },
      { name:"Amazon CodeWhisperer", short:"CodeWhisperer", emoji:"💻",
        description:"Assistente de codificação com IA que gera sugestões de código em tempo real no IDE. Suporta 15+ linguagens e fornece scan de segurança e referência de licença de código.",
        useCase:"Acelerar o desenvolvimento escrevendo comentários em linguagem natural e recebendo código completo gerado por IA para funções Lambda, queries DynamoDB e integrações AWS.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/codewhisperer/" },
      { name:"Amazon Q Developer", short:"Q Developer", emoji:"👨‍💻",
        description:"Agente de IA para desenvolvimento de software que entende codebases inteiros, debugar erros, gera testes, otimiza código e implementa features com contexto completo do projeto.",
        useCase:"Solicitar ao Q Developer que analise um bug de produção, navegue o codebase inteiro, identifique a causa raiz e gere o fix com testes unitários automaticamente.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/" },
      { name:"Amazon Q Business", short:"Q Business", emoji:"💼",
        description:"Assistente de IA para empresas que conecta-se a dados corporativos (S3, SharePoint, Salesforce, Slack, Jira) e responde perguntas sobre o negócio com precisão e citações.",
        useCase:"Perguntar ao Q Business 'Quais foram os top 5 problemas reportados por clientes no último trimestre?' e receber resposta baseada em tickets do Jira e conversas do Slack.",
        subservices: ["Recurso Principal", "Monitoramento", "Configuração", "Segurança"],
        docs:"https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/" },
      { name:"AWS DeepRacer", short:"DeepRacer", emoji:"🏎️",
        description:"Carro autônomo em escala 1/18 para aprender reinforcement learning na prática. Inclui simulador 3D, liga de corridas global e ambiente educacional completo de ML.",
        useCase:"Treinar um modelo de reinforcement learning que dirige um carro autônomo em uma pista, competindo com outros modelos na liga global AWS DeepRacer League.",
        subservices: ["Reinforcement Learning", "Models", "VPC Tracks", "Leaderboards"],
        docs:"https://docs.aws.amazon.com/deepracer/" },
      { name:"AWS HealthScribe", short:"HealthScribe", emoji:"🏥",
        description:"Serviço de IA generativa específico para saúde que transcreve conversas clínicas e gera automaticamente notas médicas estruturadas com insights derivados das consultas.",
        useCase:"Transcrever automaticamente consultas médicas e gerar notas clínicas estruturadas com diagnóstico, medicamentos prescritos e plano de tratamento, economizando horas de documentação.",
        subservices: ["Transcription", "Medical Summarization", "Audio Processing"],
        docs:"https://docs.aws.amazon.com/healthscribe/" },
      { name:"AWS Supply Chain", short:"Supply Chain", emoji:"📦",
        description:"Aplicação de ML para visibilidade e gestão da cadeia de suprimentos. Unifica dados de ERP, WMS e fornecedores para insights de inventário, demanda e risco de supply chain.",
        useCase:"Obter visibilidade unificada do inventário em 50 warehouses e 200 fornecedores, usando ML para prever rupturas de estoque 3 semanas antes e sugerir ações corretivas.",
        subservices: ["Data Lake", "Insights", "Demand Planning"],
        docs:"https://docs.aws.amazon.com/aws-supply-chain/" },
      { name:"AWS Well-Architected Tool", short:"WA Tool", emoji:"🏛️",
        description:"Ferramenta que avalia arquiteturas AWS contra as melhores práticas dos 6 pilares do Well-Architected Framework: excelência operacional, segurança, confiabilidade, eficiência, custos e sustentabilidade.",
        useCase:"Revisar a arquitetura de uma aplicação de produção contra os 6 pilares, identificando 15 pontos de melhoria de alta prioridade em segurança e resiliência.",
        subservices: ["Workloads", "Lenses", "Reviews", "Best Practices"],
        docs:"https://docs.aws.amazon.com/wellarchitected/" }
    ]
  }

};
// ──────────────────────────────────────────────
// SUBSERVICE DESCRIPTIONS
// ──────────────────────────────────────────────
const SUBSERVICE_INFO = {
  // Compute
  "AMI (Amazon Machine Image)": "Modelo que contém a configuração do software (SO, apps) necessária para lançar sua instância.",
  "VPC / Subnets": "Divisão da rede virtual onde seus recursos residem, permitindo isolamento e roteamento.",
  "Security Groups": "Firewall virtual que controla o tráfego de entrada e saída para suas instâncias.",
  "Key Pairs": "Chaves criptográficas para login seguro em instâncias EC2.",
  "Instance Types": "Diferentes combinações de CPU, memória, armazenamento e rede para diversos workloads.",
  "EBS Volumes": "Armazenamento em bloco durável para uso com instâncias EC2.",
  "Triggers / Events": "Eventos que iniciam a execução de uma função Lambda automaticamente.",
  "Lambda Layers": "Mecanismo para compartilhar código e dados entre múltiplas funções Lambda.",
  "Task Definitions": "Arquivo JSON que descreve um ou mais containers que formam sua aplicação no ECS/Fargate.",
  "Fargate / EC2 Launch Type": "Define se o container roda em infraestrutura gerenciada (Fargate) ou instâncias próprias.",
  "Managed Node Groups": "Gerenciamento automatizado de instâncias EC2 (nós) para clusters Kubernetes.",
  "Auto Scaling Groups": "Coleção de instâncias EC2 tratadas como uma unidade lógica para fins de escalonamento.",
  
  // Storage
  "Buckets & Objects": "Unidades fundamentais do S3 para armazenamento de dados e metadados.",
  "Storage Classes": "Diferentes níveis de custo e performance para armazenar dados (Standard, Glacier, etc).",
  "Lifecycle Policies": "Regras para transacionar ou deletar objetos automaticamente após certo tempo.",
  "Versioning": "Mantém múltiplas variantes de um objeto no mesmo bucket para evitar perdas acidentais.",
  "Snapshots": "Backups incrementais de volumes EBS ou bancos de dados.",
  "Lifecycle Manager (DLM)": "Automatiza a criação, retenção e deleção de snapshots EBS.",
  "Vaults": "Containers lógicos que armazenam arquivos no Glacier com políticas de segurança.",
  
  // Database
  "DB Instances": "Ambiente de banco de dados isolado na nuvem (RDS).",
  "Multi-AZ Deployment": "Réplica síncrona em outra zona de disponibilidade para alta disponibilidade.",
  "Read Replicas": "Cópias idênticas do banco para distribuir a carga de leitura.",
  "Tables / Items": "Estrutura básica de armazenamento no DynamoDB (NoSQL).",
  "GSI & LSI Indexes": "Índices que permitem consultas eficientes por atributos diferentes da chave primária.",
  "DAX (Accelerator)": "Cache in-memory que acelera as leituras do DynamoDB em até 10 vezes.",
  
  // App Integration
  "Standard/FIFO Queues": "Filas de mensagens com diferentes garantias de ordem e entrega (ordem exata ou alta vazão).",
  "Dead Letter Queues (DLQ)": "Fila especial para mensagens que não puderam ser processadas após várias tentativas para análise posterior.",
  "Visibility Timeout": "Tempo que uma mensagem fica invisível para outros consumidores após ser lida da fila.",
  "Delay Queues": "Adia a entrega das mensagens para a fila por um período de tempo específico.",
  "Short/Long Polling": "Método de requisição de mensagens (long polling reduz custos e respostas vazias).",
  "Event Buses": "Canais lógicos que recebem eventos e os roteiam para alvos baseados em regras.",
  "Pipes": "Conexão ponto a ponto ponto entre produtores e consumidores de eventos com filtragem e enriquecimento opcionais.",
  "Schema Registry": "Centraliza e gerencia schemas de eventos para garantir compatibilidade entre produtores e consumidores.",
  "Standard/Express Workflows": "Standard para longa duração (1 ano) e Express para alta vazão e curta duração (<5 min).",

  // Analytics & Data
  "Data Catalog": "Repositório central de metadados que armazena definições de tabelas e schemas de dados.",
  "ETL Jobs": "Scripts de extração, transformação e carga que processam dados entre origens e destinos.",
  "Crawlers": "Processos que escaneiam repositórios de dados para descobrir schemas e popular o Data Catalog.",
  "DataBrew": "Ferramenta visual de preparação de dados com 250+ transformações prontas sem código.",
  "Workgroups": "Recurso para separar usuários, workloads e gerenciar limites de custos no Athena.",
  "Result Caching": "Armazena resultados de queries anteriores para acelerar consultas repetitivas e reduzir custos.",
  "Spice Engine": "Engine in-memory do QuickSight que acelera drasticamente a visualização de grandes volumes de dados.",
  "Clusters": "Conjunto de instâncias que executam frameworks de processamento distribuído (Spark, Hive).",
  "Instance Groups": "Configuração de frotas de instâncias para Master, Core e Task nodes no EMR.",

  // AI & ML
  "Foundation Models": "Modelos de IA pré-treinados em larga escala (Claude, Llama, Titan) disponíveis via API.",
  "Knowledge Bases": "Integração automática para conectar modelos de IA a seus dados (RAG) sem codificação complexa.",
  "Guardrails": "Políticas de segurança e ética que filtram conteúdos indesejados em aplicações de IA generativa.",
  "Training Jobs": "Execuções de treinamento de modelos de ML com infraestrutura gerenciada.",
  "Endpoints": "Interfaces de API para realizar inferências (previsões) com modelos de ML em tempo real.",
  "Autopilot": "AutoML que cria, treina e ajusta automaticamente os melhores modelos de ML para seus dados.",
  "Face Comparison": "Compara faces em duas imagens para verificar se pertencem à mesma pessoa.",
  "Label Detection": "Identifica milhares de objetos, cenas e atividades em imagens e vídeos.",

  // Developer AI (Q)
  "Business Expert": "Capacidade do Amazon Q de responder perguntas complexas sobre seu negócio usando seus dados internos.",
  "Code Transformation": "Upgrade automático de linguagens legadas (ex: Java 8 para 17) usando IA assistida.",
  "Security Advisor": "Analisa código e infraesturuta para identificar vulnerabilidades e sugerir correções imediatas.",
  "Data Integration": "Conecta e ingere dados de dezenas de fontes SaaS e enterprise para treinar o assistente de IA.",

  // IoT
  "Thing Registry": "Catálogo central de todos os dispositivos conectados à sua rede IoT.",
  "Device Shadows": "JSON que armazena e sincroniza o estado atual e desejado de um dispositivo, mesmo offline.",
  "Rule Engine": "Processa mensagens IoT e as roteia para outros serviços AWS baseados em filtros SQL.",
  "Aspects (TwinMaker)": "Conectores que ligam dados de sensores reais a componentes específicos do gêmeo digital 3D.",

  // Cost & Management
  "Cost/Usage Reports": "Relatórios detalhados que mostram o custo e uso diário ou mensal por recurso e tags.",
  "Savings Plans": "Modelo de preço flexível com descontos significativos em troca de compromisso de uso por 1 ou 3 anos.",
  "Forecasting": "Uso de ML para prever seus gastos futuros na AWS com base no histórico de utilização.",
  "Permission Sets": "Coleção de permissões que você atribui a usuários e grupos do IAM Identity Center.",
  "Identity Store": "Repositório onde o IAM Identity Center armazena identidades de usuários e grupos.",
  "Conformance Packs": "Conjunto de regras do AWS Config e ações de remediação para conformidade regulatória específica.",

  // Storage & Content
  "Acceleration (S3)": "Acelera transferências de longa distância via edge locations do CloudFront.",
  "Object Lock": "Impede a deleção ou sobreposição de objetos por um tempo definido (compliance WORM).",
  "Intelligent-Tiering": "Classe de armazenamento que move dados automaticamente entre camadas frequentes e raras para economizar.",
  "Point-in-Time Recovery": "Capacidade de restaurar dados de banco de dados para qualquer segundo nos últimos 35 dias.",

  // Specialized
  "App Bundles": "Agrupamento de aplicações SaaS gerenciado pelo AppFabric para análise unificada.",
  "SaaS Connectors": "Caminhos de integração prontos para Slack, Salesforce, Zoom e outros no AppFabric.",
  "QPU (Quantum Process Unit)": "Hardware quântico real que executa circuitos quânticos via Amazon Braket.",
  "Ground Antennas": "Estações terrestres globais para comunicação direta com satélites em órbita.",

  // Networking
  "Internet Gateways": "Permite que recursos na VPC (como instâncias) se conectem à Internet pública.",
  "NAT Gateways": "Permite que instâncias em subnets privadas acessem a internet (masking).",
  "Route Tables": "Regras que determinam para onde o tráfego de rede da sua VPC é direcionado.",
  "Peering Connections": "Conexão de rede que permite rotear tráfego entre duas VPCs de forma privada.",
  "Distributions": "Configuração que define como o CloudFront entrega seu conteúdo globalmente.",
  "Edge Locations": "Pontos de presença globais que cacheiam conteúdo próximo aos usuários.",
  "Hosted Zones": "Container de registros DNS para um domínio específico gerenciado no Route 53.",
  "Health Checks": "Monitoramento que verifica se seus endpoints estão saudáveis antes de rotear tráfego.",
  
  // Security
  "Rules": "Definições de conformidade que o AWS Config usa para avaliar seus recursos.",
  "Trails": "Registros de todas as chamadas de API feitas na sua conta AWS.",
  "Findings": "Alertas ou descobertas de segurança gerados por serviços como GuardDuty ou Inspector.",
  "Policies (JSON)": "Documentos que definem permissões granulares para usuários e roles IAM.",
  "MFA": "Multi-Factor Authentication - camada extra de segurança para logins.",
  "Roles": "Identidades IAM com permissões específicas que podem ser assumidas por serviços ou usuários.",
  
  // DevOps
  "Repositories": "Local onde o código-fonte (Git) ou artefatos de software são armazenados.",
  "Pipeline Stages": "Etapas sequênciais (Source, Build, Test, Deploy) do fluxo de CI/CD.",
  "Standard/FIFO Queues": "Filas de mensagens com diferentes garantias de ordem e entrega.",
  "Dead Letter Queues (DLQ)": "Fila especial para mensagens que não puderam ser processadas após várias tentativas.",
  
  // Management
  "Stacks": "Coleção de recursos AWS que você gerencia como uma única unidade via CloudFormation.",
  "Templates": "Arquivos YAML/JSON que descrevem a infraestrutura desejada.",
  "OUs": "Organizational Units - Agrupamentos de contas AWS em uma organização.",
  "Landing Zones": "Ambiente AWS multi-conta bem arquitetado e configurado para escala.",
  "Alarms": "Monitoramento do CloudWatch que dispara ações quando uma métrica atinge um limite.",
  
  // Default/Fallback
  "Recurso Principal": "O componente central e indispensável para o funcionamento básico deste serviço.",
  "Monitoramento": "Ferramentas integradas para observar a saúde e performance operacional do recurso.",
  "Configuração": "Parâmetros e opções que permitem ajustar o comportamento do serviço para sua necessidade.",
  "Segurança": "Configurações de firewall, criptografia e acesso (IAM) específicos deste recurso."
};

// ──────────────────────────────────────────────
// ARCHITECTURES DATA
// ──────────────────────────────────────────────
const ARCHITECTURES_DATA = [
  // 1. WEB & MOBILE
  {
    title: "Web App 3-Tier",
    icon: "🌐",
    desc: "O padrão clássico para aplicações web escaláveis e seguras.",
    taxonomy: ["Fullstack", "High Availability", "Monolith/Microservices"],
    services: [
      { name: "Amazon S3", role: "Hospedagem de Frontend estático" },
      { name: "Amazon CloudFront", role: "Entrega de conteúdo global (CDN)" },
      { name: "Application Load Balancer", role: "Distribuição de tráfego" },
      { name: "Amazon EC2 / ECS", role: "Processamento e lógica de backend" },
      { name: "Amazon RDS", role: "Base de dados relacional persistente" }
    ]
  },
  {
    title: "Serverless API",
    icon: "⚡",
    desc: "Arquitetura orientada a eventos com custo zero quando inativa.",
    taxonomy: ["Nuvem Nativa", "Serverless", "Escalabilidade Infinita"],
    services: [
      { name: "Amazon API Gateway", role: "Gerenciamento de endpoints REST/GraphQL" },
      { name: "AWS Lambda", role: "Execuções de funções sem servidor" },
      { name: "Amazon DynamoDB", role: "Banco NoSQL de baixa latência" },
      { name: "Amazon Cognito", role: "Autenticação e gestão de usuários" }
    ]
  },

  // 2. MICROSERVICES & CONTAINERS
  {
    title: "Containerized Microservices",
    icon: "🐋",
    desc: "Infraestrutura robusta para aplicações em larga escala.",
    taxonomy: ["Kubernetes", "Docker", "DevOps", "Modernização"],
    services: [
      { name: "Amazon EKS", role: "Gerenciamento de clusters Kubernetes" },
      { name: "AWS App Mesh", role: "Service mesh para comunicação segura" },
      { name: "Amazon Route 53", role: "Service Discovery e DNS" },
      { name: "Amazon Managed Prometheus", role: "Monitoramento de métricas cluster-wide" }
    ]
  },
  {
    title: "Message-Driven Microservices",
    icon: "📨",
    desc: "Comunicação assíncrona entre serviços para resiliência.",
    taxonomy: ["Microservices", "Event-Driven", "Resilience"],
    services: [
      { name: "Amazon SQS", role: "Buffer de mensagens para evitar sobrecarga" },
      { name: "Amazon SNS", role: "Distribuição de eventos para subsistemas" },
      { name: "AWS Lambda", role: "Processamento individual de mensagens" },
      { name: "Amazon MQ", role: "Broker gerenciado (RabbitMQ/ActiveMQ)" }
    ]
  },

  // 3. AI & MACHINE LEARNING
  {
    title: "Generative AI Agent",
    icon: "🧠",
    desc: "Aplicação moderna que utiliza LLMs para resolver problemas.",
    taxonomy: ["AI/ML", "LLM", "RAG", "Inteligência Artificial"],
    services: [
      { name: "Amazon Bedrock", role: "Acesso a modelos de base (Claude, Llama)" },
      { name: "Amazon Kendra", role: "Pesquisa inteligente para RAG" },
      { name: "Amazon S3", role: "Armazenamento de base de conhecimento" },
      { name: "AWS Lambda", role: "Orquestração do agente e ferramentas" }
    ]
  },
  {
    title: "MLOps Pipeline",
    icon: "🧪",
    desc: "Workflow de ponta a ponta para treinar e servir modelos de ML.",
    taxonomy: ["Machine Learning", "MLOps", "Automation"],
    services: [
      { name: "Amazon SageMaker", role: "Estúdio de ML e treinamento de modelos" },
      { name: "AWS Glue", role: "Preparação e transformação de dados" },
      { name: "Amazon ECR", role: "Armazenamento de containers de inferência" },
      { name: "Amazon SageMaker Endpoints", role: "Serviço de inferência em tempo real" }
    ]
  },

  // 4. DATA & ANALYTICS
  {
    title: "Modern Data Lake",
    icon: "📊",
    desc: "Armazenamento massivo de arquivos e análise via SQL.",
    taxonomy: ["Big Data", "Business Intelligence", "Analytics"],
    services: [
      { name: "Amazon S3", role: "Repositório central de dados (Raw/Curated)" },
      { name: "AWS Glue", role: "Catálogo de metadados e ETL" },
      { name: "Amazon Athena", role: "Consultas SQL diretamente no S3" },
      { name: "Amazon QuickSight", role: "Dashboards e visualização de dados" }
    ]
  },
  {
    title: "Real-time Streaming Analytics",
    icon: "📈",
    desc: "Processamento contínuo de dados em movimento.",
    taxonomy: ["Streaming", "Real-time", "Big Data"],
    services: [
      { name: "Amazon Kinesis Data Streams", role: "Ingestão de dados em tempo real" },
      { name: "Managed Service for Apache Flink", role: "Processamento e janelamento de dados" },
      { name: "Amazon Redshift", role: "Data Warehouse escalável" },
      { name: "Amazon OpenSearch", role: "Busca e análise de logs/métricas" }
    ]
  },

  // 5. SECURITY & COMPLIANCE
  {
    title: "Security Landing Zone",
    icon: "🛡️",
    desc: "Estrutura multi-conta segura e governada desde o dia 1.",
    taxonomy: ["Governance", "Security", "Multi-account"],
    services: [
      { name: "AWS Control Tower", role: "Configuração automatizada de contas" },
      { name: "AWS Organizations", role: "Gestão centralizada de contas e SCPs" },
      { name: "AWS IAM Identity Center", role: "Single Sign-On (SSO) centralizado" },
      { name: "AWS CloudTrail", role: " Auditoria de atividades em toda a org" }
    ]
  },
  {
    title: "DDoS Resilient App",
    icon: "🔥",
    desc: "Proteção contra ataques de negação de serviço em larga escala.",
    taxonomy: ["Security", "Edge Protection", "Compliance"],
    services: [
      { name: "AWS Shield Advanced", role: "Proteção contra ataques DDoS" },
      { name: "AWS WAF", role: "Firewall de aplicação contra exploits web" },
      { name: "Amazon CloudFront", role: "Proteção na borda e entrega segura" },
      { name: "AWS Global Accelerator", role: "Roteamento otimizado e IPs estáticos" }
    ]
  },

  // 6. IOT & EDGE
  {
    title: "Smart Manufacturing IoT",
    icon: "🏭",
    desc: "Monitoramento de frotas e fábricas em tempo real.",
    taxonomy: ["IoT", "Edge", "Predictive Maintenance"],
    services: [
      { name: "AWS IoT Core", role: "Gateway de conexão e broker MQTT" },
      { name: "AWS IoT SiteWise", role: "Coleta e análise de dados industriais" },
      { name: "AWS IoT Greengrass", role: "Execução local na borda (Edge)" },
      { name: "Amazon Timestream", role: "Banco de dados de séries temporais" }
    ]
  },

  // 7. MULTIPLAYER GAMING
  {
    title: "Multiplayer Game Backend",
    icon: "🎮",
    desc: "Escalabilidade massiva para milhões de jogadores mundiais.",
    taxonomy: ["GameTech", "Real-time", "Low Latency"],
    services: [
      { name: "Amazon GameLift", role: "Hospedagem de servidores de jogo" },
      { name: "Amazon ElastiCache", role: "Leaderboards e sessões rápidas" },
      { name: "Amazon DynamoDB", role: "Dados de jogadores e inventário" },
      { name: "AWS Global Accelerator", role: "Otimização de latência para jogadores" }
    ]
  },

  // 8. MEDIA & CONTENT
  {
    title: "Video on Demand (VOD) Pipeline",
    icon: "🎥",
    desc: "Transcodificação e entrega de vídeo em escala global.",
    taxonomy: ["Media", "Video", "Content Delivery"],
    services: [
      { name: "AWS Elemental MediaConvert", role: "Conversão de vídeo para múltiplos formatos" },
      { name: "Amazon S3", role: "Armazenamento de arquivos originais e finais" },
      { name: "Amazon CloudFront", role: "Streaming via HLS/DASH na borda" },
      { name: "AWS Step Functions", role: "Orquestração do fluxo de mídia" }
    ]
  },

  // 9. DISASTER RECOVERY & HYBRID
  {
    title: "Disaster Recovery (Pilot Light)",
    icon: "🔄",
    desc: "Recuperação rápida de desastres com custo otimizado.",
    taxonomy: ["Business Continuity", "High Availability", "DR"],
    services: [
      { name: "AWS CloudEndure Disaster Recovery", role: "Replicação contínua de servidores" },
      { name: "Amazon Route 53", role: "Failover de DNS automático" },
      { name: "Amazon RDS (Cross-Region Read Replica)", role: "Replicação de dados geográfica" },
      { name: "AWS IAM", role: "Permissões consistentes no ambiente de DR" }
    ]
  },
  {
    title: "Hybrid Cloud Connectivity",
    icon: "🏢",
    desc: "Integração transparente entre data center local e AWS.",
    taxonomy: ["Hybrid", "Networking", "Enterprise"],
    services: [
      { name: "AWS Direct Connect", role: "Conexão privada física dedicada" },
      { name: "AWS Transit Gateway", role: "Hub de rede central para conexão" },
      { name: "AWS Site-to-Site VPN", role: "Conexão criptografada via Internet" },
      { name: "AWS Cloud Map", role: "Descoberta de serviços híbrida" }
    ]
  },

  // 10. SAAS & MULTI-TENANCY
  {
    title: "Multi-tenant SaaS Architecture",
    icon: "🏢",
    desc: "Padrão 'Isolated Data' para aplicações B2B escaláveis.",
    taxonomy: ["SaaS", "Multi-tenancy", "Security"],
    services: [
      { name: "Amazon Aurora", role: "Bancos de dados isolados por cliente" },
      { name: "AWS IAM", role: "Isolamento lógico de recursos de tenants" },
      { name: "AWS Lambda / containers", role: "Processamento compartilhado ou isolado" },
      { name: "Amazon Cognito", role: "Multitenancy de usuários e grupos" }
    ]
  },
  // 11. STARTER PATTERNS (PARA INICIANTES)
  {
    title: "Site Estático Simples",
    icon: "📄",
    desc: "A forma mais barata e rápida de hospedar portfólios ou landing pages.",
    taxonomy: ["Web", "Static Hosting", "Low Cost"],
    services: [
      { name: "Amazon S3", role: "Hospedagem dos arquivos HTML/CSS/JS" },
      { name: "Amazon CloudFront", role: "Distribuição global e HTTPS" },
      { name: "Amazon Route 53", role: "Gestão do domínio (.com, .com.br)" },
      { name: "AWS Certificate Manager", role: "Certificado SSL gratuito" }
    ]
  },
  {
    title: "Aplicação Web Básica (VPS)",
    icon: "⛅",
    desc: "Tudo o que você precisa em um único pacote de preço fixo.",
    taxonomy: ["Starter", "Compute", "Simplified"],
    services: [
      { name: "Amazon Lightsail", role: "Servidor VPS com SO pré-instalado" },
      { name: "Lightsail Databases", role: "Banco de dados gerenciado simples" },
      { name: "Lightsail Load Balancer", role: "Balanceamento de carga básico" },
      { name: "Lightsail DNS", role: "Gestão de registros de rede" }
    ]
  },
  {
    title: "Blog em WordPress",
    icon: "📝",
    desc: "O padrão ouro para blogs e portais de conteúdo.",
    taxonomy: ["CMS", "WordPress", "Inbound Marketing"],
    services: [
      { name: "Amazon EC2 / Lightsail", role: "Servidor web rodando Apache/NGINX" },
      { name: "Amazon RDS (MySQL)", role: "Banco de dados altamente disponível" },
      { name: "Amazon EFS", role: "Armazenamento compartilhado para uploads" },
      { name: "Amazon S3", role: "Backup e armazenamento de mídia externa" }
    ]
  },
  {
    title: "SaaS MVP (Quick Start)",
    icon: "🚀",
    desc: "Estrutura ágil para validar sua ideia de software como serviço.",
    taxonomy: ["Startup", "MVP", "SaaS"],
    services: [
      { name: "AWS Amplify", role: "Desenvolvimento rápido de fullstack" },
      { name: "Amazon Cognito", role: "Login e cadastro de usuários" },
      { name: "Amazon DynamoDB", role: "Banco de dados flexível e sem esquema" },
      { name: "AWS Lambda", role: "Lógica de negócio via APIs" }
    ]
  },
  {
    title: "Loja Virtual Core",
    icon: "🛒",
    desc: "E-commerce robusto com foco em segurança e pagamentos.",
    taxonomy: ["E-commerce", "Retail", "Transactions"],
    services: [
      { name: "Amazon ECS (Fargate)", role: "Execução segura da aplicação de loja" },
      { name: "Amazon Aurora Serverless", role: "DB que escala conforme as vendas" },
      { name: "Amazon ElastiCache", role: "Carrinho de compras e sessões rápidas" },
      { name: "AWS KMS", role: "Criptografia de dados sensíveis de clientes" }
    ]
  },
  // 12. ADVANCED & ENTERPRISE PATTERNS
  {
    title: "Zero Trust Architecture",
    icon: "🔐",
    desc: "Segurança baseada em identidade, nunca confiando na rede local.",
    taxonomy: ["Security", "Identity", "Zero Trust"],
    services: [
      { name: "AWS Verified Access", role: "Acesso seguro a apps sem VPN" },
      { name: "AWS IAM Identity Center", role: "Gestão central de identidades" },
      { name: "AWS Cedar", role: "Políticas de autorização de grão fino" },
      { name: "AWS CloudTrail", role: "Log contínuo de todas as verificações" }
    ]
  },
  {
    title: "Serverless Data Pipeline",
    icon: "🏗️",
    desc: "Ingestão e processamento de dados em escala sem servidores.",
    taxonomy: ["Data Engineering", "Serverless", "Big Data"],
    services: [
      { name: "Amazon Kinesis", role: "Ingestão de dados em tempo real" },
      { name: "AWS Glue Streaming", role: "ETL de dados em movimento" },
      { name: "Amazon S3", role: "Data Lake de destino final" },
      { name: "Amazon Athena", role: "Análise imediata dos dados processados" }
    ]
  },
  {
    title: "HPC Cluster (Scientific)",
    icon: "🧬",
    desc: "Computação de alto desempenho para genômica ou simulações.",
    taxonomy: ["HPC", "Compute", "Science"],
    services: [
      { name: "Amazon EC2 (Hpc instances)", role: "Nós de computação de alta densidade" },
      { name: "AWS ParallelCluster", role: "Gestão do ciclo de vida do cluster" },
      { name: "Amazon FSx para Lustre", role: "Sist. de arquivos de alta performance" },
      { name: "Elastic Fabric Adapter (EFA)", role: "Rede de baixa latência inter-nós" }
    ]
  },
  {
    title: "Desktop as a Service (VDI)",
    icon: "🖥️",
    desc: "Ambientes de trabalho virtuais acessíveis de qualquer lugar.",
    taxonomy: ["End User Computing", "Remote Work", "VDI"],
    services: [
      { name: "Amazon WorkSpaces", role: "Desktops virtuais persistentes" },
      { name: "Amazon AppStream 2.0", role: "Streaming de aplicações específicas" },
      { name: "AWS Directory Service", role: "Integração com Active Directory" },
      { name: "Amazon FSx para Windows", role: "Arquivos de usuário persistentes" }
    ]
  },
  {
    title: "Hybrid Networking Hub",
    icon: "🖇️",
    desc: "Conectividade centralizada entre múltiplas VPCs e On-Prem.",
    taxonomy: ["Networking", "Hybrid", "Transit"],
    services: [
      { name: "AWS Transit Gateway", role: "Hub central de roteamento" },
      { name: "AWS Direct Connect", role: "Link dedicado para o Data Center" },
      { name: "AWS Network Firewall", role: "Inspeção de tráfego centralizada" },
      { name: "Amazon Route 53 Resolver", role: "Resolução de DNS híbrido" }
    ]
  },
  {
    title: "Live Streaming Workflow",
    icon: "📡",
    desc: "Transmissão de vídeo ao vivo com baixa latência para milhões.",
    taxonomy: ["Media", "Streaming", "Live"],
    services: [
      { name: "AWS Elemental MediaLive", role: "Codificação de vídeo em tempo real" },
      { name: "AWS Elemental MediaPackage", role: "Origem e empacotamento (Just-in-time)" },
      { name: "Amazon CloudFront", role: "Distribuição global para espectadores" },
      { name: "Amazon IVS", role: "Plataforma de vídeo interativo gerenciada" }
    ]
  },
  {
    title: "Blockchain Supply Chain",
    icon: "⛓️",
    desc: "Rastreabilidade imutável de produtos e transações.",
    taxonomy: ["Blockchain", "Traceability", "Ledger"],
    services: [
      { name: "Amazon Managed Blockchain", role: "Rede Hyperledger/Ethereum gerenciada" },
      { name: "Amazon QLDB", role: "Ledger central imutável para histórico" },
      { name: "AWS IoT Core", role: "Sensores para tracking de mercadorias" },
      { name: "AWS Lambda", role: "Interação com Smart Contracts" }
    ]
  },
  {
    title: "Quantum Lab Workflow",
    icon: "⚛️",
    desc: "Exploração de algoritmos em computadores quânticos reais.",
    taxonomy: ["Quantum", "Science", "NextGen"],
    services: [
      { name: "Amazon Braket", role: "Acesso a hardware quântico (IonQ, Rigetti)" },
      { name: "Braket Notebooks", role: "Ambiente de desenvolvimento Python" },
      { name: "Amazon S3", role: "Armazenamento de resultados de tarefas" },
      { name: "Amazon CloudWatch", role: "Monitoramento de execução quântica" }
    ]
  },
  {
    title: "Digital Twin (IoT)",
    icon: "♊",
    desc: "Réplicas digitais de ativos físicos para simulação e teste.",
    taxonomy: ["IoT", "Simulation", "Industry 4.0"],
    services: [
      { name: "AWS IoT TwinMaker", role: "Criação de modelos digitais em 3D" },
      { name: "AWS IoT SiteWise", role: "Fonte de dados em tempo real do ativo" },
      { name: "Amazon Kinesis Video Streams", role: "Visualização de câmeras do ativo" },
      { name: "Amazon Timestream", role: "Histórico de telemetria do Twin" }
    ]
  },
  // 13. SPECIALIZED & NICHE INDUSTRIES
  {
    title: "Mainframe Modernization",
    icon: "📟",
    desc: "Migração de sistemas legados para ambientes de nuvem modernos.",
    taxonomy: ["Migration", "Legacy", "Modernization"],
    services: [
      { name: "AWS Mainframe Modernization", role: "Ferramentas de análise e replataforma" },
      { name: "Amazon AppStream 2.0", role: "Interface moderna para apps legados" },
      { name: "Amazon Aurora", role: "Substituição de DBs proprietários" },
      { name: "AWS Microservice Extractor", role: "Refatoração de monolitos mainframe" }
    ]
  },
  {
    title: "Smart City Infrastructure",
    icon: "🏙️",
    desc: "Gestão urbana inteligente via sensores e análise em tempo real.",
    taxonomy: ["Public Sector", "IoT", "Smart City"],
    services: [
      { name: "AWS IoT Core", role: "Conexão de semáforos e medidores" },
      { name: "Amazon Rekognition", role: "Análise de tráfego e segurança pública" },
      { name: "AWS Lake Formation", role: "Governança de dados do cidadão" },
      { name: "Amazon QuickSight", role: "Painéis de controle para gestores" }
    ]
  },
  {
    title: "Satellite Ground Station",
    icon: "🛰️",
    desc: "Processamento e download de dados diretamente do espaço.",
    taxonomy: ["Aerospace", "Direct Link", "Space"],
    services: [
      { name: "AWS Ground Station", role: "Antenas gerenciadas sob demanda" },
      { name: "Amazon S3", role: "Armazenamento dos dados de satélite" },
      { name: "Amazon SageMaker", role: "Análise de imagens multiespectrais" },
      { name: "AWS Lambda", role: "Acionamento de tarefas pós-passagem" }
    ]
  },
  {
    title: "Mobile Edge (5G Wavelength)",
    icon: "📱",
    desc: "Latência ultra-baixa para aplicações móveis 5G.",
    taxonomy: ["Telco", "5G", "Low Latency"],
    services: [
      { name: "AWS Wavelength", role: "Nós de computação dentro da rede 5G" },
      { name: "Amazon VPC", role: "Extensão da rede local para a borda" },
      { name: "Amazon EKS", role: "Orquestração de apps na borda mobile" },
      { name: "AWS Local Zones", role: "Extensão regional para latência sub-10ms" }
    ]
  },
  {
    title: "Connected Vehicle Telemetry",
    icon: "🚗",
    desc: "Monitoramento de frotas e telemetria automotiva global.",
    taxonomy: ["Automotive", "IoT", "Telemetry"],
    services: [
      { name: "AWS IoT FleetWise", role: "Coleta seletiva de dados veiculares" },
      { name: "Amazon Kinesis", role: "Ingestão de streaming de telemetria" },
      { name: "Amazon Timestream", role: "Armazenamento de séries temporais de sensores" },
      { name: "Amazon Redshift", role: "Análise histórica de performance de frota" }
    ]
  },
  {
    title: "Retail Omnichannel Sync",
    icon: "🛍️",
    desc: "Sincronização entre estoques de lojas físicas e e-commerce.",
    taxonomy: ["Retail", "Inventory", "Sync"],
    services: [
      { name: "Amazon EventBridge", role: "Sincronização de eventos de venda" },
      { name: "Amazon DynamoDB", role: "Estado global de estoque em tempo real" },
      { name: "AWS AppSync", role: "GraphQL para apps de vendedores em loja" },
      { name: "Amazon Kinesis Video", role: "Análise de fluxo em loja física" }
    ]
  },
  {
    title: "AgTech Field Monitoring",
    icon: "🌾",
    desc: "Monitoramento de colheitas e solo via sensores e ML.",
    taxonomy: ["Agriculture", "IoT", "ML"],
    services: [
      { name: "AWS IoT Core", role: "Conexão de sensores de solo e drones" },
      { name: "Amazon SageMaker Geospatial", role: "Análise de imagens de satélite de campo" },
      { name: "AWS IoT Greengrass", role: "Processamento local em áreas sem sinal" },
      { name: "Amazon S3", role: "Repositório de dados agrometeorológicos" }
    ]
  },
  {
    title: "Healthcare Health Lake",
    icon: "🏥",
    desc: "Análise preditiva de saúde com conformidade HIPAA.",
    taxonomy: ["Healthcare", "Pharma", "Compliance"],
    services: [
      { name: "Amazon HealthLake", role: "Armazenamento padronizado de dados (FHIR)" },
      { name: "Amazon Comprehend Medical", role: "Extração de dados de receitas e exames" },
      { name: "Amazon S3", role: "Armazenamento seguro e criptografado" },
      { name: "AWS Advanced Shield", role: "Proteção contra ataques a infra de saúde" }
    ]
  },
  {
    title: "Disaster Recovery (Pilot Light)",
    icon: "🚒",
    desc: "Estratégia de recuperação de desastres com replicação contínua e baixo custo.",
    taxonomy: ["Resilience", "Disaster Recovery", "Business Continuity"],
    services: [
      { name: "Route 53 (Failover)", role: "Redirecionamento automático por saúde do endpoint" },
      { name: "RDS Global Database", role: "Replicação cross-region com latência de < 1s" },
      { name: "Amazon S3 Replication", role: "Cópia automática de arquivos para região secundária" },
      { name: "AWS CloudFormation / CDK", role: "Provisionamento rápido da infraestrutura reserva" }
    ]
  },
  {
    title: "Video on Demand (VOD) Pipeline",
    icon: "🎞️",
    desc: "Processamento e entrega de vídeos pré-gravados em escala global.",
    taxonomy: ["Media", "Video", "VOD", "Content Delivery"],
    services: [
      { name: "Amazon S3", role: "Armazenamento dos arquivos originais (Mezzanine)" },
      { name: "AWS Elemental MediaConvert", role: "Transcodificação para múltiplos formatos/bitrates" },
      { name: "Amazon CloudFront", role: "Entrega global para viewers com cache de borda" },
      { name: "AWS Lambda / Step Functions", role: "Orquestração do fluxo de transcodificação" }
    ]
  }
];

     // END AWS_DATA

// ──────────────────────────────────────────────
// STATE
// ──────────────────────────────────────────────
let activeCategory = null;
let searchQuery    = "";

// ──────────────────────────────────────────────
// DOM REFS
// ──────────────────────────────────────────────
const categoryNav    = document.getElementById("categoryNav");
const servicesGrid   = document.getElementById("servicesGrid");
const panelTitle     = document.getElementById("panelTitle");
const serviceCount   = document.getElementById("serviceCount");
const searchInput    = document.getElementById("searchInput");
const modal          = document.getElementById("modal");
const modalClose     = document.getElementById("modalClose");
const modalIcon      = document.getElementById("modalIcon");
const modalCategory  = document.getElementById("modalCategory");
const modalTitle     = document.getElementById("modalTitle");
const modalShortName = document.getElementById("modalShortName");
const modalDesc      = document.getElementById("modalDescription");
const modalUseCase   = document.getElementById("modalUseCase");
const modalDocsLink  = document.getElementById("modalDocsLink");
const modalSubSection = document.getElementById("modalSubservicesSection");
const modalSubList    = document.getElementById("modalSubservices");
const subModal        = document.getElementById("subModal");
const subModalTitle   = document.getElementById("subModalTitle");
const subModalDesc    = document.getElementById("subModalDescription");
const subModalClose   = document.getElementById("subModalClose");
const subModalBack    = document.getElementById("subModalBack");
const tabCatalog      = document.getElementById("tabCatalog");
const tabArch         = document.getElementById("tabArch");
const catalogView     = document.getElementById("catalogView");
const archView        = document.getElementById("archView");
const archGrid        = document.getElementById("archGrid");



// ──────────────────────────────────────────────
// RENDER SIDEBAR
// ──────────────────────────────────────────────
function renderSidebar() {
  categoryNav.innerHTML = "";
  Object.entries(AWS_DATA).forEach(([catName, catData]) => {
    const btn = document.createElement("button");
    btn.className = "category-btn" + (activeCategory === catName ? " active" : "");
    btn.setAttribute("data-category", catName);

    btn.innerHTML = `
      <span class="category-icon">${catData.icon}</span>
      <span class="category-name">${catName}</span>
      <span class="category-count">${catData.services.length}</span>
    `;
    btn.addEventListener("click", () => selectCategory(catName));
    categoryNav.appendChild(btn);
  });
}

// ──────────────────────────────────────────────
// SELECT CATEGORY
// ──────────────────────────────────────────────
function selectCategory(catName) {
  activeCategory = catName;
  searchQuery    = "";
  searchInput.value = "";
  renderSidebar();
  renderGrid();
}

// ──────────────────────────────────────────────
// RENDER GRID
// ──────────────────────────────────────────────
function renderGrid() {
  servicesGrid.innerHTML = "";
  let services = [];
  let title    = "Selecione uma categoria";

  if (searchQuery.trim()) {
    title = `Resultados: "${searchQuery}"`;
    const q = searchQuery.toLowerCase();
    Object.entries(AWS_DATA).forEach(([catName, catData]) => {
      catData.services.forEach(svc => {
        if (
          svc.name.toLowerCase().includes(q) ||
          svc.short.toLowerCase().includes(q) ||
          svc.description.toLowerCase().includes(q)
        ) {
          services.push({ ...svc, _cat: catName, _catColor: catData.color });
        }
      });
    });
  } else if (activeCategory) {
    const cat = AWS_DATA[activeCategory];
    title    = activeCategory;
    services = cat.services.map(s => ({ ...s, _cat: activeCategory, _catColor: cat.color }));
  }

  panelTitle.textContent = title;

  if (services.length === 0) {
    serviceCount.textContent = "";
    servicesGrid.innerHTML = `
      <div class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <p>${searchQuery ? "Nenhum serviço encontrado" : "Selecione uma categoria na barra lateral"}</p>
        <span>${searchQuery ? "Tente outro termo de busca." : "Explore os serviços AWS por categoria."}</span>
      </div>`;
    return;
  }

  const total = Object.values(AWS_DATA).reduce((s,c) => s + c.services.length, 0);
  serviceCount.textContent = searchQuery
    ? `${services.length} de ${total} serviços`
    : `${services.length} serviço${services.length !== 1 ? "s" : ""}`;

  services.forEach((svc, i) => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.setAttribute("role", "listitem");
    card.setAttribute("tabindex", "0");
    card.style.animationDelay = `${i * 0.03}s`;

    card.innerHTML = `
      <div class="card-logo" style="background:${svc._catColor}22;border:1px solid ${svc._catColor}44;">
        <span>${svc.emoji}</span>
      </div>
      <div class="card-info">
        <div class="card-name">${svc.short}</div>
        <div class="card-short">${svc.name}</div>
      </div>`;

    card.addEventListener("click",   () => openModal(svc));
    card.addEventListener("keydown", e => { if (e.key==="Enter"||e.key===" ") openModal(svc); });
    servicesGrid.appendChild(card);
  });
}

// ──────────────────────────────────────────────
// MODAL
// ──────────────────────────────────────────────
function openModal(svc) {
  modalIcon.innerHTML   = `<span style="font-size:26px;">${svc.emoji}</span>`;
  modalIcon.style.cssText = `background:${svc._catColor}22;border:1px solid ${svc._catColor}44;`;
  modalCategory.textContent  = svc._cat;
  modalTitle.textContent     = svc.name;
  modalShortName.textContent = svc.short !== svc.name ? `(${svc.short})` : "";
  modalDesc.textContent      = svc.description;
  modalUseCase.textContent   = svc.useCase;
  modalDocsLink.href         = svc.docs;

  // Subservices
  if (svc.subservices && svc.subservices.length > 0) {
    modalSubList.innerHTML = "";
    svc.subservices.forEach(sub => {
      const li = document.createElement("li");
      li.className = "subservice-item";
      li.textContent = sub;
      li.addEventListener("click", () => openSubModal(sub));
      modalSubList.appendChild(li);
    });
    modalSubSection.classList.remove("hidden");
  } else {
    modalSubSection.classList.add("hidden");
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => modalClose.focus(), 50);
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key==="Escape") { closeSubModal(); closeModal(); } });
function openSubModal(subName) {
  subModalTitle.textContent = subName;
  subModalDesc.textContent  = SUBSERVICE_INFO[subName] || "Este componente é fundamental para o funcionamento do serviço. Ele gerencia as operações específicas e garante a integração com o ecossistema AWS.";
  subModal.classList.add("open");
}

function closeSubModal() {
  subModal.classList.remove("open");
}

subModalClose.addEventListener("click", closeSubModal);
subModalBack.addEventListener("click", closeSubModal);
subModal.addEventListener("click", e => { if (e.target === subModal) closeSubModal(); });

// ──────────────────────────────────────────────
// VIEW SWITCHING
// ──────────────────────────────────────────────
function switchView(view) {
  if (view === 'catalog') {
    tabCatalog.classList.add("active");
    tabArch.classList.remove("active");
    catalogView.classList.add("active-view");
    archView.classList.remove("active-view");
  } else {
    tabCatalog.classList.remove("active");
    tabArch.classList.add("active");
    catalogView.classList.remove("active-view");
    archView.classList.add("active-view");
    renderArchGrid();
  }
}

tabCatalog.addEventListener("click", () => switchView('catalog'));
tabArch.addEventListener("click", () => switchView('arch'));

// ──────────────────────────────────────────────
// RENDER ARCH GRID
// ──────────────────────────────────────────────
function renderArchGrid() {
  archGrid.innerHTML = "";
  ARCHITECTURES_DATA.forEach((arch, i) => {
    const card = document.createElement("div");
    card.className = "arch-card";
    card.style.animationDelay = `${i * 0.05}s`;
    
    card.innerHTML = `
      <div class="arch-card-header">
        <div class="arch-icon">${arch.icon}</div>
        <h3 class="arch-title">${arch.title}</h3>
      </div>
      <p class="arch-desc">${arch.desc}</p>
      <div class="arch-tags">
        ${arch.taxonomy.map(t => `<span class="arch-tag">${t}</span>`).join("")}
      </div>
    `;
    
    card.addEventListener("click", () => openArchModal(arch));
    archGrid.appendChild(card);
  });
}

function openArchModal(arch) {
  // We reuse the main modal for Architectures but with different content
  modalIcon.innerHTML   = `<span style="font-size:26px;">${arch.icon}</span>`;
  modalIcon.style.cssText = `background: var(--aws-blue)22; border: 1px solid var(--aws-blue)44;`;
  modalCategory.textContent  = "Reference Architecture";
  modalTitle.textContent     = arch.title;
  modalShortName.textContent = "";
  modalDesc.textContent      = arch.desc;
  
  // Custom list for services in the architecture
  modalUseCase.innerHTML = `
    <ul style="list-style:none; padding:0; margin-top:10px;">
      ${arch.services.map(s => `
        <li style="margin-bottom:12px; display:flex; gap:10px; align-items:flex-start;">
          <strong style="color:var(--aws-orange); font-size:12px; white-space:nowrap;">${s.name}:</strong>
          <span style="font-size:11.5px; color:var(--text-secondary); line-height:1.4;">${s.role}</span>
        </li>
      `).join("")}
    </ul>
  `;
  
  // Hide subservices section for architecture modal
  modalSubSection.classList.add("hidden");
  modalDocsLink.href = "https://aws.amazon.com/architecture/";
  
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}



// ──────────────────────────────────────────────
// SEARCH
// ──────────────────────────────────────────────
searchInput.addEventListener("input", e => {
  searchQuery = e.target.value;
  if (searchQuery) { activeCategory = null; renderSidebar(); }
  renderGrid();
});

// ──────────────────────────────────────────────
// INIT — select first category
// ──────────────────────────────────────────────
(function init() {
  // Update header stats badge with real total
  const total = Object.values(AWS_DATA).reduce((sum, cat) => sum + cat.services.length, 0);
  const cats  = Object.keys(AWS_DATA).length;
  const badge = document.getElementById("totalCount");
  if (badge) badge.textContent = `${total} serviços · ${cats} categorias`;

  renderSidebar();
  selectCategory(Object.keys(AWS_DATA)[0]);
})();
