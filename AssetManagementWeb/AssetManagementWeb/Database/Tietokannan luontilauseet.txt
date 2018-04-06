CREATE TABLE [dbo].[AssetLocation]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[Code] NVARCHAR(100),
	[Name] NVARCHAR(200),
	[Address] NVARCHAR(200)
)

CREATE TABLE [dbo].[Assets]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[Code] NVARCHAR(100),
	[Type] NVARCHAR(200),
	[Model] NVARCHAR(200)
)

CREATE TABLE [dbo].[AssetsLocations] (
    [Id]         INT      IDENTITY (1, 1) NOT NULL,
    [LocationId] INT      NULL,
    [AssetId]    INT      NULL,
    [LastSeenl]  DATETIME NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC), 
    CONSTRAINT [FK_AssetsLocations_Assets] FOREIGN KEY ([AssetId]) REFERENCES [Assets]([Id]),
	CONSTRAINT [FK_AssetsLocations_Locations] FOREIGN KEY ([LocationId]) REFERENCES [AssetLocation]([Id])
);
