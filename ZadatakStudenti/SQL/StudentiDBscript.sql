USE [master]
GO
/****** Object:  Database [StudentiDB]    Script Date: 7/9/2020 6:58:04 PM ******/
CREATE DATABASE [StudentiDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'StudentiDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS01\MSSQL\DATA\StudentiDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'StudentiDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS01\MSSQL\DATA\StudentiDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [StudentiDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [StudentiDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [StudentiDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [StudentiDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [StudentiDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [StudentiDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [StudentiDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [StudentiDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [StudentiDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [StudentiDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [StudentiDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [StudentiDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [StudentiDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [StudentiDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [StudentiDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [StudentiDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [StudentiDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [StudentiDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [StudentiDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [StudentiDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [StudentiDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [StudentiDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [StudentiDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [StudentiDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [StudentiDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [StudentiDB] SET  MULTI_USER 
GO
ALTER DATABASE [StudentiDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [StudentiDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [StudentiDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [StudentiDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [StudentiDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [StudentiDB] SET QUERY_STORE = OFF
GO
USE [StudentiDB]
GO
/****** Object:  Table [dbo].[__MigrationHistory]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__MigrationHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ContextKey] [nvarchar](300) NOT NULL,
	[Model] [varbinary](max) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC,
	[ContextKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](128) NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](128) NOT NULL,
	[ProviderKey] [nvarchar](128) NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC,
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](128) NOT NULL,
	[RoleId] [nvarchar](128) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](128) NOT NULL,
	[Email] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEndDateUtc] [datetime] NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[UserName] [nvarchar](256) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Kurs]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Kurs](
	[PKKursID] [int] IDENTITY(1,1) NOT NULL,
	[NazivKursa] [nchar](50) NOT NULL,
 CONSTRAINT [PK_Kurs] PRIMARY KEY CLUSTERED 
(
	[PKKursID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StatusStudenta]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StatusStudenta](
	[PKStatusStudentaID] [int] IDENTITY(1,1) NOT NULL,
	[NazivStatusa] [nchar](20) NOT NULL,
 CONSTRAINT [PK_StatusStudenta] PRIMARY KEY CLUSTERED 
(
	[PKStatusStudentaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Studenti]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Studenti](
	[PKStudentID] [int] IDENTITY(1,1) NOT NULL,
	[BrojIndeksa] [nchar](10) NULL,
	[Ime] [nchar](50) NOT NULL,
	[Prezime] [nchar](50) NOT NULL,
	[Godina] [int] NOT NULL,
	[StatusStudenta] [nchar](20) NULL,
 CONSTRAINT [PK_Studenti] PRIMARY KEY CLUSTERED 
(
	[PKStudentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StudentiKurs]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentiKurs](
	[PKStudentID] [int] NOT NULL,
	[PKKursID] [int] NOT NULL,
 CONSTRAINT [PK_StudentiKurs] PRIMARY KEY CLUSTERED 
(
	[PKStudentID] ASC,
	[PKKursID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__MigrationHistory] ([MigrationId], [ContextKey], [Model], [ProductVersion]) VALUES (N'202006151532133_InitialCreate', N'Zadatak.Models.ApplicationDbContext', 0x1F8B0800000000000400DD5C5B6FDB36147E1FB0FF20E8691B522B97B5E802BB45E6245BB0E6823A2D86BD14B4443B42254A93A82CC1D05FB687FDA4FD85911275E14DA26CC5768A0285451E7EE7F0F0903C3C3CCC7FFFFC3B7EFB1006D63D4C523F4213FB60B46F5B10B991E7A3E5C4CEF0E2C56BFBED9B6FBF199F79E183F5B1A43BA274A4254A27F61DC6F1B1E3A4EE1D0C413A0A7D3789D26881476E143AC08B9CC3FDFD9F9C83030712089B6059D6F87D86B01FC2FC837C4E23E4C2186720B88C3C18A4AC9CD4CC7254EB0A84308D810B27F61FC003187C1E1594B67512F880483183C1C2B60042110698C878FC2185339C4468398B4901086E1F6348E81620482193FDB82637EDC6FE21ED8653372CA1DC2CC551D813F0E088E9C5119BAFA45DBBD21BD1DC19D1307EA4BDCEB537B12F3C9817BD8F02A20091E1F1344828F1C4BEAC589CA4F115C4A3B2E1A8803C4F08DC5F51F279D444DCB38CDBED55767438DAA7FFF6AC6916E02C811304339C8060CFBAC9E681EFFE061F6FA3CF104D8E0EE68BA3D72F5F01EFE8D58FF0E865B3A7A4AF848E2B2045374914C384C8061755FF6DCBE1DB3962C3AA59A34DA115624B644AD8D625787807D112DF91C972F8DAB6CEFD07E89525CCB83E209FCC20D2082719F9BCCA8200CC0358D53BAD3CE9FF2D5C0F5FBE1A84EB15B8F797F9D00BFCC9C449C8BC7A0F83BC36BDF3E3627A71E3FD89919D275148BF79FB2A6A3FCDA22C716967222DC92D489610F3D28D9DDA788D4C9A420D6FD625EAEE9B369554366F2529EDD02A33A164B1E9D950CAFBB47C8D2DEE248EC9E0E5A64535D26670FC4635125AEE59ACBE369903539341A42B5FF30A7816023F18600934E0423C8F859F84B0EAE5CF113138807ACB7C03D294AC00DEAF20BD6B119DFC1C40F41974B38418E60C83307E726E37771182575938A7F6BE395E830DCDED5FD1397071949C21DA6A6DBC7791FB39CAF019F24E01861FB05B02D2CF5B3F340718449C13D785697A4E8C197AD38838D625E005C24787BDE1E8E2B46D17641A003F54FB20C232FAA924ADFD103585E48B68C854FE489BA8EFA2A58FCC442D49F5A216149DA232B2BEA25230334919A55ED09CA053CE826A300F2F1FA1E15DBC1C76F77DBCF5366FDD5AD050E38CAC90F0178860429631EF06600C13548F80C9BAB10D67211F3ECAF4C9F7A69CD347106443B35A6936E48BC0F0B32187DDFDD9908B498AEF7D8F7A2506079F9298C01BD1ABCF54DD734E906CD3D381EBE6A6996F660DD04D9793348D5C3F9F058A90170B58F0F2131FCEEA8E5E14BD112320A463C4D07DBAE59112D2375B34AA6B740A0388A175E21621C129485DE0C96A241DF27A0856EEA80AC1EA48082FDC0F124F62E930A18D003D04A564A6FA08CBD3C247AE1F83A0534B424BC32D8CF6BDE221D69CC21822CAB0531326CCD5810F2A40C54718942E0D8D9D86C5B51BA2C66BD58D79970B5B8FBB148FD8884D76F8CE1ABB64FEDB931866BBC636609CED2A3111401BC4DB8681B2B38AA9018807975D3350E1C4A43150E6526DC440798D6DC14079953C3B032D8EA8A6E32F9C5777CD3CF983F2E6B7F556756DC136397DEC986916BE276983490B98C8E6793AA795F0012B0E67444E763E4B99AB2B9A08059F41CC876C6A7F57E9873AED20A211B501D686D601CAAEFF24206942F510AE8CE5B54AC7BC881EB065DCAD1596ADFD026CC30664ECE6356883507F592A1AA7D1E9A3EA59650D92911B1D161A380A8310172FBEE3064AD1C56565C598F8C27DBCE146C7D860B428A8C373D528A9ECCCE05A2A4DB35B4B2A87AC8F4BB6969604F749A3A5B233836B89D968B792144E410FB7602D15F15BF84093AD8C7454BB4D5537768ACC28563076342954E34B10C73E5A3652AA5889352BF2A9A62F66FD938DC202C3715345CE51256DC50947095842A196B026929EFB498A4F01067340E33C532F94C8947BAB66F92F5936B74F7910CB7DA0A4A6BF8B16C2A53DB7CFCA8E086B7F4E7A17526F260FA12BC65EDDDCA2E96D200089226A3F8D822C447AE74ADFBAB8BB6BB62F4A6484B123C82F394F92A624179757BBD1A0C813628001AAFC96D507490FA15375E9753695ADF344F5286560AA89A20B566D6DD0740E8CF140897E61FF71EA44789AF9C492519A00ACA82746239F41026BD499A3F229274D4CBEC61C51C82B69420A553DA46C668F7042362B56C2D368544D61CE41CE1769A2CBB5E6C88ACC9126B4A27A056C85CC629D39AA22B9A409ACA836C7AE334DC4057487772CED6965A52DAB38CCAEB76769309E66351C66CB6BDCD937811AC53DB1D8ADBC04C6CA77D292B427BA952CA9885FAC67491A0CFD8AC3DD74F30B4EEBF5BC1E93BBBEE616F5B6EB7B3D5E3F7B7D52AB900E732249C5BD3AD40987B7313B48753F92914E5605896D956A241BFA638A6138A204A3D99FC134F0215DBE4B824B80FC054C7191B2611FEE1F1C0A6F6D76E7DD8B93A65EA03888EA1EBFF063B681EC2B740F12F70E24722EC41A6F436A5029CC7C813CF830B1FFCE5B1DE7110BFA2B2FDEB32ED20FC8FF332315B74906AD2F726EE730B9F206AF332A41BF3C8B670FE62ABFF8FD53D174CFBA4EC8743AB6F60545AF32FCFC63885ED2144DD79066E52712CF77B671EF1094A8C26C59FDD9C1DCC7833C3928A5FC2E040FDFF7154DF9AC602D44C5D381A1F00651A1EE69C02A58DA6701C46783387F16D0AFB3EA6702AB88A67D22E0A3FE60E20301F365A86CB9C57D487158DAC49294EBB933C17AAD6CCB6DEF4D521EF65A135DCEB5EE0137683EF57A2ECA33CB531E6CEB54A4210F86BD4DBB7FF2DCE35D4937AE9DF6ED66196F32B1B8E512E9ABCA27DE810C384546CFF6B386376D6BBAE8EF8EA75EF6CB0DDE316363DBFCF63380376D6CBA00F18E1B5BAF3CDF1DB3B56DED9F5BB634E32D74EB59BB720292E616471545EECACA2D42EEE4F83F8F8811141E65F198529D06D696C2DAC1B026D133D5E79F898CA58923F19528DAD9F6EB2BDBF05B3BCB68DAD96AB236DB78B3F5BF9537A369E7ADC985DC463EB1321B5195E3DDB18EB5A54C3DA7FC61AE271DE9EA5D3E6BEB95FC734A171E4429DCECD1DC2E3F9FECE0415432E4D4E9910D2C5F1493BDB3F13717C9FE9DFACB1A82FE0546045D6ED7AC682ED0222A376F41A2924488D05C429C672A9C24D85F0017936A1A80CE5F83E7413D7A0D3287DE05BACE709C61D26518CE032EE0459D8036FE79CA332FF3F83AA65FE9105D2062FA34707F8D7ECEFCC0ABE43E57C4843410D4BB60E15E3A9698867D978F15D255840C8198FA2AA7E816867140C0D26B3403F77015D988F9BD834BE03ED611401D48F740F06A1F9FFA609980306518757BF2496CD80B1FDEFC0F8C3047D17A540000, N'6.2.0-61023')
GO
INSERT [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'3f241638-e819-4d9e-9aba-d7eb7740ea5c', N'slaven@mail.com', 0, N'ABkw9lgc067WAQmGcpo6NvhLRFvlFnpYqcYQU7KMKVLXOicFR3K3ub9Nn314OP4lAw==', N'61b13dd8-5cfe-47e5-8c35-3cd7e2dfd938', NULL, 0, 0, NULL, 0, 0, N'slaven@mail.com')
INSERT [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'8b49866d-d1a4-4694-a017-ac26bb215505', N'slaven@hotmail.com', 0, N'ACYRjl1ANO1fH+HksSSJ2rUxOowlosZxr2h3GgFLe5xD5bhw2hBj98mXHdPaFTEPsQ==', N'c25a9244-0506-419e-ade8-b00d57b6bf74', NULL, 0, 0, NULL, 0, 0, N'slaven@hotmail.com')
INSERT [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'b6b3707f-f210-42b7-8036-c34979fb2899', N'slav@email.com', 0, N'ADd3V9zxtKT2KX/3xE69hX5cpiQkLO2IgDgkEMBuQyY4IqqjNryw7ucPZjb+p+KNPA==', N'8fa32de9-8599-449f-8e09-2e764fa27a8d', NULL, 0, 0, NULL, 0, 0, N'slav@email.com')
INSERT [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'd8f74d54-6f93-4dd4-9fb3-8d9d2e129974', N'slaven@email.com', 0, N'AIKk8R0Bjcc0PvBeWHUrUj0ccJbo5M97hsXRXMmGmHI4H95wt/CFszFjkmqszHwsYQ==', N'd79273f0-ba12-4752-b684-2900d5cacc7a', NULL, 0, 0, NULL, 0, 0, N'slaven@email.com')
GO
SET IDENTITY_INSERT [dbo].[Kurs] ON 

INSERT [dbo].[Kurs] ([PKKursID], [NazivKursa]) VALUES (1, N'C# for Beginners                                  ')
INSERT [dbo].[Kurs] ([PKKursID], [NazivKursa]) VALUES (2, N'UX styling                                        ')
INSERT [dbo].[Kurs] ([PKKursID], [NazivKursa]) VALUES (3, N'Cyber Security                                    ')
INSERT [dbo].[Kurs] ([PKKursID], [NazivKursa]) VALUES (4, N'JS Frameworks                                     ')
INSERT [dbo].[Kurs] ([PKKursID], [NazivKursa]) VALUES (5, N'Spanish by Hose                                   ')
INSERT [dbo].[Kurs] ([PKKursID], [NazivKursa]) VALUES (6, N'Future of Architecture                            ')
INSERT [dbo].[Kurs] ([PKKursID], [NazivKursa]) VALUES (7, N'Writing in the Science                            ')
INSERT [dbo].[Kurs] ([PKKursID], [NazivKursa]) VALUES (8, N'Social Psychology                                 ')
INSERT [dbo].[Kurs] ([PKKursID], [NazivKursa]) VALUES (9, N'SQL Server Managment                              ')
INSERT [dbo].[Kurs] ([PKKursID], [NazivKursa]) VALUES (13, N'Prazan kurs                                       ')
SET IDENTITY_INSERT [dbo].[Kurs] OFF
GO
SET IDENTITY_INSERT [dbo].[StatusStudenta] ON 

INSERT [dbo].[StatusStudenta] ([PKStatusStudentaID], [NazivStatusa]) VALUES (1, N'Redovan             ')
INSERT [dbo].[StatusStudenta] ([PKStatusStudentaID], [NazivStatusa]) VALUES (2, N'Vanredan            ')
SET IDENTITY_INSERT [dbo].[StatusStudenta] OFF
GO
SET IDENTITY_INSERT [dbo].[Studenti] ON 

INSERT [dbo].[Studenti] ([PKStudentID], [BrojIndeksa], [Ime], [Prezime], [Godina], [StatusStudenta]) VALUES (1, N'13/16     ', N'Djordje                                           ', N'Djuka                                             ', 4, N'Redovan             ')
INSERT [dbo].[Studenti] ([PKStudentID], [BrojIndeksa], [Ime], [Prezime], [Godina], [StatusStudenta]) VALUES (2, N'1406      ', N'Slaven                                            ', N'Cvijetic                                          ', 4, N'Vanredan            ')
INSERT [dbo].[Studenti] ([PKStudentID], [BrojIndeksa], [Ime], [Prezime], [Godina], [StatusStudenta]) VALUES (15, N'1407      ', N'Ognjen                                            ', N'Djuka                                             ', 4, N'Redovan             ')
INSERT [dbo].[Studenti] ([PKStudentID], [BrojIndeksa], [Ime], [Prezime], [Godina], [StatusStudenta]) VALUES (22, N'1666      ', N'Marko                                             ', N'Markovic                                          ', 2, N'Vanredan            ')
INSERT [dbo].[Studenti] ([PKStudentID], [BrojIndeksa], [Ime], [Prezime], [Godina], [StatusStudenta]) VALUES (23, N'2009RII   ', N'D''Arth''o                                          ', N'Nil''Guth Arth Qull                                ', 1, N'Vanredan            ')
INSERT [dbo].[Studenti] ([PKStudentID], [BrojIndeksa], [Ime], [Prezime], [Godina], [StatusStudenta]) VALUES (45, N'10/30     ', N'Uros                                              ', N'Nejaki                                            ', 4, N'Redovan             ')
INSERT [dbo].[Studenti] ([PKStudentID], [BrojIndeksa], [Ime], [Prezime], [Godina], [StatusStudenta]) VALUES (46, N'1989      ', N'Milos                                             ', N'Nikolic                                           ', 1, N'Redovan             ')
SET IDENTITY_INSERT [dbo].[Studenti] OFF
GO
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (1, 1)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (1, 2)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (1, 6)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (1, 7)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (2, 1)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (2, 2)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (2, 4)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (2, 5)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (2, 9)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (15, 4)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (15, 5)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (15, 6)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (15, 8)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (15, 9)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (22, 3)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (22, 5)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (22, 8)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (23, 3)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (23, 8)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (23, 9)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (45, 3)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (45, 4)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (45, 5)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (45, 6)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (45, 7)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (46, 4)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (46, 7)
INSERT [dbo].[StudentiKurs] ([PKStudentID], [PKKursID]) VALUES (46, 9)
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [RoleNameIndex]    Script Date: 7/9/2020 6:58:04 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [RoleNameIndex] ON [dbo].[AspNetRoles]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_UserId]    Script Date: 7/9/2020 6:58:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AspNetUserClaims]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_UserId]    Script Date: 7/9/2020 6:58:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AspNetUserLogins]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_RoleId]    Script Date: 7/9/2020 6:58:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_RoleId] ON [dbo].[AspNetUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_UserId]    Script Date: 7/9/2020 6:58:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AspNetUserRoles]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UserNameIndex]    Script Date: 7/9/2020 6:58:04 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [UserNameIndex] ON [dbo].[AspNetUsers]
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[StudentiKurs]  WITH CHECK ADD  CONSTRAINT [FK_StudentiKurs_Kurs] FOREIGN KEY([PKKursID])
REFERENCES [dbo].[Kurs] ([PKKursID])
GO
ALTER TABLE [dbo].[StudentiKurs] CHECK CONSTRAINT [FK_StudentiKurs_Kurs]
GO
ALTER TABLE [dbo].[StudentiKurs]  WITH CHECK ADD  CONSTRAINT [FK_StudentiKurs_Studenti] FOREIGN KEY([PKStudentID])
REFERENCES [dbo].[Studenti] ([PKStudentID])
GO
ALTER TABLE [dbo].[StudentiKurs] CHECK CONSTRAINT [FK_StudentiKurs_Studenti]
GO
/****** Object:  StoredProcedure [dbo].[spStudent_GetID]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[spStudent_GetID]
	@ID int
AS
BEGIN
	
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * FROM Studenti WHERE PKStudentID = @ID;
END
GO
/****** Object:  StoredProcedure [dbo].[spStudenti_GetAll]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[spStudenti_GetAll]
	AS
BEGIN
	
	SET NOCOUNT ON;

    
	SELECT *
	FROM dbo.Studenti;
END
GO
/****** Object:  StoredProcedure [dbo].[spStudenti_GetbyID]    Script Date: 7/9/2020 6:58:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[spStudenti_GetbyID]
@ID int
	AS
BEGIN
	
	SET NOCOUNT ON;

    
SELECT s.*, k.PKKursID, k.NazivKursa FROM Studenti s INNER JOIN
                            StudentiKurs sk ON s.PKStudentID = sk.PKStudentID INNER JOIN
                            Kurs k ON sk.PKKursID = k.PKKursID
                            WHERE s.PKStudentID = @ID

END

GO
USE [master]
GO
ALTER DATABASE [StudentiDB] SET  READ_WRITE 
GO
