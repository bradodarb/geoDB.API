USE [GeoLookup]
GO
/****** Object:  Table [dbo].[Cities]    Script Date: 6/17/2015 4:12:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cities](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CityName] [nchar](100) NOT NULL,
	[CountryCode] [nchar](5) NOT NULL,
	[Weight] [int] NOT NULL CONSTRAINT [DF_Cities_Weight]  DEFAULT ((0)),
 CONSTRAINT [PK_Citiess] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Countries]    Script Date: 6/17/2015 4:12:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Countries](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CountryCode_FIPS] [nchar](5) NOT NULL,
	[CountryCode_ISO] [nchar](5) NOT NULL,
	[TopLevelDomain] [nchar](5) NOT NULL,
	[CountryName] [nchar](50) NOT NULL,
	[RegionId] [int] NULL,
	[Weight] [int] NOT NULL CONSTRAINT [DF_Countries_Weight]  DEFAULT ((0)),
 CONSTRAINT [PK_Countries] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Regions]    Script Date: 6/17/2015 4:12:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Regions](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RegionCode] [int] NOT NULL,
	[RegionName] [nvarchar](50) NOT NULL,
	[Weight] [int] NOT NULL CONSTRAINT [DF_Regions_Weight]  DEFAULT ((0)),
 CONSTRAINT [PK_Regions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [idx_Cities_CountryCode]    Script Date: 6/17/2015 4:12:16 PM ******/
CREATE NONCLUSTERED INDEX [idx_Cities_CountryCode] ON [dbo].[Cities]
(
	[CountryCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [idx_CitiesCityCountry]    Script Date: 6/17/2015 4:12:16 PM ******/
CREATE NONCLUSTERED INDEX [idx_CitiesCityCountry] ON [dbo].[Cities]
(
	[CityName] ASC,
	[CountryCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [idx_CityCountryCode]    Script Date: 6/17/2015 4:12:16 PM ******/
CREATE NONCLUSTERED INDEX [idx_CityCountryCode] ON [dbo].[Cities]
(
	[CountryCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [idx_Countries_CountryCodeFIPS]    Script Date: 6/17/2015 4:12:16 PM ******/
CREATE NONCLUSTERED INDEX [idx_Countries_CountryCodeFIPS] ON [dbo].[Countries]
(
	[CountryCode_FIPS] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
